var jsPlugin = require("bit-loader-js");
var eslintPlugin = require("bit-eslint");
var babelPlugin = require("bit-loader-babel");
var extensionsPuglin = require("bit-loader-extensions");
var nodeBuiltins = require("bit-loader-builtins");
var cssPlugin = require("bit-loader-css");
var jsonPlugin = require("bit-loader-json");
var httpResourcePlugin = require("bit-loader-httpresource");
var minifyjs = require("bit-bundler-minifyjs");
var extractsm = require("bit-bundler-extractsm");
var splitter = require("bit-bundler-splitter");
var babelCore = require("babel-core");

module.exports = {
  options: {
    files: [{
      src: "src/index.js",
      dest: "dist/index.js"
    }],
    loader: {
      plugins: [
        extensionsPuglin(["js", "jsx", "css", "json"]),
        httpResourcePlugin(),
        eslintPlugin({ extensions: ["js", "jsx"] }),
        jsPlugin({ extensions: ["js", "jsx"] }),
        babelPlugin({ core: babelCore }),
        cssPlugin(),
        jsonPlugin(),
        nodeBuiltins()
      ]
    }
  },
  dev: {
    watch: true,
    bundler: {
      plugins: [
        splitter("dist/vendor.js", { match: { path: /\/node_modules\// } }),
        extractsm()
      ]
    }
  },
  build: {
    bundler: {
      plugins: [
        splitter("dist/vendor.js", { match: { path: /\/node_modules\// } }),
        minifyjs({ banner: buildBannerString() }),
        extractsm()
      ]
    }
  }
};

function buildBannerString() {
  var grunt = require("grunt");
  var package = require("../package");
  return grunt.template.process("/*! <%= pkg.name %> v<%= pkg.version %> - <%= grunt.template.today() %>. (c) <%= grunt.template.today('yyyy') %> Miguel Castillo. Licensed under MIT */", { data: { pkg: package }});
}
