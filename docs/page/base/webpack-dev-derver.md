# webpack-dev-Server

webpack 提供了一个可选的本地开发服务器，这个本地服务器基于 node.js 构建，它是一个单独的组件，在 webpack 中进行配置之前需要单独安装它作为项目依赖。

devServer 作为 webpack 配置选项中的一项，以下是它的一些配置选项:

- contentBase ：设置服务器所读取文件的目录，当前我们设置为"./dist"
- port ：设置端口号，如果省略，默认为 8080
- inline ：设置为 true，当源文件改变时会自动刷新页面
- historyApiFallback ：设置为 true，所有的跳转将指向 index.html

* 安装依赖

```
npm install webpack-dev-server -D
```

- 配置 webpack

```js
module.exports = merge(common, {
  // 将webpack.common.js合并到当前文件
  devServer: {
    contentBase: './dist', // 本地服务器所加载文件的目录
    port: '8899', // 设置端口号为8088
    inline: true, // 文件修改后实时刷新
    historyApiFallback: true, //不跳转
    hot: true, // 热更新
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 热更新插件
  ],
})
```

- 配置打包命令
  配置好 webpack 之后，我们可以在 package.json 配置打包命令

```js
"scripts": {
  "dev": "webpack-dev-server  --config webpack.dev.js --mode development",
  "build": "webpack --config webpack.prod.js"
}
```

这样，我们在终端输入 npm run dev 运行服务器，即可在http://localhost:8899/中查看页面

### proxy

如果你有单独的后端开发服务器 API，并且希望在同域名下发送 API 请求 ，那么代理某些 URL 会很有用。同时还能解决开发环境的跨域问题。

1、将 `/api/xxx` 代理到 `http://localhost:3000/api/xxx`

```js
mmodule.exports = {
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
}
```

2、将多个路径代理到同一个 target 下, 你可以使用由一个或多个「具有 context 属性的对象」构成的数组

```js
module.exports = {
  devServer: {
    proxy: [
      {
        context: ['/auth', '/api'],
        target: 'http://localhost:3000',
      },
    ],
  },
}
```

3、如果不想始终传递 /api ，则需要重写路径

```js
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': '' }
      },
    },
  },
}
```
