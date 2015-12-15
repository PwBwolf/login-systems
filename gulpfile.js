/**
 * Load module dependencies
 */
var gulp = require('gulp'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    cssmin = require('gulp-cssmin'), //detect errors and potential problems with css files
    jshint = require('gulp-jshint'), //detect errors and potential problems in JavaScript code 
    livereload = require('gulp-livereload'), //will not automatically listen for changes.
    uglify = require('gulp-uglify'); //parser/compressor/beautifier toolkit. 
/**
 * Configuration variables
 */

//where we are grabbing our code form and where we are building and min it too.
 var bases = {
    app: 'source/',
    dist: 'public/'
};

//have gulp see where all of our files are so it can build them into the public folder.
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

//this task cleans out the public file that is in the dist folder
gulp.task('clean', function() {
    gulp.src('/' + bases.dist + '**/*', { cwd: __dirname })
        .pipe(clean({force: true}));
});

// Define copy task
gulp.task('copy', function () {
    // Copy html
    gulp.src(bases.app + 'index.html')
        .pipe(gulp.dest(bases.dist))
        .pipe(livereload());
    // Copy favicon
    // gulp.src(bases.app + 'favicon.ico')
    //     .pipe(gulp.dest(bases.dist));
    // Copy fonts
    // gulp.src(bases.app + '/fonts/**/*')
    //     .pipe(gulp.dest(bases.dist + 'fonts'));
    // Copy partial views
    gulp.src(bases.app + '/partials/**/*.html')
        .pipe(gulp.dest(bases.dist + 'partials'))
        .pipe(livereload());
});

// Define bundle task
gulp.task('bundle', function () {
    // Bundle js files
    gulp.src(paths.libs) //grab all of the bower_componets js libraries specefied above
        .pipe(concat('bundle.min.js')) // pipe(when data becomes available) all those source files into concanttanated file called 'bundle.min.js' 
        .pipe(gulp.dest(bases.dist + '/js')); //pipe the above conc files and save them to the base.dist(public folder)/js folder. 
    // Bundle css files
    gulp.src(paths.styles) //grab all of the bower_components cdd libraries specified above 
        .pipe(concat('bundle.min.css')) //concat and minify them them into one fle called 'bundle.min.css'
        .pipe(gulp.dest(bases.dist + '/css')); //then save them in the public css folder
});
// Define concat task
gulp.task('concat', function () {
    // Concatenate all custom js files
    gulp.src(bases.app + 'js/**/*.js') //grab all of my client side (angular) javascript
        .pipe(jshint()) //detect any possible errors or potential JS problems
        .pipe(jshint.reporter('default'))
        .pipe(concat('pboro.min.js')) //pipe all of the js file into one concattinated js file 
        .pipe(uglify()) //compressor/parse
        .pipe(gulp.dest(bases.dist + '/js')); //save all the js files in the public folder under /js 
    // Concatenate all custom css files
    gulp.src(bases.app + 'css/**/*.css') //grab all of my custom css files 
        .pipe(concat('pboro.min.css')) //pipe all the css files into one concattinates css file 
        .pipe(cssmin()) //detect for errors
        .pipe(gulp.dest(bases.dist + '/css')); //save all the css files int the public folder under /cdd
});
gulp.task('concatDev', function () {
    // Concatenate all custom js files
    gulp.src(bases.app + 'js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat('pboro.min.js'))
        .pipe(gulp.dest(bases.dist + '/js'))
        .pipe(livereload());
    // Concatenate all custom css files
    gulp.src(bases.app + 'css/**/*.css')
        .pipe(concat('pboro.min.css'))
        .pipe(cssmin())
        .pipe(gulp.dest(bases.dist + '/css'))
        .pipe(livereload());
});
// Define watch task
gulp.task('watch', function () { //this will run and listen to any updates that are made. 
    livereload.listen(); 
    gulp.watch(bases.app + '**/*', ['clean', 'copy', 'bundle', 'concatDev']);
});

// Define default task
gulp.task('default', ['clean', 'copy', 'bundle', 'concat']);
// Define dev task
gulp.task('dev', ['clean', 'copy', 'bundle', 'concatDev', 'watch']);