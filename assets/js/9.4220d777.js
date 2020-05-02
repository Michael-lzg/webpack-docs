(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{60:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h3",{attrs:{id:"webpack-的四大核心："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack-的四大核心：","aria-hidden":"true"}},[t._v("#")]),t._v(" Webpack 的四大核心：")]),t._v(" "),s("ul",[s("li",[t._v("entry：js 入口源文件")]),t._v(" "),s("li",[t._v("output：生成文件")]),t._v(" "),s("li",[t._v("loader：进行文件处理")]),t._v(" "),s("li",[t._v("plugins：插件，比 loader 更强大，能使用更多 webpack 的 api")])]),t._v(" "),s("h2",{attrs:{id:"entry"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#entry","aria-hidden":"true"}},[t._v("#")]),t._v(" Entry")]),t._v(" "),s("p",[t._v("webpack 应该使用哪个模块做为入口文件，来作为构建其内部依赖图的开始。进去入口起点后，webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的，每个依赖项随即被处理，最后输出到称之为 bundles 的文件中。")]),t._v(" "),s("p",[t._v("单⼊⼝：entry 是⼀个字符串")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  entry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/index.js'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("多⼊⼝：entry 是⼀个对象")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  entry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/index.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    manager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/manager.js'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"output"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#output","aria-hidden":"true"}},[t._v("#")]),t._v(" Output")]),t._v(" "),s("p",[t._v("告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件，这些都可以在webpack的配置文件中指定。")]),t._v(" "),s("p",[t._v("单⼊⼝配置")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    entry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/index.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    output"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        filename"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 'bundle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js’"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" __dirname "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/dist'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("多⼊⼝配置")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  entry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/app.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    search"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/search.js'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  output"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    filename"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[name].js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" __dirname "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/dist'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("通过[name]占位符确保⽂件名称的唯⼀")]),t._v(" "),s("h2",{attrs:{id:"loader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loader","aria-hidden":"true"}},[t._v("#")]),t._v(" Loader")]),t._v(" "),s("p",[s("code",[t._v("loader")]),t._v(" 让 "),s("code",[t._v("webpack")]),t._v(" 能够去处理那些非 "),s("code",[t._v("javaScript")]),t._v(" 文件（"),s("code",[t._v("webpack")]),t._v(" 自身只理解 "),s("code",[t._v("javaScript")]),t._v("）。"),s("code",[t._v("loader")]),t._v(" 可以将所有类型的文件转换为 "),s("code",[t._v("webpack")]),t._v(" 能够处理的有效模块，然后你就可以利用 "),s("code",[t._v("webpack")]),t._v(" 的打包能力，对它们进行处理。")]),t._v(" "),s("h3",{attrs:{id:"loader的特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loader的特点","aria-hidden":"true"}},[t._v("#")]),t._v(" loader的特点")]),t._v(" "),s("ul",[s("li",[t._v("一个Loader 的职责是单一的，只需要完成一种转换")]),t._v(" "),s("li",[t._v("一个Loader 其实就是一个Node.js 模块，这个模块需要导出一个函数")]),t._v(" "),s("li",[t._v("loader 总是从右到左地被调用。")])]),t._v(" "),s("p",[t._v("loader的使用方法")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 方法一")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.jsx?$/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//匹配规则")]),t._v("\n  use"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel-loader'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// use: ['style-loader', 'css-loader'] 多个loader")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 方法二")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.jsx?$/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  loader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel-loader'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"常用的loader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用的loader","aria-hidden":"true"}},[t._v("#")]),t._v(" 常用的loader")]),t._v(" "),s("h4",{attrs:{id:"处理样式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#处理样式","aria-hidden":"true"}},[t._v("#")]),t._v(" 处理样式")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("css-loader")]),t._v(": 加载.css 文件，")]),t._v(" "),s("li",[s("code",[t._v("style-loader")]),t._v(":使用 style 标签将 "),s("code",[t._v("css-loader")]),t._v(" 内部样式注入到我们的 html 页面")]),t._v(" "),s("li",[s("code",[t._v("less-loader, sass-loader")]),t._v(": 解析css预处理器")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("rules"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.css$/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" use"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'style-loader'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'css-loader'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[s("code",[t._v("style-loader")]),t._v(" 放在 "),s("code",[t._v("css-loader")]),t._v(" 后面是因为 webpack 打包机制是按照数组从后往前的顺序将资源交个 loader 处理。")]),t._v(" "),s("h4",{attrs:{id:"处理-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#处理-js","aria-hidden":"true"}},[t._v("#")]),t._v(" 处理 js")]),t._v(" "),s("ul",[s("li",[t._v("让你能使用最新的js代码（ES6，ES7...）")]),t._v(" "),s("li",[t._v("让你能使用基于js进行了拓展的语言，比如React的JSX；")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("rules"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.js$/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      exclude"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/node_modules/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      use"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        loader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel-loader'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          cacheDirectory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          presets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'env'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" modules"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("ul",[s("li",[s("code",[t._v("exclude")]),t._v("，排除了目录 "),s("code",[t._v("node_modules")]),t._v("，可不编译 "),s("code",[t._v("node_modules")]),t._v(" 目录中的模块，提高打包速度；")]),t._v(" "),s("li",[s("code",[t._v("babel-loader")]),t._v("，转译 ES6+;")]),t._v(" "),s("li",[s("code",[t._v("@babel/core")]),t._v("，babel 编译器核心模块；")]),t._v(" "),s("li",[s("code",[t._v("@babel/preset-env")]),t._v("，预置器，根据用户配置的目标环境自动添加需要的插件和补丁来编译 ES6+；")]),t._v(" "),s("li",[s("code",[t._v("cacheDirectory")]),t._v("，缓存机制，这里设为 true，在重复打包未改变的模块时防止二次编译，提高打包速度，指向 "),s("code",[t._v("node_modules/.cache/babel-loader")]),t._v("；")]),t._v(" "),s("li",[s("code",[t._v("presets")]),t._v(" 的 modules 设置为 false，意思是禁止让 "),s("code",[t._v("@babel/preset-env")]),t._v(" 将模块语句转换，让 "),s("code",[t._v("ES6 Module")]),t._v(" 语法给 webpack 处理，若是为 true，会将 "),s("code",[t._v("ES6 Module")]),t._v(" 模块转化为 "),s("code",[t._v("CommonJS")]),t._v(" 形式，这将会导致 "),s("code",[t._v("tree-shaking")]),t._v(" 特性失效；")])]),t._v(" "),s("h4",{attrs:{id:"处理文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#处理文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 处理文件")]),t._v(" "),s("p",[t._v("处理图片资源时，我们常用的两种loader是"),s("code",[t._v("file-loader")]),t._v("或者"),s("code",[t._v("url-loader")]),t._v("，两者的主要差异在于。"),s("code",[t._v("url-loader")]),t._v("可以设置图片大小限制，当图片超过限制时，其表现行为等同于"),s("code",[t._v("file-loader")]),t._v("，而当图片不超过限制时，则会将图片以"),s("code",[t._v("base64")]),t._v("的形式打包进css文件，以减少请求次数")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.(png|jpe?g|gif|svg)(\\?.*)?$/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  loader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'url-loader'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    limit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" utils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("assetsPath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'img/[name].[hash:7].[ext]'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"处理-vue文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#处理-vue文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 处理.vue文件")]),t._v(" "),s("p",[s("code",[t._v("vue-loader")]),t._v(" 是 "),s("code",[t._v("webpack")]),t._v(" 的加载器模块，它使我们可以用 "),s("code",[t._v(".vue")]),t._v(" 文件格式编写单文件组件。单文件组件文件有三个部分，即模板、脚本和样式。 "),s("code",[t._v("vue-loader")]),t._v(" 模块允许 "),s("code",[t._v("webpack")]),t._v(" 使用单独的加载器模块（例如 "),s("code",[t._v("sass 或 scss 加载器")]),t._v("）提取和处理每个部分。该设置使我们可以使用 "),s("code",[t._v(".vue")]),t._v(" 文件无缝编写程序。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.vue$/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  loader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-loader'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" vueLoaderConfig\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"开发一个loader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发一个loader","aria-hidden":"true"}},[t._v("#")]),t._v(" 开发一个loader")]),t._v(" "),s("p",[t._v("需求：手写一个 "),s("code",[t._v("loader")]),t._v("，将 "),s("code",[t._v("'kobe'")]),t._v(" 转换成 "),s("code",[t._v("'Black Mamba'")]),t._v("。当然大家可以根据自己的需求进行设计。这里只是讲解方法。")]),t._v(" "),s("h4",{attrs:{id:"_1、编写-loader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、编写-loader","aria-hidden":"true"}},[t._v("#")]),t._v(" 1、编写 loader")]),t._v(" "),s("p",[t._v("在根目录下，新建目录 "),s("code",[t._v("kobe-loader")]),t._v(" 作为我们编写 "),s("code",[t._v("loader")]),t._v(" 的名称，执行 "),s("code",[t._v("npm init -y")]),t._v(" 命令，新建一个模块化项目，然后新建 "),s("code",[t._v("index.js")]),t._v(" 文件，相关源码如下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" content "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/kobe/gi")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Black Mamba'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"_2、注册模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、注册模块","aria-hidden":"true"}},[t._v("#")]),t._v(" 2、注册模块")]),t._v(" "),s("p",[t._v("正常我们安装的 "),s("code",[t._v("loader")]),t._v(" 是从 "),s("code",[t._v("npm")]),t._v(" 下载安装，但是我们可以在 "),s("code",[t._v("kobe-loader")]),t._v(" 目录底下使用 "),s("code",[t._v("npm link")]),t._v(" 做到在不发布模块的情况下，将本地的一个正在开发的模块的源码链接到项目的 "),s("code",[t._v("node_modules")]),t._v(" 目录下，让项目可以直接使用本地的 "),s("code",[t._v("npm")]),t._v(" 模块。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npm link\n")])])]),s("p",[t._v("然后在项目根目录执行以下命令，将注册到全局的本地 "),s("code",[t._v("npm")]),t._v(" 模块链接到项目的 "),s("code",[t._v("node_modules")]),t._v(" 下")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ npm link kobe-loader\n")])])]),s("p",[t._v("注册成功后，我们可以在 "),s("code",[t._v("node_modules")]),t._v(" 目录下能查找到对应的 "),s("code",[t._v("loader")]),t._v("。")]),t._v(" "),s("h4",{attrs:{id:"_3、在-webpack-中配置-loader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、在-webpack-中配置-loader","aria-hidden":"true"}},[t._v("#")]),t._v(" 3、在 webpack 中配置 loader")]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("webpack.base.conf.js")]),t._v(" 加上如下配置")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.js/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  loader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'kobe-loader'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("此时，我们在所有 js 文件下书写的 "),s("code",[t._v("'kobe'")]),t._v(" 就全部替换成 "),s("code",[t._v("'Black Mamba'")]),t._v("了。")]),t._v(" "),s("h4",{attrs:{id:"_4、配置参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、配置参数","aria-hidden":"true"}},[t._v("#")]),t._v(" 4、配置参数")]),t._v(" "),s("p",[t._v("上面我们是写死的替换文案，假如我想通过配置项来改变，可以在 loader 中做以下调整")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// custom-loader/index.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" utils "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'loader-utils'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" options "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" utils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOptions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" content "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/kobe/gi")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// webpack.base.conf.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.js/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  use"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    loader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'kobe-loader'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'kobe'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugin","aria-hidden":"true"}},[t._v("#")]),t._v(" Plugin")]),t._v(" "),s("p",[t._v("专注处理 webpack 在编译过程中的某个特定的任务的功能模块，可以称为插件。")]),t._v(" "),s("h3",{attrs:{id:"plugin-的特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugin-的特点","aria-hidden":"true"}},[t._v("#")]),t._v(" Plugin 的特点")]),t._v(" "),s("ul",[s("li",[t._v("是一个独立的模块")]),t._v(" "),s("li",[t._v("模块对外暴露一个 js 函数")]),t._v(" "),s("li",[t._v("函数的原型 "),s("code",[t._v("(prototype)")]),t._v(" 上定义了一个注入 "),s("code",[t._v("compiler")]),t._v(" 对象的 "),s("code",[t._v("apply")]),t._v("方法 "),s("code",[t._v("apply")]),t._v(" 函数中需要有通过 "),s("code",[t._v("compiler")]),t._v(" 对象挂载的 "),s("code",[t._v("webpack")]),t._v(" 事件钩子，钩子的回调中能拿到当前编译的 "),s("code",[t._v("compilation")]),t._v(" 对象，如果是异步编译插件的话可以拿到回调 "),s("code",[t._v("callback")])]),t._v(" "),s("li",[t._v("完成自定义子编译流程并处理 "),s("code",[t._v("complition")]),t._v(" 对象的内部数据")]),t._v(" "),s("li",[t._v("如果异步编译插件的话，数据处理完成后执行 "),s("code",[t._v("callback")]),t._v(" 回调。")])]),t._v(" "),s("h3",{attrs:{id:"常用plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用plugin","aria-hidden":"true"}},[t._v("#")]),t._v(" 常用Plugin")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("HotModuleReplacementPlugin")]),t._v(" 代码热替换。因为 "),s("code",[t._v("Hot-Module-Replacement")]),t._v(" 的热更新是依赖于 "),s("code",[t._v("webpack-dev-server")]),t._v("，后者是在打包文件改变时更新打包文件或者 reload 刷新整个页面，"),s("code",[t._v("HRM")]),t._v(" 是只更新修改的部分。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("HtmlWebpackPlugin")]),t._v(", 生成 html 文件。将 webpack 中"),s("code",[t._v("entry")]),t._v("配置的相关入口 chunk 和 "),s("code",[t._v("extract-text-webpack-plugin")]),t._v("抽取的 css 样式 插入到该插件提供的"),s("code",[t._v("template")]),t._v("或者"),s("code",[t._v("templateContent")]),t._v("配置项指定的内容基础上生成一个 html 文件，具体插入方式是将样式"),s("code",[t._v("link")]),t._v("插入到"),s("code",[t._v("head")]),t._v("元素中，"),s("code",[t._v("script")]),t._v("插入到"),s("code",[t._v("head")]),t._v("或者"),s("code",[t._v("body")]),t._v("中。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("ExtractTextPlugin")]),t._v(", 将 css 成生文件，而非内联 。该插件的主要是为了抽离 css 样式,防止将样式打包在 js 中引起页面样式加载错乱的现象。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("NoErrorsPlugin")]),t._v("报错但不退出 webpack 进程")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("UglifyJsPlugin")]),t._v("，代码丑化，开发过程中不建议打开。 "),s("code",[t._v("uglifyJsPlugin")]),t._v(" 用来对 js 文件进行压缩，从而减小 js 文件的大小，加速 load 速度。"),s("code",[t._v("uglifyJsPlugin")]),t._v(" 会拖慢 webpack 的编译速度，所有建议在开发简单将其关闭，部署的时候再将其打开。多个 html 共用一个 js 文件(chunk)，可用 "),s("code",[t._v("CommonsChunkPlugin")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("purifycss-webpack")]),t._v("  。打包编译时，可剔除页面和 js 中未被使用的 css，这样使用第三方的类库时，只加载被使用的类，大大减小 css 体积")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("optimize-css-assets-webpack-plugin")]),t._v("   压缩 css，优化 css 结构，利于网页加载和渲染")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("webpack-parallel-uglify-plugin")]),t._v("   可以并行运行 UglifyJS 插件，这可以有效减少构建时间")])])]),t._v(" "),s("h4",{attrs:{id:"开发一个插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发一个插件","aria-hidden":"true"}},[t._v("#")]),t._v(" 开发一个插件")]),t._v(" "),s("p",[t._v("举个例子")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1、BasicPlugin.js 文件（独立模块）")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2、模块对外暴露的 js 函数")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BasicPlugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//在构造函数中获取用户为该插件传入的配置")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("pluginOptions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("options "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pluginOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//3、原型定义一个 apply 函数，并注入了 compiler 对象")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("compiler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//4、挂载 webpack 事件钩子（这里挂载的是 emit 事件）")]),t._v("\n         compiler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("plugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'emit'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("compilation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n             "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ... 内部进行自定义的编译操作")]),t._v("\n             "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 5、操作 compilation 对象的内部数据")]),t._v("\n             console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("compilation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n             "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 6、执行 callback 回调")]),t._v("\n             "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 7、暴露 js 函数")]),t._v("\n module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" BasicPlugin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}],!1,null,null,null);a.default=e.exports}}]);