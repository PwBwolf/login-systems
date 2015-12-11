//--------------------------------------------------------------------
// <copyright file="settings.js" company="CEPAN">
//     Copyright (c) CEPAN. All rights reserved.
// </copyright>
// <author>Sol Landa - Leonardo Diaz Longhi - Agustin Cassani</author>
//--------------------------------------------------------------------
/**
 * Backend API settings file
 */
// Define settings object
var settings = {
    environment: global.environment || process.env.NODE_ENV || 'development',
    database: {
        production: {
            //url: 'mongodb://cepan:cepan@ds033133.mongolab.com:33133/heroku_rpn09jgm'
        },
        test: {
            //url: 'mongodb://localhost/cepan-test'
        },
        development: {
            //url: 'mongodb://localhost/cepan-dev'
        }
    },
    port: process.env.PORT || 3000,
    jwtSecret: 'Y2VwYW4='
};
// Exports settings object to be re-used
module.exports = settings;