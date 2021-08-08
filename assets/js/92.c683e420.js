(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{437:function(t,_,s){"use strict";s.r(_);var e=s(42),r=Object(e.a)({},(function(){var t=this,_=t.$createElement,s=t._self._c||_;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"浏览器运行原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器运行原理"}},[t._v("#")]),t._v(" 浏览器运行原理")]),t._v(" "),s("p",[t._v("常见的面试题：从用户在浏览器地址栏输入网址，到看到页面，中间都发生了什么？")]),t._v(" "),s("p",[t._v("涉及知识点：TCP协议的三次握手四次挥手、HTTP报文、状态码、304缓存、DNS缓存、性能优化、重绘回流、AST语法解析树、DOM树、Layout树、Layer树、requestAnimationFrame、同步异步编程、闭包作用域、堆栈内存、面向对象、微任务和宏任务、事件循环、AJAX同源请求和跨域请求解决方案、Cookie和Session以及Token")]),t._v(" "),s("ul",[s("li",[t._v("HTTP的请求阶段：DNS解析，TCP三次握手四次挥手、HTTPS和HTTP的区别等")]),t._v(" "),s("li",[t._v("HTTP的响应阶段：HTTP状态码（304缓存），响应报文等")]),t._v(" "),s("li",[t._v("浏览器渲染阶段：重绘回流等")])]),t._v(" "),s("h3",{attrs:{id:"_1】进程和线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1】进程和线程"}},[t._v("#")]),t._v(" 1】进程和线程")]),t._v(" "),s("p",[t._v("进程Process：进程通俗讲就是我们开的每一个程序")]),t._v(" "),s("p",[t._v("线程Thread：每个程序（进程）可能会做很多事情（子任务），就是线程")]),t._v(" "),s("p",[t._v("栈内存Stack：运行代码的环境（存放指针，这些指针指向堆内存）")]),t._v(" "),s("h3",{attrs:{id:"_2】parsehtml中dom-css-js的顺序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2】parsehtml中dom-css-js的顺序"}},[t._v("#")]),t._v(" 2】"),s("a",{attrs:{href:"https://blog.csdn.net/greenqingqingws/article/details/19552313?utm_source=blogxgwz3",target:"_blank",rel:"noopener noreferrer"}},[t._v("parseHTML中dom,css,js的顺序"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("CSS样式表")]),t._v(" "),s("p",[t._v("浏览器在加载网页的过程中，先下载HTML并开始解析。如果发现外部CSS资源链接，就发送下载请求。浏览器在下载CSS资源的同时，解析HTML文件。")]),t._v(" "),s("p",[t._v("在应用样式的时候，不会更改DOM树，而是生成CSS树，因此"),s("strong",[t._v("解析样式表的时候也不会停止文档解析")]),t._v("。")]),t._v(" "),s("p",[t._v("JS脚本")]),t._v(" "),s("p",[t._v("解析器遇到"),s("code",[t._v("<script>")]),t._v("标记时，立即解析并执行脚本。一旦发现有脚本文件的引用，就必须等待脚本文件下载完。这时，文档的解析会暂停，并且等到脚本执行完再继续。所以，脚本文件的下载和执行，会阻断其他资源文件的下载。"),s("strong",[t._v("JS会阻塞解析HTML")]),t._v("。所以建议"),s("code",[t._v("<script>")]),t._v("一般放最后面，或者使用"),s("strong",[t._v("defer或者async")]),t._v("属性异步加载。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200814184558762.png#pic_center",alt:"在这里插入图片描述"}})]),t._v(" "),s("h3",{attrs:{id:"_3】图解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3】图解"}},[t._v("#")]),t._v(" 3】图解")]),t._v(" "),s("p",[t._v("主线程："),s("strong",[t._v("dom tree&&css tree")]),t._v("---结合---》"),s("strong",[t._v("layout tree")]),t._v("（layout过程）---》update "),s("strong",[t._v("layertree")]),t._v("（形成层叠上下文的过程）--》"),s("strong",[t._v("paint")]),t._v("（计算层叠上下文，"),s("strong",[t._v("形成表记录")]),t._v("在哪绘制，啥时绘制）--》"),s("strong",[t._v("composite")]),t._v("（绘制我们记录的表）")]),t._v(" "),s("p",[t._v("合成器线程----》整个过程"),s("strong",[t._v("栅格化数据")]),t._v("，把画面分块，再组合形成Frame---交给---》GPU线程去渲染。")]),t._v(" "),s("p",[t._v("之后的话，重排和重绘以及js执行或者用户行为都会占用主线程。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200814233010875.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTIyMTAzNg==,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200814225328815.jpeg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTIyMTAzNg==,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),t._v(" "),s("h3",{attrs:{id:"_4】回流和重绘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4】回流和重绘"}},[t._v("#")]),t._v(" 4】回流和重绘")]),t._v(" "),s("p",[t._v("- 布局是页面首次加载时进行的操作，重新布局即为回流。")]),t._v(" "),s("p",[t._v("- 绘制是页面首次加载时进行的操作，重新绘制即为重绘。")]),t._v(" "),s("h3",{attrs:{id:"_5】requestanimationframe优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5】requestanimationframe优化"}},[t._v("#")]),t._v(" 5】requestAnimationFrame优化")]),t._v(" "),s("p",[t._v("当页面或者动画以每秒60帧的刷新率时，才不会让用户感觉页面卡顿。")]),t._v(" "),s("p",[t._v("如果每一帧在运行动画的时候，还有大量JS任务需要执行。（布局、绘制、JS执行都是在主线程中运行的）当在一帧的时间内布局和绘制结束后，还有剩余的时间JS就会拿到主线程的使用权，如果JS的执行时间过长，就会导致下一帧开始时JS依然没有执行结束（依然占用这主线程，也就是说JS执行可能会阻塞主线程），导致下一帧的动画没有按时渲染，就会出现页面的卡顿。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200815122044108.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTIyMTAzNg==,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),t._v(" "),s("p",[t._v("此时我们就可以使用"),s("code",[t._v("requestAnimationFrame")]),t._v("这个API来优化。")]),t._v(" "),s("p",[s("code",[t._v("requestAnimationFrame")]),t._v("这个方法会在每一帧开始时调用执行，在每一帧结束时回调（requestIdleCallback）：帮我们把JS运行任务分成一些更小的任务块（分到每一帧结束的位置），在每一帧时间用完前暂停JS运行任务，归还主线程，按时渲染下一帧")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200815123014691.png#pic_center",alt:"在这里插入图片描述"}})])])}),[],!1,null,null,null);_.default=r.exports}}]);