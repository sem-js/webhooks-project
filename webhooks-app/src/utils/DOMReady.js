var deferred = new Promise(function(resolve) {
  if (document.readyState === 'complete') {
    resolve();
  }
  else {
    document.addEventListener('DOMContentLoaded', (/*evt*/) => resolve());
  }
});

export default (fn) => deferred.then(fn);
