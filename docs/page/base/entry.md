# entry

Webpack 的四大核心：

- entry：js 入口源文件
- output：生成文件
- loader：进行文件处理
- plugins：插件，比 loader 更强大，能使用更多 webpack 的 api

### Entry

webpack 应该使用哪个模块做为入口文件，来作为构建其内部依赖图的开始。进去入口起点后，webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的，每个依赖项随即被处理，最后输出到称之为 bundles 的文件中。

单⼊⼝：entry 是⼀个字符串

```js
module.exports = {
  entry: './src/index.js'
}

// 它是下面的简写：
module.exports = {
  entry: {
    main: './index.js'
  }
}
```

多⼊⼝：entry 是⼀个对象

```js
module.exports = {
  entry: {
    index: './src/index.js',
    manager: './src/manager.js'
  }
}
```
