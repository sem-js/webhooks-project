module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);

  var taskConfig = require("config-grunt-tasks")(grunt, ".bundler/tasks");
  taskConfig.pkg = require("./package.json");

  grunt.initConfig(taskConfig);

  grunt.registerTask("serve", ["copy:static", "concurrent:dev"]);
  grunt.registerTask("build", ["copy:static", "bitbundler:build"]);
};
