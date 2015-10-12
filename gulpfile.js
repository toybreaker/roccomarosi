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

var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

var responsive = require('gulp-responsive');

gulp.task('images', function () {
  return gulp.src('src/*.png')
    .pipe(responsive([{
      name: 'logo.png',
      width: 200
    },{
      name: 'logo.png',
      width: 200 * 2,
      rename: 'logo@2x.png'
    },{
      name: 'background-*.png',
      width: 700
    },{
      name: 'cover.png',
      width: '50%'
    }]))
    .pipe(gulp.dest('dist'));
});


gulp.task('imagemin', function () {
    return gulp.src('src/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('assests/p/images'));
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

