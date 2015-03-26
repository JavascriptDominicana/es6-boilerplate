var gulp = require("gulp");
var changed = require('gulp-changed');
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var del = require("del");
var runSequence = require("run-sequence");

var app = {
  source: "./src/**/*.js",
  html: "./src/**/*.html",
  files: "./src/**/*.*",
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

gulp.task("copy-everything", function() {
  return gulp.src(app.files)
    .pipe(gulp.dest(app.dist))
});

gulp.task("clean", function(callback) {
  del([app.dist], callback);
});

gulp.task("build", function(callback) {
  return runSequence(
    'copy-everything',
    "clean",
    [ "build-app", "copy-html"],
    callback
  );
});

gulp.task("watch", function(callback) {
  gulp.watch(app.source, ['build-app']);
  gulp.watch(app.html, ['build-html']);
});

gulp.task("default", function(callback) {
  return runSequence("build");
});