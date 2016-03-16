var gulp    = require('gulp'),
    gutil   = require('gulp-util'),
    uglify  = require('gulp-uglify'),
    concat  = require('gulp-concat');
var del     = require('del');
var minifyHTML = require('gulp-minify-html');
var minifyCSS  = require('gulp-minify-css');

gulp.task('minify', function () {
  gulp.src('./assets/js/main.js')
  .pipe(uglify())
  .pipe(gulp.dest('minified'));
  gulp.src('./assets/js/Medida.js')
  .pipe(uglify())
  .pipe(gulp.dest('minified'));
  gulp.src('./assets/js/Temperatura.js')
  .pipe(uglify())
  .pipe(gulp.dest('minified'));
  gulp.src('./assets/js/Distancia.js')
  .pipe(uglify())
  .pipe(gulp.dest('minified'));
  gulp.src('./assets/js/Moneda.js')
  .pipe(uglify())
  .pipe(gulp.dest('minified'));
  

  gulp.src('./index.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('./minified/'))

  gulp.src('./assets/css/custom.css')
   .pipe(minifyCSS({keepBreaks:true}))
   .pipe(gulp.dest('./minified/'))
  gulp.src('./assets/css/global.css')
   .pipe(minifyCSS({keepBreaks:true}))
   .pipe(gulp.dest('./minified/'))
  gulp.src('./assets/css/normalize.css')
   .pipe(minifyCSS({keepBreaks:true}))
   .pipe(gulp.dest('./minified/'))
  gulp.src('./assets/css/skeleton.css')
   .pipe(minifyCSS({keepBreaks:true}))
   .pipe(gulp.dest('./minified/'))
});

gulp.task('clean', function(cb) {
  del(['minified/*'], cb);
});