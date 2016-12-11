module.exports = {
  "dev": {
    "files": ["src/*.html", "img/*"],
    "tasks": ["copy:static"]
  },
  "build": {
    "options": { "livereload": 32247 },
    "files": ["dist/**/*", "!dist/**/*.map"]
  }
};
