var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    expressJwt = require('express-jwt'),
    settings = require('./api/config/settings.js'), // mongodb setup
    userRouter = require('./api/routes/userRouter.js');




/**
 * Create our Express application
 */
var app = express();

/**
 * Connect to MongDB database
 */
require('./api/db/connect.js');





/**
 * Make our application listen on a given port
 */
app.listen(settings.port, function(){
    console.log('Application listening on ' + settings.port);
});