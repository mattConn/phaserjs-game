// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var include = require('gulp-include');

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src(['src/js/vendor/*.js', 'src/js/*.js', '!src/js/_*.js'])
        .pipe(include())
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// simple copying of files
gulp.task('copy', function() {
    return gulp.src(['src/*.html', 'src/assets/**/*'])
        .pipe(gulp.dest('dist'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('src/*.js', ['scripts']);
    gulp.watch('src/js/*.js', ['copy']);
});

// Default Task
gulp.task('default', ['copy', 'scripts', 'watch']);