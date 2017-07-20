'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('sass', function () {
  gulp.src('./app/assets/stylesheets/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('all.css'))
    .pipe(gulp.dest('./assets/stylesheets'));
});

gulp.task('watch', function () {
  gulp.watch('./app/assets/stylesheets/**/*.scss', ['sass']);
});
