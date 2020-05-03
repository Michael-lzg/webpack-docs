# entry和output

### Webpack 的四大核心：

- entry：js 入口源文件
- output：生成文件
- loader：进行文件处理
- plugins：插件，比 loader 更强大，能使用更多 webpack 的 api

### Entry

webpack 应该使用哪个模块做为入口文件，来作为构建其内部依赖图的开始。进去入口起点后，webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的，每个依赖项随即被处理，最后输出到称之为 bundles 的文件中。

单⼊⼝：entry 是⼀个字符串

```js
module.exports = {
  entry: './src/index.js',
}
```

多⼊⼝：entry 是⼀个对象

```js
module.exports = {
  entry: {
    index: './src/index.js',
    manager: './src/manager.js',
  },
}
```

### Output

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



