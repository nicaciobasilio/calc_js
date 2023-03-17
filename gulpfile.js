const GULP = require('gulp');
const SASS = require('gulp-sass')(require('sass'));
const UGLIFY = require('gulp-uglify');

function scripts() {
    return GULP.src('./src/scripts/*.js')
        .pipe(UGLIFY())
        .pipe(GULP.dest('./dist/js'))
}

function styles() {
    return GULP.src('./src/styles/*.scss')
        .pipe(SASS({outputStyle: 'compressed'}))
        .pipe(GULP.dest('./dist/css'))
}

exports.default = GULP.parallel(styles, scripts);
exports.watch = function () {
    GULP.watch('./src/styles/*.scss', GULP.parallel(styles))
    GULP.watch('./src/scripts/*.js', GULP.parallel(scripts))
};