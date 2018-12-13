var gulp = require('gulp');
var browserSync = require('browser-sync');
var uglify = require('gulp-uglify-es').default;
var plumber = require('gulp-plumber');


gulp.task('default', ['browserSync'], function() {
  gulp.watch('./**/*.js', {base: '/app'}, ['js']);
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './dist'
    },
    port: 8080
  });
});

gulp.task('js', function() {
  return gulp.src('./app/**/*.js')
         .pipe(customPlumber()) //Must be done before calling any other plugin
         .pipe(uglify())
         .pipe(gulp.dest('./dist/'))
         .pipe(browserSync.reload({
           stream: true
         }));
});

function customPlumber() {
  return plumber({
    errorHandler: function(err) {
      console.log('The following is an error \n \n');
      console.log(err.stack);
      this.emit('end');
    }
  });
}
