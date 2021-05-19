# Output

告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件，这些都可以在 webpack 的配置文件中指定。

### filename

单⼊⼝配置：只有一个输出文件，则可以把它写成静态不变

```js
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js’,
    path: __dirname + '/dist'
  }
};
```

多⼊⼝配置: 有多个 Chunk 要输出时，就需要借助模版和变量了， Webpack 会为每个 Chunk 取一个名称，可以根据 Chunk 的名称来区分输出的文件名

```js
module.exports = {
  entry: {
    app: './src/app.js',
    search: './src/search.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  }
}
```

此外，还可以生成带 hash 的 fileName。

```js
module.exports = {
  entry: {
    app: './src/app.js',
    search: './src/search.js'
  },
  output: {
    path: path.join(__dirname, '/dist'), //打包后的文件存放的地方
    filename: 'js/[name].[chunkhash:8].js',
    chunkFilename: 'js/[name].[chunkhash:8].js'
  }
}
```

### publicPath

output.publicPath 可以配置发布到线上资源的 URL 前缀，为 string 类型。 默认值是空字符串 ''，即使用相对路径。

举个例子，需要把构建出的资源文件上传到 CDN 服务上，以利于加快页面的打开速度。配置代码如下：

```js
module.exports = {
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name]_[chunkhash:8].js',
    publicPath: 'https://cdn.example.com/assets/'
  }
}
```

这时发布到线上的 HTML 在引入 JavaScript 文件时就需要：

```html
<script src="https://cdn.example.com/assets/a_12345678.js"></script>
```

### libraryTarget

此配置的作用是控制 webpack 打包的内容是如何暴露的。请注意这个选项需要和 output.library 所绑定的值一起产生作用。

当我们引入别人开发的类库时通常有以下几种方式

- 传统方式：script 标签

```js
<script src="demo.js"></script>
<script>demo();</script>
```

- AMD

```js
define(['demo'], function (demo) {
  demo()
})
```

- commonjs 方式

```js
const demo = require('demo')
demo()
```

- ES6 module

```js
import demo from 'demo'
demo()
```

为什么这个类库能支持不同方式的引入？如何实现的？这就是 webpack 配置 output.library 和 output.libraryTarget 提供的功能。

output.libraryTarget 一共支持的值：

- var: 当库被加载时，那么库的返回值会被分配到使用用 var 申明的变量上
- assign: 把库返回值分配给一个没使用 var 申明的变量中，如果这个变量没有在引入作用域中提前申明过，那么将会挂载在全局作用域中。
- this: 将库的返回值分配给 this 对象的由 output.library 指定的属性。其中 this 的意义由用户决定。
- window: 将库的返回值分配给 window 对象的由 output.library 指定的属性。
- global: 将库的返回值分配给 global 对象的由 output.library 指定的属性。
- commonjs: 将库的返回值分配给 exports 对象的由 output.library 指定的属性。
- commonjs2: 将库的返回值分配给 module.exports
- amd: 这个选项会把库作为 AMD 模块导出。
- umd: 这个选项会尝试把库暴露给前使用的模块定义系统，这使其和 CommonJS、AMD 兼容或者暴露为全局变量。
- jsonp: 这个方法会使用 jsonp 的方式把结果包裹起来。
