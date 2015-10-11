var gulp = require('gulp');
var markdown = require('gulp-markdown');
var replace = require('gulp-replace');
var webserver = require('gulp-webserver');
var fs = require('fs');

gulp.task('markdown', function() {
  return gulp.src('jsoxford.md')
    .pipe(markdown())
    .pipe(gulp.dest('build'));
});

gulp.task('layout', ['markdown'], function() {
  var contents = fs.readFileSync('build/jsoxford.html', 'utf8');
  var contents2 = contents.split('\n<pre><code>').map(function(p, i){
    return '<section>\n' +
      (i ? '<pre><code>' : '') + p +
      '</section>';
  }).join('\n');
  return gulp.src('src/index.html')
    .pipe(replace('%CONTENT%', contents2))
    .pipe(gulp.dest('build'));
});

gulp.task('serve', ['watch'], function() {
  gulp.src(['build','src'])
    .pipe(webserver({
      livereload: true
    }));
});

gulp.task('watch', ['layout'], function() {
  return gulp.watch('src/index.html', ['layout'])
})

gulp.task('default', ['serve'])
