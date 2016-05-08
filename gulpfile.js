var gulp = require('gulp');
var rename =  require('gulp-rename');
var postcss = require('gulp-postcss');
var cssnext = require('postcss-cssnext');
var stylelint = require('stylelint');
var reporter = require('postcss-browser-reporter');

gulp.task('css', function () {
    var processors = [
    stylelint, 
    cssnext,
    reporter({
        selector: 'body:before'
    })
    ];
    return gulp.src('./src/styles/stylesIn.css')
        .pipe(postcss(processors))
        .pipe(rename('styleOut.css'))
        .pipe(gulp.dest('./src/styles/'));
});

gulp.task('watch', function() {
    gulp.watch('src/styles/stylesIn.css', function() {
        gulp.run('css');
    })
})

gulp.task('default', ['css', 'watch']);