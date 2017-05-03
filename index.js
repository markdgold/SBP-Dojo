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
        include: [db.user],
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
            grade: req.body.grade,
            style: req.body.style,
            imgur: imgurURL,
            creator_id: req.body.userID
        }).then(function(newClimb) {
            res.redirect('/');
        }).catch(function(error) {
            res.render('error');
        });
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

app.get('/climb/:id', (req, res) => {
    var climbId = req.params.id;
    db.climb.findOne({
            where: {
                id: climbId
            },
            include: [db.user]
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
        });
});

app.put('/editClimb/:id', (req, res) => {
    var climbId = req.params.id;
    var newClimbData = req.body;
    console.log('newdata', req.body.style);
    var updateClause = {
        style: newClimbData.style,
        grade: newClimbData.grade
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
app.listen(3000);
