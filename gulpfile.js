/**
 * Created by haluniki on 31.05.16.
 */
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('source/sass/**/*.scss')
        .pipe(sass({
            outputStyle: 'nested'
        }).on('error', sass.logError))
        .pipe(gulp.dest('source/assets/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('source/sass/**/*.scss', ['sass']);
});
