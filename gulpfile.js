var gulp = require('gulp');
var rename =  require('gulp-rename');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

gulp.task('css', function () {
    var processors = [
        autoprefixer({browsers: ['last 2 version']}),
        cssnano(),
    ];
    return gulp.src('./src/styles/stylesIn.css')
        .pipe(postcss(processors))
        .pipe(rename('styleOut.css'))
        .pipe(gulp.dest('./src/styles/'));
});