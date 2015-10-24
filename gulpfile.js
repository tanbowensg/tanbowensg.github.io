var gulp=require("gulp")
var stylus=require("gulp-stylus")
var browserSync=require("browser-sync").create()


gulp.task("stylus",function () {
	gulp.src('./src/css/*')
		.pipe(stylus())
		.pipe(gulp.dest('./css'))
})

gulp.task('sync',function(){
	browserSync.init({
		server:{
			baseDir:"./"
		}
	})
})

gulp.task("serve",["stylus","sync"],function(){
	gulp.watch("src/css/*",['stylus'])
	gulp.watch(["*.html","./src/css/*","./src/js/*"]).on("change",browserSync.reload)
})

gulp.task("default",["serve"])