(function () {
    // Whole-script strict mode syntax
    'use strict';
    // Define cepan configurations
    angular.module('app').config(['$locationProvider', '$httpProvider', config]).run([run]);
    // Config pseudo constructor function
    function config($locationProvider, $httpProvider) {
        // Activate HTML5 mode navigation
         $locationProvider.html5Mode(true);
        // Toastr messages configuration
        // For more options visit: http://codeseven.github.io/toastr/demo.html
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": false,
            "progressBar": false,
            "positionClass": "toast-bottom-right",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        };
        // Register our authentication token interceptor
        $httpProvider.interceptors.push('AuthInterceptorFactory');
    }
    // Run pseudo constructor function
    function run() {
        // Show welcome toastr message
        toastr.success('Hello admin!');
    }
}());