var path = require("path");
var fallback = require("connect-history-api-fallback");
var livereload = require("connect-livereload");
var proxy = require("node-proxy-middleware");
var url = require("url");
var config = require(path.join(process.cwd(), ".connectrc.json"));

var settings = Object.assign({}, config, {
  "middleware": function(connect, options, middlewares) {
    // Configure fallback to handle SPA configurations
    if (config.fallback) {
      middlewares.unshift(fallback(config.fallback));
    }

    // Liverealod!!
    if (config.livereload) {
      middlewares.unshift(livereload(config.livereload));
    }

    // Reverse proxies for forwarding request to other end points.
    // This is generally a good way to handle CORS restrictions
    if (config.proxies) {
      config.proxies.forEach(function(proxy) {
        middlewares.unshift(configureProxy(proxy.source, proxy.target));
      });
    }

    if (config.middlewares) {
      Object.keys(config.middlewares).forEach(function(mwarename) {
        middlewares.unshift(require(mwarename)(config.middlewares[mwarename]));
      });
    }

    return middlewares;
  }
});

// Clean up the config before feeding it to connect.
delete settings.fallback;
delete settings.livereload;
delete settings.proxies;
delete settings.middlewares;

function configureProxy(route, destination) {
  var options = url.parse(destination);
  options.route = route;
  return proxy(options);
}

module.exports = {
  "dev": {
    "options": settings
  }
};
