(function() {
  'use strict';

    // Whole-script strict mode syntax
 
    // Define settings variable
  var settings = {
      //baseAPIUrl: 'https://cepan-admin.herokuapp.com/',
      baseAPIUrl: 'http://localhost:3000/',
      authTokenKey: 'token',
      endpoints: {
          signIn: 'user/signin',
          signUp: 'user/signup'
      }
  };
    // Define settings constant
  angular.module('app').constant('settings', settings);
}());