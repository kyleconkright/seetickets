var gulp 	= require('gulp');
var sass 	= require('gulp-ruby-sass');
var concat 	= require('gulp-concat');

gulp.task('default', ['scripts','style', 'watch']);

gulp.task('style', function() {
	return sass('dev/scss/*.scss')
		.pipe(concat('style.min.css'))
		.pipe(gulp.dest('app/css'));
});

gulp.task('scripts', function() {
	return gulp.src('dev/js/*.js')
		.pipe(concat('vendor.js'))
		.pipe(gulp.dest('app/js'));
});

gulp.task('watch', function(){
	gulp.watch('dev/scss/*.scss', ['style']);
	gulp.watch('dev/js/*.js', ['scripts']);
})