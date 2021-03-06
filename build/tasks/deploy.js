var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var runSequence = require('run-sequence');
var del = require('del');
var vinylPaths = require('vinyl-paths');

gulp.task('deploy-gh-pages', function() {
  return gulp.src([
    './src/**/*',
    './kendo-sdk/**/*',
    './styles/*.*',
    './images/*.*',
    './doc/*.*',
    './jspm_packages/*.js', // include system.js
    './jspm_packages/github/twbs/bootstrap@*/fonts/*',
    './jspm_packages/npm/font-awesome@*/**/*',
    './jspm_packages/npm/font-awesome*.js',
    './jspm_packages/github/PrismJS/prism*/themes/*.css',
    './jspm_packages/github/google/code-prettify*/**/*',
    './jspm_packages/npm/babel-runtime*/**/*',
    "./jspm_packages/npm/showdown-prettify@1.3.0.js",
    "./jspm_packages/npm/showdown-prettify@1.3.0/**/*",,
    "./jspm_packages/npm/showdown@1.6.4.js",
    "./jspm_packages/npm/showdown@1.6.4/**/*",
    './index.html',
    './favicon.ico',
    './config.js'
  ], { base: '.' })
    // .pipe(gulp.dest('./dist')) // for debugging
    .pipe(ghPages());
});

gulp.task('deploy', function() {
  return runSequence(
    'clean',
    'unbundle',
    'bundle',
    'deploy-gh-pages',
    'unbundle',
    'clean'
  );
});
