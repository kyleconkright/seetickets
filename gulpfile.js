var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

gulp.task('default', ['style', 'watch']);

gulp.task('style', function() {
	return sass('dev/scss/*.scss')
		.pipe(gulp.dest('app/css'));
});

gulp.task('watch', function(){
	gulp.watch('dev/scss/*.scss', ['style']);
})