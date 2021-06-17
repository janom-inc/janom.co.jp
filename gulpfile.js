
var childProcess = require('child_process');
var del          = require('del');

var gulp       = require('gulp');
var concat     = require('gulp-concat');
var connect    = require('gulp-connect');
var sourcemaps = require('gulp-sourcemaps');
var cleanCSS   = require('gulp-clean-css');
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

var commitHash;

gulp.task('commit-hash', function(cb) {
	childProcess.exec('git rev-parse HEAD', function(error, stdout, stderr) {
		commitHash = stdout.trim();
		cb();
	});
});

gulp.task('dist-ejs', gulp.series('commit-hash', function() {
	return gulp
		.src('src/ejs/**/*.ejs')
		.pipe(ejs())
		.pipe(replace('__GIT_COMMIT_HASH__', commitHash))
		.pipe(minifyHTML({}))
		.pipe(rename({extname: '.html'}))
		.pipe(gulp.dest('dist'))
}));

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
		.pipe(cleanCSS())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist/css'))
});

gulp.task('dist', gulp.series('dist-copy', 'dist-ejs', 'dist-js', 'dist-css'));

gulp.task('watch', function() {
	var watch = ['src/**'];
	return gulp.watch(watch, ['dist']);
});

gulp.task('connect', gulp.series('dist', function() {
	return connect.server({
		root: 'dist',
	});
}));

gulp.task('start', gulp.series('watch', 'connect'));

gulp.task('default', gulp.series('dist'));

