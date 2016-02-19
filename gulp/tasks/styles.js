var gulp        = require('gulp');
var sourcemaps  = require('gulp-sourcemaps');
var sass        = require('gulp-sass');
var config      = require('../config').styles;
var autoprefixer  = require('gulp-autoprefixer');
var browserSync = require('browser-sync').get('browSync');


gulp.task('styles', function () {
 return gulp.src(config.sources)
  .pipe(sourcemaps.init())
  .pipe(autoprefixer())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write('../maps'))
  .pipe(gulp.dest(config.destination))
  .pipe(browserSync.stream({match: '**/*.css'}));
});
