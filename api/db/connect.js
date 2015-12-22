var mongoose = require('mongoose');
var settings = require('../config/settings.js');
// Connect to MongoDB database
mongoose.connect(settings.database[settings.environment].url);