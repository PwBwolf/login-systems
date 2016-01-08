/**
 * User model
 */
/**
 * Load module dependencies
 */
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = new mongoose.Schema({
  name: { type: String, required: true },// for each key value pair we are defining the type and if it is required to create user.
  email: { type: String, required: true },
  password: { type: String, required: true },
  admin: { type: Boolean }
})


 
// Define user mongoose model
var user = mongoose.model('user', userSchema, 'user');
// Export user model to be a re-used 
module.exports = user; 