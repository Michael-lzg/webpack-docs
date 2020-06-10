# optimization

optimization 是 webpack4 新增的，主要是用来让开发者根据需要自定义一些优化构建打包的策略配置，

- minimize：true/false,告诉 webpack 是否开启代码最小化压缩，
- minimizer：自定 js 优化配置，会覆盖默认的配置，结合 UglifyJsPlugin 插件使用，
- splitChunks ：取代了 CommonsChunkPlugin，自动分包拆分、代码拆分，详细默认配置：
    - chunks：默认async，只会作用于异步加载的代码块:它有三个值：all,async,initial。
    - cacheGroups：缓存组，这里是我们表演的舞台，抽取公共模块什么的，都在这个地方
    - priority：优先级，只配置在缓存组的每一项，决定执行的顺序。
    - minChunks：最小块，即当块的数量大于等于minChunks时，才起作用
    - minSize: 最小大小，即当抽取的公共模块的大小，大于minSize所设置的值，才起作用
    - test: 匹配规则，说明要匹配的项

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
