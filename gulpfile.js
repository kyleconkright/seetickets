var gulp 			= require('gulp');
var sass 			= require('gulp-ruby-sass');
var concat 			= require('gulp-concat');
var autoprefixer 	= require('gulp-autoprefixer');
var uglify			= require('gulp-uglify');

var paths = {
	app: ['app/module.js','app/routes.js','app/shared/**/*.js','app/components/**/*.js']
}

var bases = {
	app: 'public/'
}

gulp.task('default', ['app','scripts','style', 'watch']);

gulp.task('style', function() {
	return sass('dev/scss/*.scss')
		.pipe(concat('style.min.css'))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('public/assets/css'));
});

gulp.task('scripts', function() {
	return gulp.src('dev/js/*.js')
		.pipe(concat('vendor.js'))
		.pipe(uglify())
		.pipe(gulp.dest('public/assets/js'));
});

gulp.task('app', function() {
	return gulp.src(paths.app, {cwd: bases.app})
		.pipe(concat('app.js'))
		// .pipe(uglify())
		.pipe(gulp.dest('public/app'));
});

gulp.task('watch', function(){
	gulp.watch('dev/scss/*.scss', ['style']);
	gulp.watch('dev/js/*.js', ['scripts']);
	gulp.watch('public/shared/**/*.js', ['app']);
	gulp.watch('public/components/**/*.js', ['app']);
})