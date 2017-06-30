var express = require('express');
var db = require('../models');
var async = require('async');
var router = express.Router();


router.get('/', (req,res) =>{
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


router.post('/:id', (req,res) =>{
    db.climb_fav.findOrCreate({
        where: {user_id: req.body.userId, climb_id: req.params.id}
    }).spread((favorite, wasCreated)=>{
        if (wasCreated){
            req.flash('success', 'Climb added to favorites');
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

router.delete('/:id', (req, res) => {
    db.climb_fav.destroy({
        where: {climb_id: req.params.id, user_id: req.session.passport.user}
    }).then(() => {
        res.redirect('/favorites');
    });
});


//Export
module.exports = router;
