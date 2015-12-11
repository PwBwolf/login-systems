var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var expressJwt = require('express-jwt');
var settings = require('./api/config/settings.js');
var userRouter = require('./api/routes/userRouter.js');