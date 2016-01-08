// Define settings object
var settings = {
    environment: global.environment || process.env.NODE_ENV || 'development',
    //creating mongodb database 
    database: {
        production: {
            //url: 'mongodb://''
        },
        test: {
            url: 'mongodb://localhost/logs-dev'
        },
        development: {
            url: 'mongodb://localhost/logs-dev'
        }
    },
    port: process.env.PORT || 3000,
    jwtSecret: 'Y2VwYW4='
};
// Exports settings object to be re-used
module.exports = settings;