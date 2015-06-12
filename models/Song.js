//song.js

'use strict';

var mongoose = require('mongoose');

var songSchema = new mongoose.Schema({
    artist: { type: String, index: true },
    title: { type: String, index: true },
    album: { type: String, index: true },
    release: { type: String, index: true },
    genre: { type: String, index: true },

});

module.exports = mongoose.model('Song', songSchema);
