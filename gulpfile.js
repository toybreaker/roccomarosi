'use strict';
// GULP tasks to work images.
// it works better than jekyll ruby plugins!
var changeCase   = require('change-case');
var gulp         = require('gulp');
// var gm           = require('gulp-gm');
var rename       = require('gulp-rename');
var responsive   = require('gulp-responsive');


// GM GraphicsMagick w/ gulp4
// maybe not needed
// gulp.task('tifs', function(done) {
//   gulp.src('./_src/p_lowercase/*.tif')
//     .pipe(gm(function (gmfile) {
//       return gmfile.setFormat('jpg');
//     }))
//     .pipe(gulp.dest('./_src/p_jpeg'));
//   done();
// });


// Reponsive sizing w/ gulp4
// NOTE: this does not create the destination dir for the work. Create it manually and move files inside. This task create jpgs in ./assets/p/
// OK!
gulp.task('jpgs', function (done) {
  return gulp.src('./_src/images/*.jpg')
    .pipe(responsive({
      '*.jpg': [{
        width: 320,
        quality: 51,
        progressive: true,
        sharper: true,
        rename: {
          suffix: '-320'
        }
      }, {
        width: 640,
        quality: 51,
        progressive: true,
        sharper: true,
        rename: {
          suffix: '-640'
        }
      }, {
        width: 1024,
        quality: 51,
        progressive: true,
        sharper: true,
        rename: {
          suffix: '-1024'
        }
      }, {
        //fullHD
        width: 1920,
        quality: 33,
        progressive: true,
        rename: {
          suffix: '-1920'
        }
      }, {
        //named same as original for use with jekyll_seo Open Graph / Twitter Cards
        width: 1024,
        quality: 44,
        progressive: true,
      }],
    }, {
      // global configuration for all images
      errorOnEnlargement: false,
      withMetadata: false,
      withoutEnlargement: false
    }))
    .pipe(gulp.dest('./assets/p'));
  done();
});


// Rename all to lowercase w/ gulp4
// OK!
gulp.task(function lower() {
  return gulp.src( './_src/images_to_be_lowercased/*.*' )
    .pipe(rename(function(fix) {
       fix.basename = changeCase.lowerCase(fix.basename);
     }))
    .pipe(gulp.dest( './_src/images' ));
});
