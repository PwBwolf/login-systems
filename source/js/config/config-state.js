(function () {
    // Whole-script strict mode syntax
    'use strict';
    // Define cepan routes
    angular.module('app').config(['$stateProvider', '$urlRouterProvider', config]);
    // Config pseudo constructor function
    function config($stateProvider, $urlRouterProvider) {
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/start");
        // Now set up the states
        $stateProvider
            .state('home', {
                url: '/start',
                templateUrl: 'partials/layout/home.html',
                controller: 'HomeController as vm'
            });
            // .state('signin', {
            //     url: '/ingresar',
            //     templateUrl: 'partials/user/signin.html',
            //     controller: 'SignInController as vm'
            // })
            // .state('signout', {
            //     url: '/salir',
            //     controller: 'LogOutController as vm'
            // })
            // .state('signup', {
            //     url: '/registrar',
            //     templateUrl: 'partials/user/signup.html',
            //     controller: 'SignUpController as vm'
            // })
            // .state('records', {
            //     url: '/registros',
            //     templateUrl: 'partials/records/record-list.html',
            //     controller: 'RecordListController as vm'
            // })
            // .state('records-add', {
            //     url: '/registros/crear',
            //     templateUrl: 'partials/records/record-add.html',
            //     controller: 'RecordAddController as vm'
            // });
    }
}());