// Include gulp
var gulp = require('gulp');
// Include plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var util = require('gulp-util');
var rename = require('gulp-rename');


var root_path = {
    webroot: "./",
    img: "./image/"
}

var target_path = {
    example: "./example/",
    dist: "./dist/"
}

//Copy JS
function copyDistJs(){
    return gulp.src(root_path.webroot + "angu-tree-view.js")
    .pipe(gulp.dest(target_path.dist));
}


//Uglify and copy JS
function packDistJs(){
    return gulp.src(root_path.webroot + "angu-tree-view.js")
    .pipe(concat('angu-tree-view.js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify( {mangle: false} ))
    .on('error', function (err) { util.log(util.colors.red('[Error]'), err.toString()); })
    .pipe(gulp.dest(target_path.dist))
    .pipe(gulp.dest(target_path.example + "js/"));
}

//Uglify and copy CSS
function packDistCss(){
    return gulp.src(root_path.webroot + "angu-tree-view.css")
    .pipe(gulp.dest(target_path.dist))
    .pipe(gulp.dest(target_path.example + "css/"));
}

//Copy images
function packDistImg(){
    return gulp.src(root_path.img + "*")
     .pipe(gulp.dest(target_path.dist + "image/"))
     .pipe(gulp.dest(target_path.example + "css/image/"));
}

gulp.task("packdist", function(){
    copyDistJs();
    packDistJs();
    packDistCss();
    packDistImg();
})


// Copy Task
gulp.task("default", [
    "packdist"
]);

