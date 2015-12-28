/**
 * User model
 */
/**
 * Load module dependencies
 */
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
})

// Define user mongoose model
var user = mongoose.model('user', userSchema, 'user');