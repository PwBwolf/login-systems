// app.module.js
//wrap the components in an immediately invoked function 
//IIFE removes variables from the global scope. This helps prevent variables and function declarations from living longer than expected in the global scope, which also helps avoid variable collisions.
(function() {
  'use strict';
  //define the app.module.js
  angular
    .module('app', [
      'ui.router', 
      'ui.bootstrap'
    ]);
}());


