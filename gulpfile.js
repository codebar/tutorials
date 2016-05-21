var
browsersync  = require('browser-sync').create(),
  concat     = require('gulp-concat'),
  gulp       = require('gulp'),
  sourcemaps = require('gulp-sourcemaps'),
  uglify     = require('gulp-uglify'),
  paths      = {
    jsdev:   [
      './javascripts-dev/vendor/jszip.js',
      './javascripts-dev/vendor/jszip-utils.js',
      './javascripts-dev/vendor/FileSaver.js',
    ],
    jsdist:  './javascripts/',
  };

gulp.task('js', function() {
  return gulp
    .src(paths.jsdev)
    .pipe(sourcemaps.init())
    .pipe(concat('downloader-bundle.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.jsdist));
});

gulp.task('watch', function() {
  gulp.watch(paths.jsdev, ['js']);
});

gulp.task('server', function() {
  browsersync.init({
    server: {
      baseDir: './',
      routes: {
        "/test" : 'javascripts-dev'
      }
    },
    port:   4000,
    notify: false,
    open:   false
  });
});

gulp.task('default', ['js', 'watch', 'server']);
