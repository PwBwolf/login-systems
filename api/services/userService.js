

/**
 * User service. This file holds the mongoose logic to interact with the mongo db database
 */
/**
 * Load module dependencies for the  user models 
 */
var userModel = require('../models/userModel.js');

/**
 * Retrieve all users
 * @param callback
 * @param errback
 */
exports.list = function (callback, errback) {
    userModel.find(function(err, users) {
        if (err) {
            errback(err);
            return;
        }

        callback(users);
    });
};

/**
 * Sign in selected user
 * @param user
 * @param callback
 * @param errback
 */
exports.signin = function (user, callback, errback) {
    userModel.findOne(user.email, function(err, user) {
        if (err) {
            errback(err);
            return;
        }

        if (!user) {
            errback({message: 'email or password incorrect'});
            return;
        }

        callback(user);
    });
};

/**
 * Sign up a new user
 * @param user
 * @param callback
 * @param errback
 */
exports.signup = function (user, callback, errback) {
    userModel.create(user, function(err, user) {
        if (err) {
            errback(err);
            return;
        }

        callback(user);
    });
};