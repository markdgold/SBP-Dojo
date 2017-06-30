//Requires and globals
require('dotenv').config();
var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('connect-flash');
var passport = require('./config/passportConfig');
var isLoggedIn = require('./middleware/isLoggedIn');
var async = require('async');
var imgur = require('imgur-node-api');
var multer = require('multer');
var multUp = multer({ dest: './uploads' });
var clientID = process.env.IMGUR_CLIENT_ID;
var path = require('path');
var db = require('./models');
var methodOverride = require('method-override');
var fs = require('fs');
var request = require('request');
var app = express();

//Set and Use
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts);
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next) {
    res.locals.alerts = req.flash();
    res.locals.currentUser = req.user;
    next();
});
app.use(express.static(__dirname + '/public/'));
app.use(methodOverride('_method'));

//routes
app.get('/credits', (req, res) => {
    imgur.setClientID(clientID);
    request('http://api.imgur.com/3/credits', (error, response, body) => {
        res.send(response);
    });
});

app.get('/', function(req, res) {
    db.climb.findAll({
        include: [db.user, db.grade],
        order: [
            ['createdAt', 'DESC']
        ]
    }).then(function(climbs) {
        res.render('climbs', { climbs: climbs });
    }).catch(function(error) {
        res.render('error');
    });
});

app.post('/', multUp.single('image'), function(req, res) {
    imgur.setClientID(clientID);
    imgur.upload(path.join('./', req.file.path), function(err, response) {
        var imgurURL = response.data.link;
        db.climb.create({
            name: req.body.climbName,
            grade_id: req.body.grade_id,
            style: req.body.style,
            imgur: imgurURL,
            creator_id: req.body.userID
        }).then(function(newClimb) {
            fs.unlink(req.file.path, (err) => {
                if (err) throw err;
            });
            res.redirect('/');
        }).catch(function(error) {
            res.render('error');
        });
    });
});

app.post('/filter', (req, res) => {
    var lowerGrade = req.body.slider_lower - 1;
    var upperGrade = req.body.slider_upper - 1;
    var style = req.body.style_group;
    var setBy = req.body.set_by;
    if (req.body.set_by === 'all') {
        setBy = { gt: -1 };
    } else {
        setBy = req.body.set_by;
    }
    if (!req.body.style_group) {
        style = ['power', 'crimp', 'oneMover', 'enduro', 'tech'];
    } else {
        style = req.body.style_group;
    }
    db.climb.findAll({
        include: [db.user, db.grade],
        order: [
            ['createdAt', 'DESC']
        ]
    }).then(climbs => {
        db.climb.findAll({
            where: {
                creator_id: setBy,
                grade_id: { between: [lowerGrade, upperGrade] },
                style: style
            },
            include: [db.user, db.grade],
            order: [
                ['createdAt', 'DESC']
            ]
        }).then(filteredClimbs => {
            res.render('filtered', { climbs: climbs, filteredClimbs: filteredClimbs });
        }).catch(error => {
            res.render('error');
        });
    });
});

// favorites
app.get('/favorites', (req,res) =>{
    db.climb_fav.findAll({
        where: {user_id: req.session.passport.user}
    })
    .then(favoriteClimbs => {
        var getFavoriteClimbsFn = function(favoriteClimb, callback){
            db.climb.findAll({
                where: {id: favoriteClimb.climb_id},
                include: [db.grade, db.user]
            })
            .then(favoriteClimbFull =>{
                callback(null, favoriteClimbFull);
            });
        };
        async.concat(favoriteClimbs, getFavoriteClimbsFn, function(err, result){
            console.log(result);
            res.render('favorites', {favoriteClimbs: result});
        });
    });
});


app.post('/favorites/:id', (req,res) =>{
    db.climb_fav.findOrCreate({
        where: {user_id: req.body.userId, climb_id: req.params.id}
    }).spread((favorite, wasCreated)=>{
        if (wasCreated){
            req.flash('success', 'Climb added to favorites')
            res.redirect('/');
        }
        else {
            req.flash('error', 'Climb already in favorites');
            res.redirect('/');
        }
    }).catch(function(error){
        req.flash('error', error.message);
        res.redirect('/');
    });
});

app.delete('/favorites/:id', (req, res) => {
    db.climb_fav.destroy({
        where: {climb_id: req.params.id, user_id: req.session.passport.user}
    }).then(() => {
        res.redirect('/favorites');
    });
});


// logbook
app.get('/logbook', (req,res) =>{
    db.climb_send.findAll({
        where: {user_id: req.session.passport.user}
    })
    .then(sentClimbs => {
        var getSentClimbsFn = function(sentClimb, callback){
            db.climb.findAll({
                where: {id: sentClimb.climb_id},
                include: [db.grade, db.user]
            })
            .then(sentClimbFull =>{
                callback(null, sentClimbFull);
            });
        };
        async.concat(sentClimbs, getSentClimbsFn, function(err, result){
            console.log(result);
            res.render('logbook', {sentClimbs: result});
        });
    });
});


app.post('/logbook/:id', (req,res) =>{
    db.climb_send.findOrCreate({
        where: {user_id: req.body.userId, climb_id: req.params.id}
    }).spread((send, wasCreated)=>{
        if (wasCreated){
            req.flash('success', 'Climb added to logbook');
            res.redirect('/');
        }
        else {
            req.flash('error', 'Climb already in logbook');
            res.redirect('/');
        }
    }).catch(function(error){
        req.flash('error', error.message);
        res.redirect('/');
    });
});

app.delete('/logbook/:id', (req, res) => {
    db.climb_send.destroy({
        where: {climb_id: req.params.id, user_id: req.session.passport.user}
    }).then(() => {
        res.redirect('/logbook');
    });
});



app.get('/error', function(req, res) {
    res.render('error');
});

app.get('/profile', isLoggedIn, function(req, res) {
    db.climb.findAll({
        where: {
            creator_id: req.user.id
        },
        order: [
            ['createdAt', 'DESC']
        ]
    }).then(usersClimbs => {
        res.render('profile', { usersClimbs: usersClimbs });
    }).catch(function(error) {
        res.render('error');
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/climb/:id', (req, res) => {
    var climbId = req.params.id;
    db.climb.findOne({
            where: {
                id: climbId
            },
            include: [db.user, db.grade]
        })
        .then(climb => {
            res.render('show', { climb: climb });
        })
        .catch(error => {
            res.render('error');
        });
});

app.get('/newClimb', isLoggedIn, function(req, res) {
    res.render('newClimb');
});

app.get('/editClimb/:id', isLoggedIn, (req, res) => {
    var climbId = req.params.id;
    db.climb.findById(climbId)
        .then(climb => {
            res.render('editClimb', { climb: climb });
        }).catch(error => {
            res.render('error');
        });
});

app.put('/editClimb/:id', (req, res) => {
    var climbId = req.params.id;
    var newClimbData = req.body;
    var updateClause = {
        style: newClimbData.style,
        grade_id: newClimbData.grade_id
    };
    var options = {
        where: { id: climbId }
    };
    db.climb.update(updateClause, options).then(updated => {
        res.redirect('/climb/' + climbId);
    }).catch(error => {
        res.render('error');
    });

});

app.delete('/editClimb/:id', (req, res) => {
    var climbId = req.params.id;
    db.climb.destroy({
        where: { id: climbId }
    }).then(() => {
        res.redirect('/profile');
    });
});

// app.get('*', (req, res) => {
//     res.render('error404');
// });

//controllers
app.use('/auth', require('./controllers/auth'));

//Listen
app.listen(process.env.PORT || 3000);
