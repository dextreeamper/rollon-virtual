var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
	return gulp.src('css/style.scss')
		.pipe(sass())
		.pipe(gulp.dest('compiled/'));
});

gulp.task('watch', function() {
	gulp.watch('./css/style.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);

