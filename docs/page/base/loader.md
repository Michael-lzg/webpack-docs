# Loader

`loader` 让 `webpack` 能够去处理那些非 `javaScript` 文件（`webpack` 自身只理解 `javaScript`）。`loader` 可以将所有类型的文件转换为 `webpack` 能够处理的有效模块，然后你就可以利用 `webpack` 的打包能力，对它们进行处理。

### loader 的特点

1. 一个 Loader 的职责是单一的，只需要完成一种转换。

2. 一个 Loader 其实就是一个 Node.js 模块，这个模块需要导出一个函数
```js
module.exports = function (content) {
  return content && content.replace(/kobe/gi, 'Black Mamba')
}
```

3.  loader 总是从右到左地被调用。

函数组合通常有两种方式，一种是从左到右(类似 unix 的 pipe)，另外一种是从右到左(compose)。webpack 选择的是 compose 方式，从右到左依次执行 loader，每个 loader 是一个函数。

webpack 里面的 compose 代码如下：

```js
const compose = (...fns) => {
  return fns.reduce(
    (prevFn, nextFn) => {
      return value => nextFn(prevFn(value))
    },
    value => value
  )
}
```

### loader 的配置

在配置文件中加入 module 这个配置项，它是一个对象，在这个对象里面配置相应的处理模块的规则。

在 module 的选项里 有一个 rules 数组，rules 就是配置模块的读取和解析规则，通常就是用来配置 loader。数组里面的每一项都描述了如何处理对应的文件，配置一项 rules 时大致可以通过一项方式来完成：

```js
// 方法一
{
  test: /\.jsx?$/, //匹配规则
  use: 'babel-loader'
  // use: ['style-loader', 'css-loader'] 多个loader
}

// 方法二
{
  test: /\.jsx?$/,
  loader: 'babel-loader',
  options: {
      //...
  }
}

```

### 常用的 loader

#### 处理样式

- `css-loader`: 加载.css 文件，
- `style-loader`:使用 style 标签将 `css-loader` 内部样式注入到我们的 html 页面
- `less-loader, sass-loader`: 解析 css 预处理器
- `postcss-loader` css 增加前缀

```js
rules: [
  {
    test: /\.css$/, // 正则匹配以.css结尾的文件
    use: ['style-loader', 'css-loader', 'postcss-loader'],
  },
  {
    test: /\.less$/,
    use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
  },
]
```

- `style-loader` 放在 `css-loader` 后面是因为 webpack 打包机制是按照数组从后往前的顺序将资源交个 loader 处理。
- `postcss-loade`r 要和`autoprefixer`一起使用。在项目根目录下新建 postcss.config.js 文件:

```js
module.exports = {
  plugins: [
    require('autoprefixer'), // 引用autoprefixer模块
  ],
}
```

#### 处理 js

- 让你能使用最新的 js 代码（ES6，ES7...）
- 让你能使用基于 js 进行了拓展的语言，比如 React 的 JSX；

```js
rules: [
  {
    test: /\.js$/,
    exclude: '/node_modules/',
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        presets: [['env', { modules: false }]],
      },
    },
  },
]
```

- `exclude`，排除了目录 `node_modules`，可不编译 `node_modules` 目录中的模块，提高打包速度；
- `babel-loader`，转译 ES6+;
- `@babel/core`，babel 编译器核心模块；
- `@babel/preset-env`，预置器，根据用户配置的目标环境自动添加需要的插件和补丁来编译 ES6+；
- `cacheDirectory`，缓存机制，这里设为 true，在重复打包未改变的模块时防止二次编译，提高打包速度，指向 `node_modules/.cache/babel-loader`；
- `presets` 的 modules 设置为 false，意思是禁止让 `@babel/preset-env` 将模块语句转换，让 `ES6 Module` 语法给 webpack 处理，若是为 true，会将 `ES6 Module` 模块转化为 `CommonJS` 形式，这将会导致 `tree-shaking` 特性失效；

此外，babel-loader 还有如下优化写法：在项目根目录下新建.babelrc 文件

```js
{
  "presets": ["env", "react"]
}

```

#### 处理文件

处理图片资源时，我们常用的两种 loader 是`file-loader`或者`url-loader`，两者的主要差异在于。`url-loader`可以设置图片大小限制，当图片超过限制时，其表现行为等同于`file-loader`，而当图片不超过限制时，则会将图片以`base64`的形式打包进 css 文件，以减少请求次数

```js
{
  test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
  loader: 'url-loader',
  options: {
    limit: 10000,
    name: utils.assetsPath('img/[name].[hash:7].[ext]')
  }
}
```

#### 压缩图片

在项目中有些图片太大影响加载，我们用 image-webpack-loader 进行压缩。

```js
rules: [
  {
    test: /\.(png|jpg|svg|gif)$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          esModule: false,
          limit: 1000, // 限制只有小于1kb的图片才转为base64，例子图片为1.47kb,所以不会被转化
          outputPath: 'images', // 设置打包后图片存放的文件夹名称
          name: '[name][hash:8].[ext]',
        },
      },
      {
        loader: 'image-webpack-loader',
        options: {
          // 压缩 jpeg 的配置
          mozjpeg: {
            progressive: true,
            quality: 65,
          },
          // 使用 imagemin**-optipng 压缩 png，enable: false 为关闭
          optipng: {
            enabled: false,
          },
          // // 使用 imagemin-pngquant 压缩 png
          pngquant: {
            quality: [0.65, 0.9],
            speed: 4,
          },
          // 压缩 gif 的配置
          gifsicle: {
            interlaced: false,
          },
          // 开启 webp，会把 jpg 和 png 图片压缩为 webp 格式
          webp: {
            quality: 75,
          }
        }
      }
    ]
  }
]
```

#### 处理.vue 文件

`vue-loader` 是 `webpack` 的加载器模块，它使我们可以用 `.vue` 文件格式编写单文件组件。单文件组件文件有三个部分，即模板、脚本和样式。 `vue-loader` 模块允许 `webpack` 使用单独的加载器模块（例如 `sass 或 scss 加载器`）提取和处理每个部分。该设置使我们可以使用 `.vue` 文件无缝编写程序。

```js
{
  test: /\.vue$/,
  loader: 'vue-loader',
  options: vueLoaderConfig
}
```

### 开发一个 loader

需求：手写一个 `loader`，将 `'kobe'` 转换成 `'Black Mamba'`。当然大家可以根据自己的需求进行设计。这里只是讲解方法。

#### 1、编写 loader

在根目录下，新建目录 `kobe-loader` 作为我们编写 `loader` 的名称，执行 `npm init -y` 命令，新建一个模块化项目，然后新建 `index.js` 文件，相关源码如下：

```js
module.exports = function (content) {
  return content && content.replace(/kobe/gi, 'Black Mamba')
}
```

#### 2、注册模块

正常我们安装的 `loader` 是从 `npm` 下载安装，但是我们可以在 `kobe-loader` 目录底下使用 `npm link` 做到在不发布模块的情况下，将本地的一个正在开发的模块的源码链接到项目的 `node_modules` 目录下，让项目可以直接使用本地的 `npm` 模块。

```
npm link
```

然后在项目根目录执行以下命令，将注册到全局的本地 `npm` 模块链接到项目的 `node_modules` 下

```
$ npm link kobe-loader
```

注册成功后，我们可以在 `node_modules` 目录下能查找到对应的 `loader`。

#### 3、在 webpack 中配置 loader

在 `webpack.base.conf.js` 加上如下配置

```js
{
  test:/\.js/,
  loader: 'kobe-loader'
}
```

此时，我们在所有 js 文件下书写的 `'kobe'` 就全部替换成 `'Black Mamba'`了。

#### 4、配置参数

上面我们是写死的替换文案，假如我想通过配置项来改变，可以在 loader 中做以下调整

```js
// custom-loader/index.js
var utils = require('loader-utils')
module.exports = function (content) {
  const options = utils.getOptions(this)
  return content && content.replace(/kobe/gi, options.name)
}

// webpack.base.conf.js
{
  test:/\.js/,
  use: {
    loader: 'kobe-loader',
    options: {
      name: 'kobe',
    }
  }
}
```