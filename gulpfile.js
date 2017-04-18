var componentName = 'HereIsYourComponentName';

var gulp = require('gulp');
var zip = require('gulp-zip');
var notify = require('gulp-notify');
var env = require('node-env-file');
var gulpif = require('gulp-if');
var replace = require('gulp-replace');
var through2 = require('through2');
var jsforce = require('jsforce');
var webpack = require('webpack-stream');
var runSequence = require('run-sequence');
var forceDeploy = require('gulp-jsforce-deploy');

env('.env');

// ref. https://github.com/vigetlabs/gulp-starter/blob/master/gulpfile.js/lib/handleErrors.js
var handleErrors = function(err, callback) {
  notify.onError({
    message: err.toString().split(': ').join(':\n'),
    sound: false
  }).apply(this, arguments);
  // Keep gulp from hanging on this task
  if (typeof this.emit === 'function') {
    this.emit('end');
  }
}


gulp.task('build', ['webpack'], function() {
  return gulp.src('./build/**/*')
  .pipe(zip(componentName + '.resource'))
  .pipe(gulp.dest('./pkg/staticresources'));
});

gulp.task('webpack', function() {
  return gulp.src('./src/scripts/index.js')
  .pipe(webpack(require('./webpack.config.js')))
  .pipe(gulp.dest('./build/'));
});

gulp.task('deploy', function() {
  var ts = Date.now();  // Timestamp
  return gulp.src('pkg/**/*', {
    base: '.'
  })
  .pipe(gulpif('**/*.cmp', replace(/__NOCACHE__/g, ts)))
  .pipe(zip('pkg.zip'))
  .pipe(forceDeploy({
    username: process.env.SF_USERNAME,
    password: process.env.SF_PASSWORD,
    pollTimeout: 600 * 1000
  }))
  .on('error', handleErrors);
});

gulp.task('watch', function() {
  gulp.watch('src/**/*', ['build']);
  gulp.watch('pkg/**/*', ['deploy']);
});

gulp.task('default', function(callback) {
  runSequence('build', 'deploy', callback)
});
