# optimization

optimization 是 webpack4 新增的，主要是用来让开发者根据需要自定义一些优化构建打包的策略配置，

- minimize：true/false,告诉 webpack 是否开启代码最小化压缩，
- minimizer：自定 js 优化配置，会覆盖默认的配置，结合 UglifyJsPlugin 插件使用，
- removeEmptyChunks: bool 值，它检测并删除空的块。将设置为 false 将禁用此优化，
- nodeEnv：它并不是 node 里的环境变量，设置后可以在代码里使用 process.env.NODE_ENV === 'development'来判断一些逻辑，生产环境 UglifyJsPlugin 会自动删除无用代码，
- splitChunks ：取代了 CommonsChunkPlugin，自动分包拆分、代码拆分，详细默认配置：
- 默认配置，只会作用于异步加载的代码块 —— chunks: 'async'，它有三个值：all,async,initial

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
