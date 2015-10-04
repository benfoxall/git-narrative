var gulp = require('gulp');
var markdown = require('gulp-markdown');

gulp.task('default', function() {
  return gulp.src('jsoxford.md')
    .pipe(markdown())
    .pipe(gulp.dest('build'));
});
