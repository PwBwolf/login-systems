(function() {
  'use strict';
  
  angular
    .module('app').config(['$locationProvider', '$httpProvider', config]).run([run]);
}())