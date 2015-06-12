'use strict';

var mongoose = require('mongoose');
var express = require('express');
var app = express();

var songsRoutes = express.Router();

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/notes_development');

app.use(express.static(__dirname + '/build'));

require('./routes/songs_routes')(songsRoutes);

app.use('/api', songsRoutes);

app.listen(process.env.PORT || 3000, function() {
  console.log('server running on port ' + (process.env.PORT || 3000));
});
