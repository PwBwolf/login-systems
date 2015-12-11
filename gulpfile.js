/**
 * Load module dependencies
 */
var gulp = require('gulp'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    cssmin = require('gulp-cssmin'),
    jshint = require('gulp-jshint'),
    livereload = require('gulp-livereload'),
    uglify = require('gulp-uglify');
/**
 * Configuration variables
 */

//where we are grabbing our code form and where we are building and min it too.
 var bases = {
    app: 'source/',
    dist: 'public/'
};

var paths = {
    libs: [
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/angular/angular.min.js',
        'bower_components/angular-ui-router/release/angular-ui-router.min.js',
        'bower_components/bootstrap/dist/js/bootstrap.min.js',
        'bower_components/angular-bootstrap/ui-bootstrap.min.js',
        'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
        'bower_components/toastr/toastr.min.js',
        'bower_components/datejs/build/production/date.min.js'
    ],
    styles: [
        'bower_components/bootstrap/dist/css/bootstrap.min.css',
        'bower_components/angular-bootstrap/ui-bootstrap-csp.css',
        'bower_components/toastr/toastr.min.css'
    ]
};