/**
 * User model
 */
/**
 * Load module dependencies
 */
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
//mongoose schema for a user 
var userSchema = new mongoose.Schema({
  name: { type: String, required: true },// for each key value pair we are defining the type and if it is required to create user.
  email: { type: String, required: true },
  password: { type: String, required: true },
  admin: { type: Boolean }
});

// encrypt the password before the user is saved to the mongodb
userSchema.pre('save', function (next) {
  var user = this;
  //check to see if the password has been changed
  if (!user.isModified('password')) {
    return next();
  }
  // Make the SALT 
  bcrypt.genSalt(10, function (err, salt) {
    if (err) {
      return next(err);
    }
    // Hash the password with the created salt
    bycrypt.hash(user.password, salt, null, function (err, hash) {
      if (err) {
        return next(err);
      }
      //if there is no error save the new encrypted password 
      user.password = hash;
      next();
    });
        
  }); 

});



 
// Define user mongoose model
var user = mongoose.model('user', userSchema, 'user');
// Export user model to be a re-used 
module.exports = user; 