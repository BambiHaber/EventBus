const gulp = require('gulp');
const gulpReplace = require('gulp-string-replace');
const gulpRename = require('gulp-rename');
const gulpUglify = require('gulp-uglify');
const gulpEs6transpiler = require('gulp-es6-transpiler');
const pjson = require('./package.json');


gulp.task('js-compile', () => {
	return gulp.src('./src/*.js')
		.pipe(gulpReplace('{{version}}', pjson.version))
		.pipe(gulp.dest('./dist/'))
});

gulp.task('js-compile-minified', () => {
	return gulp.src('./src/EventBus.js')
		.pipe(gulpReplace('{{version}}', pjson.version))
		.pipe(gulpEs6transpiler())
		.pipe(gulpUglify({output: {comments: /!|.+/i}}))
		.pipe(gulpRename({suffix: '.min'.replace('{{version}}', pjson.version)}))
		.pipe(gulp.dest('./dist/'))
});


gulp.task('example-copy', () => {
	return gulp.src(['./src/example/*'])
		.pipe(gulp.dest('./dist/example/'))
});

gulp.task('default', ['js-compile', 'js-compile-minified', 'example-copy'], function () {
	console.log("EventBus in built in 'dist' directory!, you can go to dist/example and npm start :)");
});