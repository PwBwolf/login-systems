

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
        if(users.length === 0) {
            userModel.create({name: "peta", email: "peta.milark@gmail.com" , password: "berries"})
            userModel.create({name: "katnes", email: "katnes.grifindor@gmail.com" , password: "arrow"})
            userModel.create({name: "snow", email: "pres.snow@gmail.com" , password: "order"})
            console.log('initial users created')            
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
// exports.signin = function (user, callback, errback) {
//     userModel.findOne(user.email, function(err, user) {
//         if (err) {
//             errback(err);
//             return;
//         }

//         if (!user) {
//             errback({message: 'email or password incorrect'});
//             return;
//         }

//         callback(user);
//     });
// };

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