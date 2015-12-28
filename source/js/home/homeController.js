(function () {
    // Whole-script strict mode syntax
    'use strict';
    // Define home controller with its dependencies
    angular.module('app').controller('HomeController', ['$rootScope', homeController]);
    // Home controller pseudo constructor function
    function homeController($rootScope) {
        // Make a reference to keyword this into a more meaningful variable such as vm standing for view model
        var vm = this;
        /**
         * Native and bindable properties
         */
        // Main page title
        $rootScope.title = 'hello';
        /**
         * Internal functions
         */
        // Initialize home controller
        function _init() {
            // Show welcome message
            toastr.info('Home Page');
        }

        // Call _init function at the very beginning to initialize home controller
        _init();
    }
}());