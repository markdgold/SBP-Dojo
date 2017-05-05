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
            console.log(req.file.path);
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
    console.log(req.body)
    var lowerGrade = req.body.slider_lower - 1;
    var upperGrade = req.body.slider_upper;
    var style = req.body.style_group;
    var setBy;
    if (req.body.set_by === 'all') {
        setBy = { gt: -1 };
    } else {
        setBy = req.body.set_by;
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
                grade_id: { gt: lowerGrade },
                grade_id: { lt: upperGrade },
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
        })
    });
});

app.get('/error', function(req, res) {
    res.render('error');
});

app.get('/profile', isLoggedIn, function(req, res) {
    console.log('req', req.user.id);
    db.climb.findAll({
        where: {
            creator_id: req.user.id
        }
    }).then(usersClimbs => {

        res.render('profile', { usersClimbs: usersClimbs });
    }).catch(function(error) {
        res.render('error');
    });
});

app.get('/about', (req, res) => {
    res.render('about');
})

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
        })
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
    console.log('newdata', req.body);
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

//controllers
app.use('/auth', require('./controllers/auth'));

//Listen
app.listen(process.env.PORT || 3000);
