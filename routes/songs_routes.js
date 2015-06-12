'use strict';

var Song = require('../models/Song');
var bodyparser = require('body-parser');
var url = require('url');

module.exports = function(router) {
    router.use(bodyparser.json());

    router.get('/songs', function(req, res) {
        Song.find({}, function(err, data) {
            if (err) {
                console.log(err);
                return res.status(500).json({msg: 'internal server error'});
            }

            console.log('we\'re using the songs route');
            res.json(data);
        });
    });

    router.get('/songs/:id', function(req, res) {
        Song.findOne({'_id':    req.params.id}, function(err, data) {
            if (err) {
                console.log(err);
                return res.status(500).json({msg: 'internal server error'});
            }

            console.log('we\'re using the all songs route');


            res.json(data);
        });
    });

    router.get('/artist/:name', function(req, res) {
        var rex = new RegExp(req.params.name, 'g');
        Song.find({'artist': rex}, function(err, data) {
            if (err) {
                console.log(err);
                return res.status(500).json({msg: 'internal server error'});
            }

            console.log('we\'re using the artist route');


            res.json(data);
        });
    });

    router.get('/song/:name', function(req, res) {
        var rex = new RegExp(req.params.name, 'g');
        Song.find({'title': rex}, function(err, data) {
            if (err) {
                console.log(err);
                return res.status(500).json({msg: 'internal server error'});
            }

            console.log('we\'re using the song name route');


            res.json(data);
        });
    });

        router.get('/genre/:type', function(req, res) {
        var rex = new RegExp(req.params.type, 'g');
        Song.find({'genre': rex}, function(err, data) {
            if (err) {
                console.log(err);
                return res.status(500).json({msg: 'internal server error'});
            }

            console.log('we\'re using the song name route');


            res.json(data);
        });
    });

    router.get('/era/:year', function(req, res) {
        // console.log(req.params.year);
        // console.log(typeof(req.params.year));
        var rex = new RegExp(req.params.year);
        console.log(rex);
        Song.find({'release': rex}, function(err, data) {

            if (err) {
                console.log(err);
                return res.status(500).json({msg: 'internal server error'});
            }

            console.log('we\'re using the era route');


            res.json(data);
        });
    });

};


