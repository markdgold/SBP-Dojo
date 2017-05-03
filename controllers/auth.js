//Requires and Globals
var express = require('express');
var passport = require('../config/passportConfig');
var db = require('../models');
var router = express.Router();

//Routes
router.get('/login', function(req, res) {
    res.render('loginForm');
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/profile',
    successFlash: 'Logged in.',
    failureRedirect: '/auth/login',
    failureFlash: 'Try again'
}));

router.get('/signup', function(req, res) {
    res.render('signupForm');
});

router.post('/signup', function(req, res, next) {
    db.user.findOrCreate({
        where: { username: req.body.username },
        defaults: {
            'email': req.body.email,
            'password': req.body.password
        }
    }).spread(function(user, wasCreated) {
        if (wasCreated) {
            //good
            passport.authenticate('local', {
                successRedirect: '/',
                successFlash: 'Logged in',
                failureRedirect: '/auth/signup',
                failureFlash: 'Unknown error. Please log in.'
            })(req, res, next);
        } else {
            //bad
            req.flash('error', 'Username already exists.');
            res.redirect('/auth/signup');
        }
    }).catch(function(error) {
        req.flash('error', error.message);
        res.redirect('/auth/signup');
    });
});

router.get('/logout', function(req, res) {
    req.logout();
    req.flash('success', 'You logged out');
    res.redirect('/');
});

//Export
module.exports = router;
