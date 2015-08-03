/*!
 * btest: test/index.js
 * Authors  : fish <zhengxinlin@gmail.com> (https://github.com/fishbar)
 * Create   : 2015-08-03 21:38:52
 * CopyRight 2015 (c) Fish And Other Contributors
 */
require('../index');
var expect = require('expect.js');

describe('./index.js', function () {

  describe('## global env test', function () {
    it('should have global `window` object', function () {
      expect(window).to.be.ok();
      expect(document).to.be.ok();
      expect(window.$).to.be.ok();
      expect(window.document).to.be(document);

      expect(window.$('#test').length).to.be(1);
    });
  });

});

