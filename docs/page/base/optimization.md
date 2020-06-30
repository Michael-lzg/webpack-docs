# optimization

optimization 是 webpack4 新增的，主要是用来让开发者根据需要自定义一些优化构建打包的策略配置，

- minimize：true/false,告诉 webpack 是否开启代码最小化压缩，
- minimizer：自定 js 优化配置，会覆盖默认的配置，结合 UglifyJsPlugin 插件使用，
- splitChunks ：取代了 CommonsChunkPlugin，自动分包拆分、代码拆分，详细默认配置：
  - chunks：默认 async，只会作用于异步加载的代码块:它有三个值：all,async,initial。
  - priority：优先级，只配置在缓存组的每一项，决定执行的顺序。
  - minChunks：表示要被提取的模块最小被引用次数，引用次数超过或等于 minChunks 值，才能被提取。
  - minSize：规定被提取的模块在压缩前的大小最小值，单位为字节，默认为 30000，只有超过了 30000 字节才会被提取。
  - maxSize：把提取出来的模块打包生成的文件大小不能超过 maxSize 值，如果超过了，要对其进行分割并打包生成新的文件。单位为字节，默认为 0，表示不限制大小。
  - maxAsyncRequests 选项：最大的按需(异步)加载次数，默认为 6。
  - maxInitialRequests 选项：打包后的入口文件加载时，还能同时加载 js 文件的数量（包括入口文件），默认为 4。
  - cacheGroups：缓存组，这里是我们表演的舞台，抽取公共模块什么的，都在这个地方。
    - test: 匹配规则，说明要匹配的项。
    - priority 选项：方案的优先级，值越大表示提取模块时优先采用此方案。默认值为 0。

```js
optimization: {
    // 分离chunks
  splitChunks: {
    chunks: 'async',
    minSize: 30000,
    maxSize: 0,
    minChunks: 1,
    maxAsyncRequests: 5,
    maxInitialRequests: 3,
    automaticNameDelimiter: '~',
    name: true,
    cacheGroups: {
      vendors: {
        test: /[\\/]node_modules[\\/]/,
        priority: -10
      },
      default: {
        minChunks: 2,
        priority: -20,
        reuseExistingChunk: true
      },
    },
  },
  minimizer: [
    new TerserPlugin({
      parallel: 4, // 开启几个进程来处理压缩，默认是 os.cpus().length - 1
      cache: true, // 是否缓存
      sourceMap: false
    }),
    // 压缩css
    new OptimizeCSSAssetsPlugin({})
  ]
}
```

SplitChunks 在 Vue Cli3 中的默认配置如下：

```js
module.exports = {
  configureWebpack: (config) => {
    return {
      optimization: {
        splitChunks: {
          chunks: 'async',
          minSize: 30000,
          maxSize: 0,
          minChunks: 1,
          maxAsyncRequests: 6,
          maxInitialRequests: 4,
          automaticNameDelimiter: '~',
          cacheGroups: {
            vendors: {
              name: `chunk-vendors`,
              test: /[\\/]node_modules[\\/]/,
              priority: -10,
              chunks: 'initial',
            },
            common: {
              name: `chunk-common`,
              minChunks: 2,
              priority: -20,
              chunks: 'initial',
              reuseExistingChunk: true,
            },
          },
        },
      },
    }
  },
}
```
