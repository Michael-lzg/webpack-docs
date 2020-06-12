# Plugin

专注处理 webpack 在编译过程中的某个特定的任务的功能模块，可以称为插件。

#### Plugin 的特点

- 是一个独立的模块
- 模块对外暴露一个 js 函数
- 函数的原型 `(prototype)` 上定义了一个注入 `compiler` 对象的 `apply`方法 `apply` 函数中需要有通过 `compiler` 对象挂载的 `webpack` 事件钩子，钩子的回调中能拿到当前编译的 `compilation` 对象，如果是异步编译插件的话可以拿到回调 `callback`
- 完成自定义子编译流程并处理 `complition` 对象的内部数据
- 如果异步编译插件的话，数据处理完成后执行 `callback` 回调。

#### loader 和 plugin 的区别

- loader，它是一个转换器，将 A 文件进行编译成 B 文件，比如：将 A.less 转换为 A.css，单纯的文件转换过程。webpack 自身只支持 js 和 json 这两种格式的文件，对于其他文件需要通过 loader 将其转换为 commonJS 规范的文件后，webpack 才能解析到

- plugin 是一个扩展器，它丰富了 webpack 本身，针对是 loader 结束后，webpack 打包的整个过程，它并不直接操作文件，而是基于事件机制工作，会监听 webpack 打包过程中的某些节点，执行广泛的任务。

## HotModuleReplacementPlugin

模块热更新插件。`Hot-Module-Replacement` 的热更新是依赖于 `webpack-dev-server`，后者是在打包文件改变时更新打包文件或者 reload 刷新整个页面，`HRM` 是只更新修改的部分。

`HotModuleReplacementPlugin`是`webpack`模块自带的，所以引入`webpack`后，在`plugins`配置项中直接使用即可。

```js
const webpack = require('webpack')

plugins: [
  new webpack.HotModuleReplacementPlugin(), // 热更新插件
]
```

## html-webpack-plugin

生成 html 文件。将 webpack 中`entry`配置的相关入口 `chunk` 和 `extract-text-webpack-plugin`抽取的 css 样式 插入到该插件提供的`template`或者`templateContent`配置项指定的内容基础上生成一个 html 文件，具体插入方式是将样式`link`插入到`head`元素中，`script`插入到`head`或者`body`中。

```js
const HtmlWebpackPlugin = require('html-webpack-plugin')

plugins: [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.join(__dirname, '/index.html'),
    minify: {
      // 压缩HTML文件
      removeComments: true, // 移除HTML中的注释
      collapseWhitespace: true, // 删除空白符与换行符
      minifyCSS: true, // 压缩内联css
    },
    inject: true,
  }),
]
```

inject 有四个选项值

- true：默认值，script 标签位于 html 文件的 body 底部
- body：script 标签位于 html 文件的 body 底部（同 true）
- head：script 标签位于 head 标签内
- false：不插入生成的 js 文件，只是单纯的生成一个 html 文件

#### 多页应用打包

有时，我们的应用不一定是一个单页应用，而是一个多页应用，那么如何使用 webpack 进行打包呢。

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {
    index: './src/index.js',
    login: './src/login.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:6].js',
  },
  //...
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html', //打包后的文件名
    }),
    new HtmlWebpackPlugin({
      template: './public/login.html',
      filename: 'login.html', //打包后的文件名
    }),
  ],
}
```

如果需要配置多个 `HtmlWebpackPlugin`，那么 `filename` 字段不可缺省，否则默认生成的都是 `index.html`。

但是有个问题，`index.html` 和 `login.html` 会发现，都同时引入了 `index.f7d21a.js` 和 `login.f7d21a.js`，通常这不是我们想要的，我们希望 `index.html` 中只引入 `index.f7d21a.js`，`login.html` 只引入 `login.f7d21a.js`。

`HtmlWebpackPlugin` 提供了一个 `chunks` 的参数，可以接受一个数组，配置此参数仅会将数组中指定的 js 引入到 html 文件中

```js
module.exports = {
  //...
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html', //打包后的文件名
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      template: './public/login.html',
      filename: 'login.html', //打包后的文件名
      chunks: ['login'],
    }),
  ],
}
```

这样执行 npm run build，可以看到 index.html 中仅引入了 index 的 js 文件，而 login.html 中也仅引入了 login 的 js 文件。

## clean-webpack-plugin

clean-webpack-plugin 用于在打包前清理上一次项目生成的 bundle 文件，它会根据 output.path 自动清理文件夹；这个插件在生产环境用的频率非常高，因为生产环境经常会通过 hash 生成很多 bundle 文件，如果不进行清理的话每次都会生成新的，导致文件夹非常庞大。

```js
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

plugins: [
  new HtmlWebpackPlugin({
    template: path.join(__dirname, '/index.html'),
  }),
  new CleanWebpackPlugin(), // 所要清理的文件夹名称
]
```

## extract-text-webpack-plugin

将 css 成生文件，而非内联 。该插件的主要是为了抽离 css 样式,防止将样式打包在 js 中引起页面样式加载错乱的现象

```js
const ExtractTextPlugin = require('extract-text-webpack-plugin')

plugins: [
  // 将css分离到/dist文件夹下的css文件夹中的index.css
  new ExtractTextPlugin('css/index.css'),
]
```

## mini-css-extract-plugin

将 CSS 提取为独立的文件的插件，对每个包含 css 的 js 文件都会创建一个 CSS 文件，支持按需加载 css 和 sourceMap。只能用在 webpack4 中，对比另一个插件 extract-text-webpack-plugin 有以下特点:

- 异步加载
- 不重复编译，性能更好
- 更容易使用
- 只针对 CSS

这个插件应该只用在生产环境配置，并且在 loaders 链中不使用 style-loader, 而且这个插件暂时不支持 HMR

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.(le|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[id].[contenthash:8].css',
    }),
  ],
}
```

## purifycss-webpack

有时候我们 css 写得多了或者重复了，这就造成了多余的代码，我们希望在生产环境进行去除。

```js
const path = require('path')
const PurifyCssWebpack = require('purifycss-webpack') // 引入PurifyCssWebpack插件
const glob = require('glob') // 引入glob模块,用于扫描全部html文件中所引用的css

module.exports = merge(common, {
  plugins: [
    new PurifyCssWebpack({
      paths: glob.sync(path.join(__dirname, 'src/*.html')),
    }),
  ],
})
```

## optimize-css-assets-webpack-plugin

我们希望减小 css 打包后的体积，可以用到 optimize-css-assets-webpack-plugin。

```js
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin") // 压缩css代码

optimization: {
  minimizer: [
    // 压缩css
    new OptimizeCSSAssetsPlugin({})
  ]
```

## UglifyJsPlugin

uglifyJsPlugin 是 vue-cli 默认使用的压缩代码方式，用来对 js 文件进行压缩，从而减小 js 文件的大小，加速 load 速度。它使用的是单线程压缩代码，打包时间较慢，所以可以在开发环境将其关闭，生产环境部署时再把它打开。

```js
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

plugins: [
  new UglifyJsPlugin({
    uglifyOptions: {
      compress: {
        warnings: false
      }
    },
    sourceMap: true,  //是否启用文件缓存
    parallel: true   //使用多进程并行运行来提高构建速度
  })
```

## ParallelUglifyPlugin

开启多个子进程，把对多个文件压缩的工作分别给多个子进程去完成，每个子进程其实还是通过 UglifyJS 去压缩代码，但是变成了并行执行。

```js
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')

plugins: [
  new ParallelUglifyPlugin({
    //cacheDir 用于配置缓存存放的目录路径。
    cacheDir: '.cache/',
    sourceMap: true,
    uglifyJS: {
      output: {
        comments: false,
      },
      compress: {
        warnings: false,
      },
    },
  }),
]
```

## terser-webpack-plugin

Webpack4.0 默认是使用 terser-webpack-plugin 这个压缩插件，在此之前是使用 uglifyjs-webpack-plugin，两者的区别是后者对 ES6 的压缩不是很好，同时我们可以开启 parallel 参数，使用多进程压缩，加快压缩。

```js
const TerserPlugin = require('terser-webpack-plugin') // 压缩js代码

optimization: {
  minimizer: [
    new TerserPlugin({
      parallel: 4, // 开启几个进程来处理压缩，默认是 os.cpus().length - 1
      cache: true, // 是否缓存
      sourceMap: false,
    }),
  ]
}
```

## NoErrorsPlugin

报错但不退出 webpack 进程。编译出现错误时，使用 NoEmitOnErrorsPlugin 来跳过输出阶段。这样可以确保输出资源不会包含错误。

```js
plugins: [new webpack.NoEmitOnErrorsPlugin()]
```

## compression-webpack-plugin

所有现代浏览器都支持 gzip 压缩，启用 gzip 压缩可大幅缩减传输资源大小，从而缩短资源下载时间，减少首次白屏时间，提升用户体验。

gzip 对基于文本格式文件的压缩效果最好（如：CSS、JavaScript 和 HTML），在压缩较大文件时往往可实现高达 70-90% 的压缩率，对已经压缩过的资源（如：图片）进行 gzip 压缩处理，效果很不好。

```js
const CompressionPlugin = require('compression-webpack-plugin')

plugins: [
  new CompressionPlugin({
    // gzip压缩配置
    test: /\.js$|\.html$|\.css/, // 匹配文件名
    threshold: 10240, // 对超过10kb的数据进行压缩
    deleteOriginalAssets: false, // 是否删除原文件
  }),
]
```

当然，这个方法还需要后端配置支持。

## DefinePlugin

我们可以通过 `DefinePlugin` 可以定义一些全局的变量，我们可以在模块当中直接使用这些变量，无需作任何声明，`DefinePlugin` 是 `webpack` 自带的插件。

```js
plugins: [
  new webpack.DefinePlugin({
    DESCRIPTION: 'This Is The Test Text.',
  }),
]

// 直接引用
console.log(DESCRIPTION)
```

## ProvidePlugin

自动加载模块。 任何时候，当 identifier 被当作未赋值的变量时， module 就会自动被加载，并且 identifier 会被这个 module 输出的内容所赋值。这是 webpack 自带的插件。

```js
module.exports = {
  resolve: {
    alias: {
      jquery: './lib/jquery',
    },
  },
  plugins: [
    //提供全局的变量，在模块中使用无需用require引入
    new webpack.ProvidePlugin({
      $: 'jquery',
      React: 'react',
    }),
  ],
}
```

## DLLPlugin

这是在一个额外的独立的 webpack 设置中创建一个只有 dll 的 `bundle(dll-only-bundle)`。 这个插件会生成一个名为 manifest.json 的文件，这个文件是用来让 `DLLReferencePlugin` 映射到相关的依赖上去的。

**使用步骤如下**

1、在 build 下创建 `webpack.dll.config.js`

```js
const path = require('path')
const webpack = require('webpack')
module.exports = {
  entry: {
    vendor: [
      'vue-router',
      'vuex',
      'vue/dist/vue.common.js',
      'vue/dist/vue.js',
      'vue-loader/lib/component-normalizer.js',
      'vue',
      'axios',
      'echarts',
    ],
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].dll.js',
    library: '[name]_library',
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve('./dist', '[name]-manifest.json'),
      name: '[name]_library',
    }),
    // 建议加上代码压缩插件，否则dll包会比较大。
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
}
```

2、在 `webpack.prod.conf.js` 的 plugin 后面加入配置

```js
new webpack.DllReferencePlugin({
  manifest: require('../dist/vendor-manifest.json'),
})
```

3、`package.json`文件中添加快捷命令`(build:dll)`

```js
  "scripts": {
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    "start": "npm run dev",
    "lint": "eslint --ext .js,.vue src",
    "build": "node build/build.js",
    "build:dll": "webpack --config build/webpack.dll.conf.js"
  }
```

生产环境打包的时候先`npm run build:dll`命令会在打包目录下生成 `vendor-manifest.json` 文件与 vendor.dll.js 文件。然后`npm run build`生产其他文件。

4、根目录下的入口 `index.html` 加入引用

```html
<script type="text/javascript" src="./vendor.dll.js"></script>
```

## HappyPack

`HappyPack` 能让 webpack 把任务分解给多个子进程去并发的执行，子进程处理完后再把结果发送给主进程。要注意的是 `HappyPack` 对 `file-loader`、`url-loader` 支持的不友好，所以不建议对该 loader 使用。

1、HappyPack 插件安装

```
npm i -D happypack
```

2、`webpack.base.conf.js` 文件对 module.rules 进行配置

```javascript
module: {
  rules: [
    {
      test: /\.js$/,
      use: ['happypack/loader?id=babel'],
      include: [resolve('src'), resolve('test')],
      exclude: path.resolve(__dirname, 'node_modules'),
    },
    {
      test: /\.vue$/,
      use: ['happypack/loader?id=vue'],
    },
  ]
}
```

3、在生产环境 `webpack.prod.conf.js` 文件进行配置

```javascript
const HappyPack = require('happypack')
// 构造出共享进程池，在进程池中包含5个子进程
const HappyPackThreadPool = HappyPack.ThreadPool({ size: 5 })
plugins: [
  new HappyPack({
    // 用唯一的标识符id，来代表当前的HappyPack是用来处理一类特定的文件
    id: 'babel',
    // 如何处理.js文件，用法和Loader配置中一样
    loaders: ['babel-loader?cacheDirectory'],
    threadPool: HappyPackThreadPool,
  }),
  new HappyPack({
    id: 'vue', // 用唯一的标识符id，来代表当前的HappyPack是用来处理一类特定的文件
    loaders: [
      {
        loader: 'vue-loader',
        options: vueLoaderConfig,
      },
    ],
    threadPool: HappyPackThreadPool,
  }),
]
```

**注意，当项目较小时，多线程打包反而会使打包速度变慢。**

## copy-webpack-plugin

我们在 public/index.html 中引入了静态资源，但是打包的时候 webpack 并不会帮我们拷贝到 dist 目录，因此 copy-webpack-plugin 就可以很好地帮我做拷贝的工作了。

```js
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public/js/*.js',
          to: path.resolve(__dirname, 'dist', 'js'),
          flatten: true,
        },
      ],
    }),
  ],
}
```

### 开发一个插件

举个例子

```js
// 1、BasicPlugin.js 文件（独立模块）
// 2、模块对外暴露的 js 函数
class BasicPlugin {
  //在构造函数中获取用户为该插件传入的配置
  constructor(pluginOptions) {
    this.options = pluginOptions
  }
  //3、原型定义一个 apply 函数，并注入了 compiler 对象
  apply(compiler) {
    //4、挂载 webpack 事件钩子（这里挂载的是 emit 事件）
    compiler.plugin('emit', function (compilation, callback) {
      // ... 内部进行自定义的编译操作
      // 5、操作 compilation 对象的内部数据
      console.log(compilation)
      // 6、执行 callback 回调
      callback()
    })
  }
}
// 7、暴露 js 函数
module.exports = BasicPlugin
```
