// 图片处理任务脚本
import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('imgs',()=>{
  return gulp.src(['app/**/*.ico'])
    .pipe(gulp.dest('server/public'))
    .pipe(gulpif(args.watch,livereload()))
})
