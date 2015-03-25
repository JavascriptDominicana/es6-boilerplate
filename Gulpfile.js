var gulp = require("gulp");
var changed = require('gulp-changed');
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var del = require("del");
var runSequence = require("run-sequence");

var app = {
  source: "./src/**/*.js",
  html: "./src/**/*.html",
  dist: "./dist"
};

gulp.task("build-app", function () {
  return gulp.src(app.source)
    .pipe(sourcemaps.init())
    .pipe(babel({modules: 'system'}))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(app.dist));
});

gulp.task("copy-html", function() {
  return gulp.src(app.html)
    .pipe(gulp.dest(app.dist));
});

gulp.task("clean", function(callback) {
  del([app.dist], callback);
});

gulp.task("build", function(callback) {
  return runSequence(
    "clean",
    [ "build-app", "copy-html"],
    callback
  );
});

gulp.task("default", function(callback) {
  return runSequence("build");
});