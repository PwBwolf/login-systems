/**
 * User router
 */
/**
 * Load module dependencies
 */
var express = require('express'),
    userService = require('../services/userService.js'),
    jwt = require('jsonwebtoken'),
    settings = require('../config/settings.js'), //contains connection for mongodb 
    // Create Express router
    router = express.Router();

// This route deals enables HTML5Mode by forwarding missing files to the index.html

/**
  Retrives all of the users
**/
router.get('/', function (req, res) {
    userService.list(function(items) {
        res.json(items);
    }, function(err) {
        res.status(400).json(err);
    });
});


// Export router to be re-used
module.exports = router;