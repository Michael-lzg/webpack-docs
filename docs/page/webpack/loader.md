# 手写一个 loader

loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）。loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块，然后你就可以利用 webpack 的打包能力，对它们进行处理。

### loader 的特点

- 一个 Loader 的职责是单一的，只需要完成一种转换
- 一个 Loader 其实就是一个 Node.js 模块，这个模块需要导出一个函数
- loader 总是从右到左地被调用。

### 手写一个 loader

手写一个 loader 源码，将 'kobe' 转换成 'Black Mamba'。当然大家可以根据自己的需求进行设计。

#### 1、编写 loader

在根目录下，新建目录 kobe-loader 作为我们编写 loader 的名称，执行 npm init -y 命令，新建一个模块化项目，然后新建 index.js 文件，相关源码如下：

```js
module.exports = function(content) {
  return content && content.replace(/kobe/gi, 'Black Mamba')
}
```

#### 2、注册模块

正常我们安装的 ``loader`` 是从 ``npm`` 下载安装，但是我们可以在 ``kobe-loader`` 目录底下使用 ``npm link`` 做到在不发布模块的情况下，将本地的一个正在开发的模块的源码链接到项目的 ``node_modules`` 目录下，让项目可以直接使用本地的 ``npm`` 模块。
```
npm link
```

然后在项目根目录执行以下命令，将注册到全局的本地 ``npm`` 模块链接到项目的 ``node_modules`` 下

```
$ npm link kobe-loader
```

注册成功后，我们可以在 ``node_modules`` 目录下能查找到对应的 ``loader``。

#### 3、在 webpack 中配置 loader

在 ``webpack.base.conf.js`` 加上如下配置

```js
{
  test:/\.js/,
  loader: 'kobe-loader'
}
```

此时，我们在所有 js 文件下书写的 ``'kobe'`` 就全部替换成 ``'Black Mamba'``了。

#### 4、配置参数

现在我们是写死的替换文案，加入我想通过配置项来改变，可以在 loader 中做以下调整

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
    loader: 'custom-loader',
    options: {
      name: 'kobe',
    }
  }
}
```

### 手写一个 plugin

- Webpack 在编译过程中，会广播很多事件，例如 run、compile、done、fail 等等，可以查看官网；
- Webpack 的事件流机制应用了观察者模式，我们编写的插件可以监听 Webpack 事件来触发对应的处理逻辑；
- 插件中可以使用很多 Webpack 提供的 API，例如读取输出资源、代码块、模块及依赖等；

#### 1、编写插件

在根目录下，新建目录 my-plugin 作为我们编写插件的名称，执行 npm init -y 命令，新建一个模块化项目，然后新建 index.js 文件，相关源码如下：

```js
class MyPlugin {
  constructor(doneCallback, failCallback) {
    // 保存在创建插件实例时传入的回调函数
    this.doneCallback = doneCallback
    this.failCallback = failCallback
  }
  apply(compiler) {
    // 成功完成一次完整的编译和输出流程时，会触发 done 事件
    compiler.plugin('done', stats => {
      this.doneCallback(stats)
    })
    // 在编译和输出的流程中遇到异常时，会触发 failed 事件
    compiler.plugin('failed', err => {
      this.failCallback(err)
    })
  }
}
module.exports = MyPlugin
```

#### 2、注册模块

安装以上的方法，我们在 my-plugin 目录底下使用 npm link 做到在不发布模块的情况下，将本地的一个正在开发的模块的源码链接到项目的 node_modules 目录下，让项目可以直接使用本地的 npm 模块。

```
npm link
```

然后在项目根目录执行以下命令，将注册到全局的本地 npm 模块链接到项目的 node_modules 下

```
$ npm link my-plugin
```

注册成功后，我们可以在 node_modules 目录下能查找到对应的插件了。

#### 3、配置插件
在 webpack.base.conf.js 加上如下配置

```js
plugins: [
  new MyPlugin(
    stats => {
      console.info('编译成功!')
    },
    err => {
      console.error('编译失败!')
    }
  )
]
```
执行运行 or 编译命令，就能看到我们的 plugin 起作用了。
