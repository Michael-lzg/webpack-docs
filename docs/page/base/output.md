# Output

告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件，这些都可以在 webpack 的配置文件中指定。

单⼊⼝配置

```js
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js’,
    path: __dirname + '/dist'
  }
};
```

多⼊⼝配置

```js
module.exports = {
  entry: {
    app: './src/app.js',
    search: './src/search.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
  },
}
```

此外，还可以生成带 hash 的 fileName。

```js
module.exports = {
  entry: {
    app: './src/app.js',
    search: './src/search.js',
  },
  output: {
    path: path.join(__dirname, '/dist'), //打包后的文件存放的地方
    filename: 'js/[name].[chunkhash:8].js',
    chunkFilename: 'js/[name].[chunkhash:8].js',
  },
}
```

### output libraryTarget

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


