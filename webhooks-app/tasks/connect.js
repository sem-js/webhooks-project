var fallback = require("connect-history-api-fallback");
var livereload = require("connect-livereload");
var proxy = require("node-proxy-middleware");
var url = require("url");

module.exports = {
  "dev": {
    "options": {
      "base": "dist",
      "protocol": "http",
      "port": 8045,
      "hostname": "localhost",
      "keepalive": true,
      "open": "http://localhost:8045/index.html",
      "middleware": function(connect, options, middlewares) {
        middlewares.unshift(fallback({ index: "/index.html" }));
        middlewares.unshift(livereload({ port: 32247 }));

        // Proxy setup
        //middlewares.unshift(configureProxy("/api-1", "https://my-server/api-1"));
        //middlewares.unshift(configureProxy("/api-2", "https://my-server/api-2"));

        return middlewares;
      }
    }
  }
};

function configureProxy(route, destination) {
  var options = url.parse(destination);
  options.route = route;
  return proxy(options);
}
