/*!
 * btest: index.js
 * Authors  : fish <zhengxinlin@gmail.com> (https://github.com/fishbar)
 * Create   : 2015-08-03 21:38:52
 * CopyRight 2015 (c) Fish And Other Contributors
 */
var jsdom = require('jsdom').jsdom;
var fs = require('fs');
var path = require('path');

var LocalStorage = require('node-localstorage').LocalStorage;

var jquery = fs.readFileSync(path.join(__dirname, './jslib/jquery.js')).toString();
var html = '<html><script type="text/javascript">' + jquery + '</script><script></script><body><div id="test"></div></body></html>';


/**
 * inject global vars
 */
global.document = jsdom(html);
global.window = global.document.defaultView;
global.navigator = global.window.navigator;
global.location = global.window.location;
global.XMLHttpRequest = global.window.XMLHttpRequest = require("local-xmlhttprequest").XMLHttpRequest;
global.localStorage = global.window.localStorage = new LocalStorage(path.join(__dirname, './.lstorage'));
global.sessionStorage = global.window.sessionStorage = new LocalStorage(path.join(__dirname, './.sstorage'));
/**
 * set up the global properties
 */
global.navigator.userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.89 Safari/537.36';