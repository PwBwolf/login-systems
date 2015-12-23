/**
 * User model
 */
/**
 * Load module dependencies
 */
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = new mongoose.Schema({
  name: String  ,
  email: String,
  password: String
})

var user = mongoose.model('user', userSchema); 