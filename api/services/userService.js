

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
* user param in route '/signup' in userRouter.js will pass the req.body(the email and password) in user param
 * callback param in route '/signup' in userRouter.js  is being passed the bulk of logic that will compare
 *      the password assign a user.id and token to a payload that the browser will store. 
 * errback param  run the response 400 error that was given in route '/signup' in userRouter.js.
 *****In the below function*****
 * if there is not user return message, if the user is found by the user.email is found pass it to the 
 * callback param which will take the returned user and perfom the logic noted above.
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
    console.log(user)
    userModel.create(user, function(err, user) {
        console.log(user)
        if (err) {
            errback(err);
            return;
        }

        callback(user);
    });
};