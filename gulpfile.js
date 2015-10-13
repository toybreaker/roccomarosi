'use strict';
// GULP here just process sass and enable browsersync
// sourcemap handled automagically by gulp-ruby-sass
// images task to optimize images.

// w/watch function now... and it works!!!!!
var gulp         = require('gulp');
var sass         = require('gulp-ruby-sass');
var filter       = require('gulp-filter');
var browserSync  = require('browser-sync');
var reload       = browserSync.reload;

//testing...
var responsive = require('gulp-responsive-images');
 
gulp.task('img', function () {
  gulp.src('src/images/**/*')
    .pipe(responsive({
      '*.jpg': [{
        width: 1680,
        suffix: '-1680'
      }, {
        width: 1024,
        suffix: '-1024'
      }, {
        width: 640,
        suffix: '-640'
      }, {
        width: 320,
        suffix: '-320'
      }]
    }))
    .pipe(gulp.dest('assets/p'));
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync({
        proxy: "roccomarosi.dev"
    });

    gulp.watch("scss/*.scss", ['sass']);
    gulp.watch("*.css").on('change', reload);
    gulp.watch("*.htm").on('change', reload);
    gulp.watch("*.js").on('change', reload);
});


gulp.task('sass', function () {
    return gulp.src('scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('assets/css'))// Write the CSS & Source maps
        .pipe(filter('**/*.css')) // Filtering stream to only css files
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('default', ['serve']);

// to autoprefix just use sublime (alt+super+p) > autoprefixer 
// it will prefix the whole css/scss file
// https://github.com/sindresorhus/sublime-autoprefixer

//todo:
//minify task at least for css then maybe also html
//package task to zip version while in dev

