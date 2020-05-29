# DllPlugin 提升构建

### 什么是 DLL

DLL(Dynamic Link Library)文件为动态链接库文件,在 Windows 中，许多应用程序并不是一个完整的可执行文件，它们被分割成一些相对独立的动态链接库，即 DLL 文件，放置于系统中。当我们执行某一个程序时，相应的 DLL 文件就会被调用。

### 为什么要用 DLL

在引入一些第三方模块时，例如 Vue、React 等，这些框架的文件一般都是不会修改的，而每次打包都需要去解析他们，也会影响打包速度，就算是做了拆分，也只是提高了上线后的用户访问速度，并不会提高构建速度，所以如果需要提高构建速度，应该使用动态链接库的方式，类似 windows 的 dll 文件。

借助 DLLPlugin 插件实现将这些框架作为一个个的动态链接库，只构建一次，以后的每次构建都只会生成自己的业务代码，可以很好的提高构建效率
猪哟思想在于，讲一些不做修改的依赖文件，提前打包，这样我们开发代码发布的时候就不需要再对这些代码进行打包，从而节省了打包时间，主要使用两个插件: DLLPlugin 和 DLLReferencePlugin。

需要注意的是，若是使用的 DLLPlugin，CleanWebpackPlugin 插件会存在冲突，需要移除 CleanWebpackPlugin 插件

### DLLReferencePlugin

配置参数

- context: manifest 文件中的请求上下文
- manifest: DLLPlugin 插件生成的 manifest.json
- content(可选): 请求的映射模块 id(默认为 manifest.content)
- name(可选): dll 暴露的名称
- scope(可选): 前缀用于访问 dll 的文件
- sourceType(可选): dll 是如何暴露(libraryTarget)

### 应用 DLL

1、在 build 下创建 `webpack.dll.config.js`，专门打包 vue 全家桶及一些第三方库。

```js
const path = require('path')
const webpack = require('webpack')
module.exports = {
  entry: {
    vendor: [
      'vue-router',
      'vuex',
      'vue/dist/vue.common.js',
      'vue/dist/vue.js',
      'vue-loader/lib/component-normalizer.js',
      'vue',
      'axios',
      'echarts',
    ],
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].dll.js',
    library: '[name]_library',
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve('./dist', '[name]-manifest.json'),
      name: '[name]_library',
    }),
    // 建议加上代码压缩插件，否则dll包会比较大。
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
}
```

- `library` 的意思其实就是将 dll 文件以一个全局变量的形式导出出去，便于接下来引用。
- `mainfest.json` 文件是一个映射关系，它的作用就是帮助 webpack 使用我们之前打包好的 `***.dll.js` 文件，而不是重新再去 `node_modules` 中去寻找。

2、在 `webpack.prod.conf.js` 的 plugin 后面加入配置

```js
new webpack.DllReferencePlugin({
  manifest: require('../dist/vendor-manifest.json'),
})
```

3、`package.json`文件中添加快捷命令`(build:dll)`

```js
  "scripts": {
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    "start": "npm run dev",
    "lint": "eslint --ext .js,.vue src",
    "build": "node build/build.js",
    "build:dll": "webpack --config build/webpack.dll.conf.js"
  }
```

生产环境打包的时候先`npm run build:dll`命令会在打包目录下生成 `vendor-manifest.json` 文件与 vendor.dll.js 文件。然后`npm run build`生产其他文件。

4、根目录下的入口 `index.html` 加入引用

```html
<script type="text/javascript" src="./vendor.dll.js"></script>
```

此外，还可以插件`add-asset-html-webpack-plugin`可以动态的将生成的 dll 文件引入

```js
npm i -D add-asset-html-webpack-plugin

new AddAssetHtmlWebpackPlugin({
  filepath: path.resolve(__dirname, '../dist/vue_dll.js'),
})
```

配置插件自动添加 script 标签到 HTML 中，需要注意的是，必须在 `HtmlWebpackPlugin` 后面引入，因为 `HtmlWebpackPlugin` 是生产一个 html 文件，`AddAssetHtmlWebpackPlugin` 是在已有的 html 中注入一个 script，否则会被覆盖。

### 总结
dll的两个作用

* 分离代码，业务代码和第三方模块可以被打包到不同的文件里，这个有几个好处：
    * 避免打包出单个文件的大小太大，不利于调试
    * 将单个大文件拆成多个小文件之后，一定情况下有利于加载（不超出浏览器一次性请求的文件数情况下，并行下载肯定比串行快）
* 提升构建速度。第三方库没有变更时，由于我们只构建业务相关代码，相比全部重新构建自然要快的多。
