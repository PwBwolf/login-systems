/**
 * User router
 */
/**
 * Load module dependencies
 */
var express = require('express'),
    userService = require('../services/userService.js'),
    jwt = require('jsonwebtoken'), //is how we create and verify our JSON web tokens
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

/**
 * Sign in selected user
 */
router.get('/signin', function (req, res) {
  userService.signin(req.body, function (user) { //run sign in function in the userService module 
    user.comparePasswords(req.body.password, function (err, isMatch) {
          if (err) {
              res.status(400).json(err);
          }

          if (!isMatch) {
              res.status(401).json({message:'email or password is incorrect'});
          }

          var payload = {
              sub: user._id
          };

          var token = jwt.sign(payload, settings.jwtSecret);

          res.status(201).send({
              user: user.toJSON(),
              token: token
          });
      });
    }, function(err) {
      res.status(400).json(err);
    })
})


/**
 * Sign up a new user
 */

router.post('/signup', function (req, res) {
  //use the signup function in the userService module pass in params from request then run callback function
  userService.signup(req.body, function(user) { 

  }, function(err) { //if there is an error throw a 400 'bad request' error
    res.status(400).json(err);
  });
});


// Export router to be re-used
module.exports = router;