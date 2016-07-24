/**
 * 版权申明 
 */

var options = require('./package.json')

var banner = [
'/*',
'* 日历组件',
'* by '+ options.author,
'* v'+ options.version,
'* www.frontpay.cn All Rights Reserved.',
'* under license '+ options.license,
'* '+ options.homepage,
'*/'
]

module.exports = banner.join('\n')
