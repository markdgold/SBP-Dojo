require('dotenv').config();
var express = require('express');
var db = require('../models');
var router = express.Router();
var async = require('async');
var imgur = require('imgur-node-api');
var multer = require('multer');
var multUp = multer({ dest: './uploads' });
var clientID = process.env.IMGUR_CLIENT_ID;
var path = require('path');


router.get('/', function(req, res) {
    db.climb.findAll({
        include: [db.user]
    }).then(function(climbs) {
        res.render('climbs', { climbs: climbs });
    }).catch(function(error) {
        res.render('error');
    });
});

router.get('/error', function(req, res) {
    res.render('error');
})

router.post('/', multUp.single('image'), function(req, res) {
    imgur.setClientID(clientID);
    imgur.upload(path.join('./', req.file.path), function(err, response) {
        var imgurURL = response.data.link;
        console.log('imgur', imgurURL);
        db.climb.create({
            name: req.body.climbName,
            grade: req.body.grade,
            style: req.body.style,
            imgur: imgurURL,
            creator_id: req.body.userID
        }).then(function(newClimb) {
            res.redirect('/climbs');
        }).catch(function(error) {
            res.render('error');
        });
    });
});


module.exports = router;
