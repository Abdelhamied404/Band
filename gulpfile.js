var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

// pug compile
gulp.task('pug', function () {
    //clear screen
    console.log('\033[2J');
    // do action
    return gulp.src('src/pug/*.pug')
    .pipe(pug({
        pretty: true
      }))
    .pipe(gulp.dest('dist/')) 
 });

 // sass compile
 gulp.task('sass',function () {
    //clear screen 
    console.log('\033[2J');
    // do action
    return gulp.src('src/sass/[^_]*.scss')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
});


// scripts join
gulp.task('scripts', function () {
    //clear screen
    console.log('\033[2J');
    // do action
    return gulp.src('src/js/*.js')
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});


// 
// watch task
gulp.task('watch', function () {
    gulp.watch('src/pug/*.pug',['pug']);
    gulp.watch('src/sass/*/*.scss',['sass']);
    gulp.watch('src/sass/*.scss',['sass']);
    gulp.watch('src/js/*.js',['scripts']);
});

