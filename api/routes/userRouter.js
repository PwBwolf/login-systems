/**
 * User router
 */
/**
 * Load module dependencies
 */
var express = require('express'),
    // userService = require('../services/userService.js'),
    jwt = require('jsonwebtoken'),
    settings = require('../config/settings.js'),
// Create Express router
    router = express.Router();




// This route deals enables HTML5Mode by forwarding missing files to the index.html
app.all('/*', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});



// Export router to be re-used
module.exports = router;