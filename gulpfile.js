const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify");
const obfuscate = require("gulp-obfuscate");
const imagemin = require("gulp-imagemin");

function comprimeImagens() {
  return src("./source/images/*.*")
    .pipe(imagemin())
    .pipe(dest("./build/images"));
}

function comprimeJavaScript() {
  return src("./source/scripts/*.js")
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(dest("./build/scripts"));
}

function compilaSass() {
  return src("./source/styles/*.scss")
    .pipe(sass())
    .pipe(dest("./build/styles"));
}

exports.default = function () {
  watch(
    "./source/styles/*.scss",
    { ignoreInitial: false },
    series(compilaSass)
  );
  watch(
    "./source/scripts/*.js",
    { ignoreInitial: false },
    series(comprimeJavaScript)
  );
  watch(
    "./source/images/*.*",
    { ignoreInitial: false },
    series(comprimeImagens)
  );
};
