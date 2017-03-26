// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var include = require('gulp-include');

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src(['!src/_*.js', 'src/*.js' ])
        .pipe(include())
        // .pipe(concat('main.js'))
        // .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

// Simple copying of files
gulp.task('copy', function() {
    return gulp.src(['src/*.html', 'src/assets/**/*', 'src/vendor/**/*'], { base: 'src' })
        .pipe(gulp.dest('dist'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch(['src/*.js', 'src/**/*.js'], ['scripts']);
    gulp.watch(['src/*.html', 'src/assets/**/*', 'src/vendor/**/*'], ['copy']);
});

// Default Task
gulp.task('default', ['copy', 'scripts', 'watch']);