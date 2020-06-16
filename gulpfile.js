
const { watch, series } = require('gulp');

var gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat');


gulp.task('less', function (done) {

    gulp.src('./less/source.less')
        .pipe(less())
        .pipe(concat('source.css'))
        .pipe(gulp.dest('./css'));

    done();
});

gulp.task('watch:less', function () {
    gulp.watch('./less/**/*.less', series('less'));
});

