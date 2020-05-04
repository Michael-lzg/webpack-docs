(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{63:function(a,s,e){"use strict";e.r(s);var t=e(0),r=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"sourcemap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sourcemap","aria-hidden":"true"}},[a._v("#")]),a._v(" sourceMap")]),a._v(" "),e("p",[a._v("开发过程中，代码调试当然少不了，那么问题来了，经过打包后的文件，你是不容易找到出错的地方的，Source Map 就是用来解决这个问题的。")]),a._v(" "),e("p",[a._v("sourceMap 文件和源码的一个映射关系，它能帮助我们就能够快速定位问题，并进行修复。")]),a._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[a._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// ...")]),a._v("\n  devtool"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'source-map'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 会生成对于调试的完整的.map文件")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("p",[a._v("以上的配置打包回 dist 文件夹会生产相应的.map 文件。值得注意的是开启souceMap打包速度会减慢，生产文件变大，所以我们可以在开发环境使用 sourceMap，生产环境则关闭。")]),a._v(" "),e("h3",{attrs:{id:"sourcemap的种类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sourcemap的种类","aria-hidden":"true"}},[a._v("#")]),a._v(" sourceMap的种类")]),a._v(" "),e("ul",[e("li",[a._v("source-map: 会生成map格式的文件，里面包含映射关系的代码")]),a._v(" "),e("li",[a._v("inline-source-map: 不会生成map格式的文件，包含映射关系的代码会放在打包后生成的代码中")]),a._v(" "),e("li",[a._v("inline-cheap-source-map: 一是将错误只定位到行，不定位到列。二是映射业务代码，不映射loader和第三方库等。会提升打包构建的速度。")]),a._v(" "),e("li",[a._v("inline-cheap-module-source-map: module会映射loader和第三方库")]),a._v(" "),e("li",[a._v("eval: 用eval的方式生成映射关系代码，效率和性能最佳。但是当代码复杂时，提示信息可能不精确。")])])])}],!1,null,null,null);s.default=r.exports}}]);