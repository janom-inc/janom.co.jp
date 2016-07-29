
var childProcess = require('child_process');

var del         = require('del');
var runSequence = require('run-sequence');

var gulp       = require('gulp');
var concat     = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var minifyCSS  = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var ejs        = require('gulp-ejs');
var rename     = require('gulp-rename');
var replace    = require('gulp-replace');
var uglify     = require('gulp-uglify');

gulp.task('dist-clean', function() {
	return del(['dist']);
});

gulp.task('dist-copy', function() {
	return gulp
		.src(['src/favicon.ico', 'src/img/**', 'src/pdf/**'], {base: 'src'})
		.pipe(gulp.dest('dist'))
});

gulp.task('dist-ejs', function() {
	childProcess.exec('git rev-parse HEAD', function(error, stdout, stderr) {
		var commitHash = stdout.trim();
		return gulp
			.src('src/*.ejs')
			.pipe(ejs())
			.pipe(replace('__GIT_COMMIT_HASH__', commitHash))
			.pipe(minifyHTML({}))
			.pipe(rename({extname: '.html'}))
			.pipe(gulp.dest('dist'))
	});
});

gulp.task('dist-js', function() {
	return gulp
		.src('src/js/*.js')
		.pipe(sourcemaps.init())
		.pipe(concat('bundle.min.js'))
		.pipe(uglify())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist/js'))
});

gulp.task('dist-css', function() {
	return gulp
		.src('src/css/*.css')
		.pipe(sourcemaps.init())
		.pipe(concat('bundle.min.css'))
		.pipe(minifyCSS())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist/css'))
});

gulp.task('dist', function(cb) {
	return runSequence(
		['dist-clean'],
		['dist-copy', 'dist-ejs', 'dist-js', 'dist-css'],
		cb
	);
});

gulp.task('default', ['dist']);

