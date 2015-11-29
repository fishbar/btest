var Module = require('module');
var path = require('path');

module.exports = function (filters) {
  var origin_require = Module.prototype.require;
  Module.prototype.require = function (filename) {
    filename = Module._resolveFilename(filename, this);
    var ext = path.extname(filename);
    if (typeof filename  === 'object') {
      filename = filename[0];
    }
    if (filters.indexOf(ext) !== -1) {
      return;
    }
    if (filters.indexOf(ext) === -1) {
      return origin_require.call(this, filename);
    }
    return module.exports;
  };
}
