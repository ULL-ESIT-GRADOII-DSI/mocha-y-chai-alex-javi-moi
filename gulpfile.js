var gulp    = require('gulp'),
    gutil   = require('gulp-util'),
    uglify  = require('gulp-uglify'),
    concat  = require('gulp-concat');
var del     = require('del');
var minifyHTML = require('gulp-minify-html');
var minifyCSS  = require('gulp-minify-css');

gulp.task('minify', function () {
  gulp.src('main.js')
  .pipe(uglify())
  .pipe(gulp.dest('minified'));
  gulp.src('Medida.js')
  .pipe(uglify())
  .pipe(gulp.dest('minified'));
  gulp.src('Temperatura.js')
  .pipe(uglify())
  .pipe(gulp.dest('minified'));
  gulp.src('Distancia.js')
  .pipe(uglify())
  .pipe(gulp.dest('minified'));
  gulp.src('Moneda.js')
  .pipe(uglify())
  .pipe(gulp.dest('minified'));
  

  gulp.src('./index.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('./minified/'))

  gulp.src('./custom.css')
   .pipe(minifyCSS({keepBreaks:true}))
   .pipe(gulp.dest('./minified/'))
  gulp.src('./global.css')
   .pipe(minifyCSS({keepBreaks:true}))
   .pipe(gulp.dest('./minified/'))
  gulp.src('./normalize.css')
   .pipe(minifyCSS({keepBreaks:true}))
   .pipe(gulp.dest('./minified/'))
  gulp.src('./skeleton.css')
   .pipe(minifyCSS({keepBreaks:true}))
   .pipe(gulp.dest('./minified/'))
});

gulp.task('clean', function(cb) {
  del(['minified/*'], cb);
});