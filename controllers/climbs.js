var express = require('express');
var db = require('../models');
var router = express.Router();
var async = require('async');

router.get('/', function(req, res) {
    db.climb.findAll().then(function(climbs) {
        res.render('climbs', { climbs: climbs });
    });
});


module.exports = router;
