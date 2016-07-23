/**
 * 发布到gh-pages
 * by tommyshao <tomieric@gmail.com>
 * 2016-07-23
 */

var ghPages = require('gh-pages')
var path = require('path')

ghPages.publish(path.join(__dirname, 'dist'), function(err) { console.log(err) })