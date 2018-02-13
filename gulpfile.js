var gulp            = require('gulp'),
    sequence        = require('gulp-sequence'),
    concat          = require('gulp-concat'),
    sass            = require('gulp-sass'),
    prefixer        = require('gulp-autoprefixer');

gulp.task('sass', function ()
{
    return gulp
        .src('./sass/base.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(prefixer({
            browsers: ['last 3 versions', 'IE 9'],
            cascade: false
        }))
        .pipe(concat('horoscope.css'))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('default', function(callback)
{
    sequence('sass')(callback)
});
