var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({
    rename: {
        'gulp-minify-css': 'minifyCSS'
    }
});
var path = require('path');

gulp.task('lint', function() {
  return gulp.src('./js/*.js')
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter(plugins.stylish))
});

gulp.task('less', function () {
  return gulp.src('./css/*.less')
    .pipe(plugins.less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(plugins.minifyCSS())
    .pipe(gulp.dest('./css/'));
});

gulp.task('watch', function() {
    gulp.watch('./js/*.js', ['lint']);
    gulp.watch('./css/*.less', ['less']);
});

gulp.task('default', ['watch']);
