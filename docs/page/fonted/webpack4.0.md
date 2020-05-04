# webpack 4.0

2018 年 8 月 25 号 webpack4 正式发布。再次之后只要使用 npm install webpack 命令，默认安装的就是版本 4。webpack4 号称零配置开箱即用，那么来看看 webpack4.x 和 3.x 比较大的区别。官方宣传能够提升构建速度 60%-98%，这是不是真的呢？

### 构建速度
Webpack4.0 的构建速度远远快于 Webpack3.0，官方也说升级之后，升级版本之后，构建时间可以降低 60% - 98% 左右。

* v8 引擎带来的优化（for of 替代 forEach、Map 和 Set 替代 Object、includes 替代 indexOf）
* 默认使用更快的 md4 hash 算法
* webpack AST 可以直接从 loader 传递给 AST，减少解析时间
* 使用字符串方法替代正则表达式

### 版本问题

1. webpack依赖包 webpack webpack-cli
2. Node 环境的升级:不在支持 node 4.0 的版本，最低支持 6.11.5。
3. 各种配件升级，各种 loader 升级。如果在编译过程中报 can not find xxx 的错误，说明 xxx 对应的 loader 可能需要升级了，因为 webpack4 去掉了 this.options 的支持

### mode 配置

webpack4 增加了一个 mode 配置，只有两种值 development | production。对不同的环境他会启用不同的配置。

- 默认生产环境开起了很多代码优化（minify, splite）
- 开发时开启注视和验证，并加上了 evel devtool
- 生产环境不支持 watching，开发环境优化了打包的速度
- 生产环境开启模块串联（原 ModulecondatenationPlugin）
- 自动设置 process.env.NODE_EVN 到不同环境，也就是不使用 DefinePlugin 了
- 如果 mode 设置 none，所有默认设置都去掉了。

### CommonsChunkPlugin

听说 webpack 升级到 4，最大的感触就是去点了这个 CommonsChunkPlugin,因为官方发的 change log 最大的篇幅就是介绍的他
CommonsChunkPlugin 删除之后，改成使用 optimization.splitChunks 进行模块划分

```js
optimization: {
  splitChunks: {
    chunks: 'all',
    cacheGroups: {
      vendor: {
        name: "vendor",
        test: /[\\/]node_modules[\\/]/,
        priority: 10,
        chunks: "initial" // 只打包初始时依赖的第三方
      },
    }
  }
}
```

### UglifyJsPlugin

webpack4 不需要使用这个 plugin 了，只需要使用 optimization.minimize 为 true 就行，production mode 下面自动为 true。

optimization.minimizer 可以配置你自己的压缩程序

```js
optimization: {
  minimizer: [
    new TerserPlugin({
      parallel: 4, // 开启几个进程来处理压缩
      cache: true, // 是否缓存
      sourceMap: false,
    }),
    // 压缩css
    new OptimizeCSSAssetsPlugin({}),
  ]
}
```

### mini-css-extract-plugin

webpack4 删除原 extract-text-webpack-plugin 配置，增加 mini-css-extract-plugin 配置

```js
module: {
  rules: [
    {
      test: /\.(le|c)ss$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '../'
          },
        },
        'css-loader',
        'postcss-loader',
        'less-loader',
      ]
    }
  ]
},
plugins: [
  new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[id].[contenthash:8].css',
  }),
]
```

### vue-loader。

vue-loader 要配合一个 webpack 插件才能正确使用

```js
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
}
```

### 支持 es6 的方式导入 JSON 文件

原生支持处理JSON文件格式，不需要json-loader，并且可以过滤无用的代码

```js
let jsonData = require('./data.json')
import jsonData from './data.json'
import { first } from './data.json' // 打包时只会把first相关的打进去
```
