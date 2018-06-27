var mod = require('./01_mod')
// require 特性 ，module加载被执行，加载后缓存
// 出现循环加载，就指数出已经执行到部分，未执行到不会输出
mod.test();
console.log(mod.testnum)