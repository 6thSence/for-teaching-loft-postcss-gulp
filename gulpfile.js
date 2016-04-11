var gulp = require('gulp');
var rename =  require('gulp-rename');
var postcss = require('gulp-postcss');
var cssnext = require('postcss-cssnext');

gulp.task('css', function () {
    var processors = [
        cssnext,
    ];
    return gulp.src('./src/styles/stylesIn.css')
        .pipe(postcss(processors))
        .pipe(rename('styleOut.css'))
        .pipe(gulp.dest('./src/styles/'));
});

gulp.task('default', function() {
    gulp.watch('src/styles/stylesIn.css', function() {
        gulp.run('css');
    })
})