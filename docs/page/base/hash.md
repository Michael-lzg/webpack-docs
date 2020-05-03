# 文件 hash

⽂件哈希值就是打包后输出的⽂件名的后缀。浏览器为了优化体验，会有缓存机制。如果浏览器判断当前资源没有更新，就不会去服务端下载，而是直接使用本地资源。在 webpack 的构建中，我们通常使用给文件添加 hash 值来改名以及提取公共代码到不会改变的 lib 包中来解决新资源缓存问题。

### hash 的类型

- Hash：和整个项⽬的构建相关，只要项⽬⽂件有修改，整个项⽬构建的 hash 值就会更改
- Chunkhash：和 webpack 打包的 chunk 有关，不同的 entry 会⽣成不同的 chunkhash 值
- Contenthash：根据⽂件内容来定义 hash ，⽂件内容不变，则 contenthash 不变

### JS 使用 chunkhash

设置 output 的 filename，使⽤ [chunkhash]

```js
output: {
    filename: '[name][chunkhash:8].js',
    path: __dirname + '/dist'
}
```

注意: chunkhash 无法和热更新一起使用

### CSS 使用 contenthash

设置 MiniCssExtractPlugin 的 filename，使⽤ [contenthash]

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
plugins: [
  new MiniCssExtractPlugin({
    filename: `[name][contenthash:8].css`,
  }),
]
```

如果想把 css 提取出来，那么 style-loader 就不能用了，因为两个是互斥的，所以我们可以这样写:

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
```

### 图片&字体 使用 hash

图片&字体文件哈希使⽤ [hash]，代码如下：

```js
module: {
  rules: [
     {
       test: /\.(png|svg|jpg|gif)$/,
       use: [{
          loader: 'file-loader’,
          options: {
             name: 'img/[name][hash:8].[ext] '
          }
       }]
     }
  ]
}
```
