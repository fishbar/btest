/*!
 * btest: test/index.js
 * Authors  : fish <zhengxinlin@gmail.com> (https://github.com/fishbar)
 * Create   : 2015-08-03 21:38:52
 * CopyRight 2015 (c) Fish And Other Contributors
 */
var Module = require('module');
var path = require('path');
(function () {
  var origin_require = Module.prototype.require;
  var processExts = ['.css', '.less'];
  Module.prototype.require = function (filename) {
    filename = Module._resolveFilename(filename, this);
    var ext = path.extname(filename);
    if (typeof filename  === 'object') {
      filename = filename[0];
    }
    if (processExts.indexOf(ext) !== -1) {
      return;
    }
    if (processExts.indexOf(ext) === -1) {
      return origin_require.call(this, filename);
    }
    return module.exports;
  };
})();

require('../index');
var expect = require('expect.js');
// var testMod = require(path.join(__dirname, '../cube.min.js'));
// testMod.init({

// })x/xs

describe('./index.js', function () {

  describe('## global env test', function () {
    it('should have global `window` object', function () {
      expect(window).to.be.ok();
      expect(document).to.be.ok();

      expect(window.document).to.be(document);
      expect(window.navigator).to.be.ok();
      expect(window.location).to.be.ok();
      expect(window.XMLHttpRequest).to.be.ok();
      expect(window.localStorage).to.be.ok();
      expect(window.sessionStorage).to.be.ok();

      expect(window.$).to.be.ok();
      expect(window.$('#test').length).to.be(1);
    });

    // it('should, xxxx', function () {
    //   var result = testMod.method(xxx);
    //   expect(result).to.be.ok();
    // });
  });



});

