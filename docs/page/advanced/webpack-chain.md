# webpack-chain

webpack-chain 尝试通过提供可链式或顺流式的 API 创建和修改webpack 配置。

### 修改 entry 和 output

```js
chainWebpack: (config) => {
  config.entryPoints.clear() // 会把默认的入口清空
  config.entry('main').add('./src/main.js') //新增入口
  config.entry('routes').add('./src/app-routes.js') //新增入口
  config.output
    .path('dist')
    .filename('[name].[chunkhash].js')
    .chunkFilename('chunks/[name].[chunkhash].js')
    .libraryTarget('umd')
    .library()
}
```

### 设置别名 alias

```js
chainWebpack: (config) => {
  config.resolve.alias
    .set('@$', resolve('src'))
    .set('assets', resolve('src/assets'))
    .set('components', resolve('src/components'))
    .set('layout', resolve('src/layout'))
    .set('base', resolve('src/base'))
    .set('static', resolve('src/static'))
    .delete('base') // 删掉指定的别名
  // .clear()  会把所有别名都删掉
}
```

### 添加新 Loader

```js
config.module.rule(name).use(name).loader(loader).options(options)

// 一个例子
config.module
  .rule('graphql')
  .test(/\.graphql$/)
  .use('graphql-tag/loader')
  .loader('graphql-tag/loader')
  .end()
```

### 修改 loader

```js
module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap((options) => {
        // 修改它的选项...
        return options
      })
  },
}
```

### 修改代理 proxy

```js
chainWebpack: (config) => {
  config.devServer
    .port(8888)
    .open(true)
    .proxy({
      '/dev': {
        target: 'http://123.57.153.106:8080/',
        changeOrigin: true,
        pathRewrite: { '^/dev': '' },
      },
    })
}
```

### 添加插件及修改插件参数

```js
// 添加插件
config.plugin(name).use(WebpackPlugin, args)

// 修改插件参数
config.plugin(name).tap((args) => newArgs)

// 修改插件初始化
config.plugin(name).init((Plugin, args) => new Plugin(...args))

// 移除插件
chainWebpack: (config) => {
  config.plugins.delete('prefetch')
  // 移除 preload 插件
  config.plugins.delete('preload')
}
```
