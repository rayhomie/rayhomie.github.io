(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{429:function(e,t,d){"use strict";d.r(t);var _=d(42),v=Object(_.a)({},(function(){var e=this,t=e.$createElement,d=e._self._c||t;return d("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[d("h1",{attrs:{id:"虚拟dom与dom-diff"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#虚拟dom与dom-diff"}},[e._v("#")]),e._v(" 虚拟DOM与DOM diff")]),e._v(" "),d("h2",{attrs:{id:"虚拟dom"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#虚拟dom"}},[e._v("#")]),e._v(" 虚拟DOM")]),e._v(" "),d("p",[e._v("减少DOM操作：")]),e._v(" "),d("ul",[d("li",[e._v("虚拟dom可以将多次操作合并成一次操作，比如你添加1000个节点，却是一个接一个操作")]),e._v(" "),d("li",[e._v("虚拟dom借助dom diff可以把多余的操作省掉，比如你添加1000个节点，其实只有10个是新增的")])]),e._v(" "),d("p",[e._v("跨平台：")]),e._v(" "),d("ul",[d("li",[e._v("虚拟dom不仅可以变成dom，还可以变成小程序、ios应用、安卓应用、因为虚拟dom本质上只是一个JS对象")])]),e._v(" "),d("p",[e._v("React使用 JSX 创建虚拟dom：通过balel转为createElement形式")]),e._v(" "),d("p",[e._v("Vue使用 Template 创建虚拟dom：通过vue-loader转成"),d("code",[e._v("h=>h()")]),e._v("形式")]),e._v(" "),d("p",[e._v("操作的dom数量级太大（比如10W个），反而直接操作真实dom快；操作dom数量级合理（比如1K个），虚拟dom优化更好。")]),e._v(" "),d("h2",{attrs:{id:"dom-diff"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#dom-diff"}},[e._v("#")]),e._v(" "),d("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/20346379",target:"_blank",rel:"noopener noreferrer"}},[e._v("DOM DIFF"),d("OutboundLink")],1)]),e._v(" "),d("p",[e._v("一个函数称之为patch")]),e._v(" "),d("p",[d("code",[e._v("patches=patch(oldVNode,newVNode)")])]),e._v(" "),d("h4",{attrs:{id:"tree-diff"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#tree-diff"}},[e._v("#")]),e._v(" Tree diff")]),e._v(" "),d("ul",[d("li",[e._v("将新旧两棵树逐层对比，找出哪些节点需要更新")]),e._v(" "),d("li",[e._v("如果节点是组件就看Component diff")]),e._v(" "),d("li",[e._v("如果节点是标签就看Element diff")])]),e._v(" "),d("h4",{attrs:{id:"component-diff"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#component-diff"}},[e._v("#")]),e._v(" Component diff")]),e._v(" "),d("ul",[d("li",[e._v("如果节点是组件，就先看组件类型")]),e._v(" "),d("li",[e._v("类型不同直接替换（删除旧的）")]),e._v(" "),d("li",[e._v("类型相同则只更新属性")]),e._v(" "),d("li",[e._v("然后深入组件做Tree diff（递归）")])]),e._v(" "),d("h4",{attrs:{id:"element-diff"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#element-diff"}},[e._v("#")]),e._v(" Element diff")]),e._v(" "),d("ul",[d("li",[e._v("如果节点是原生标签，则看标签名")]),e._v(" "),d("li",[e._v("标签名不同直接替换，相同则只更新属性")]),e._v(" "),d("li",[e._v("然后进入标签后代做Tree diff（递归）")])]),e._v(" "),d("h3",{attrs:{id:"明显bug修复："}},[d("a",{staticClass:"header-anchor",attrs:{href:"#明显bug修复："}},[e._v("#")]),e._v(" "),d("a",{attrs:{href:"https://www.zhihu.com/question/61064119/answer/766607894",target:"_blank",rel:"noopener noreferrer"}},[e._v("明显BUG修复"),d("OutboundLink")],1),e._v("：")]),e._v(" "),d("p",[e._v("加key唯一标记每个节点，diff算法更好对比（不建议使用"),d("code",[e._v(":key=index")]),e._v("，建议使用"),d("code",[e._v(":key=id")]),e._v("）"),d("strong",[e._v("DOMDiff算法是通过key来判断DOM节点是否变化的。")])]),e._v(" "),d("h5",{attrs:{id:"下面就是默认不加key，或者使用-key-index："}},[d("a",{staticClass:"header-anchor",attrs:{href:"#下面就是默认不加key，或者使用-key-index："}},[e._v("#")]),e._v(" 下面就是默认不加key，或者使用"),d("code",[e._v(":key=index")]),e._v("：")]),e._v(" "),d("p",[d("code",[e._v("['吴彦祖'key1,'陈冠希'key2,'陈奕迅'key3]")]),e._v('==点击删除"陈冠希"生成新虚拟dom==>'),d("code",[e._v("[key1,key3]")]),e._v("==进行DOMDiff对比算法认为key2改成了key3==>"),d("code",[e._v("['吴彦祖','陈奕迅']")]),e._v("==重新绑定key值==>"),d("code",[e._v("['吴彦祖'key1,'陈奕迅'key2]")])]),e._v(" "),d("h5",{attrs:{id:"下面是使用-key-id："}},[d("a",{staticClass:"header-anchor",attrs:{href:"#下面是使用-key-id："}},[e._v("#")]),e._v(" 下面是使用"),d("code",[e._v(":key=id")]),e._v("：")]),e._v(" "),d("p",[d("code",[e._v("[{id:1,'吴彦祖'},{id:2,'陈冠希'},{id:3,'陈奕迅'}]")]),e._v('==点击删除"陈冠希"生成新虚拟dom==>'),d("code",[e._v("[{id:1},{id:3}]")]),e._v("==DOMDiff对比算法认为id2改成了id3==>"),d("code",[e._v("[{id:1,'吴彦祖'},{id:3,'陈奕迅'}]")]),e._v("==重新绑定key值为id==>"),d("code",[e._v("[{id:1,'吴彦祖'},{id:3,'陈奕迅'}]")])])])}),[],!1,null,null,null);t.default=v.exports}}]);