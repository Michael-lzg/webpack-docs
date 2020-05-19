# webpack 插件原理

插件基本结构:

插件是可以用自身原型方法 apply 来实例化的对象。apply 只在安装插件被 Webpack compiler 执行一次。apply 方法传入一个 webpck compiler 的引用，来访问编译器回调。

```js
class HelloPlugin {
  // 在构造函数中获取用户给该插件传入的配置
  constructor(options) {}
  // Webpack 会调用 HelloPlugin 实例的 apply 方法给插件实例传入 compiler 对象
  apply(compiler) {
    // 在emit阶段插入钩子函数，用于特定时机处理额外的逻辑；
    compiler.hooks.emit.tap('HelloPlugin', (compilation) => {
      // 在功能流程完成后可以调用 webpack 提供的回调函数；
    })
    // 如果事件是异步的，会带两个参数，第二个参数为回调函数，
    // 在插件处理完任务时需要调用回调函数通知webpack，才会进入下一个处理流程。
    compiler.plugin('emit', function (compilation, callback) {
      // 支持处理逻辑
      // 处理完毕后执行 callback 以通知 Webpack
      // 如果不执行 callback，运行流程将会一直卡在这不往下执行
      callback()
    })
  }
}

module.exports = HelloPlugin
```

1. 读取配置的过程中会先执行 new HelloPlugin(options) 初始化一个 HelloPlugin 获得其实例。
2. 初始化 compiler 对象后调用 HelloPlugin.apply(compiler) 给插件实例传入 compiler 对象。
3. 插件实例在获取到 compiler 对象后，就可以通过 compiler.plugin(事件名称, 回调函数) 监听到 Webpack 广播出来的事件。 并且可以通过 compiler 对象去操作 Webpack。

### 事件流机制

webpack 本质上是一种事件流的机制，它的工作流程就是将各个插件串联起来，而实现这一切的核心就是 Tapable。

Webpack 的 Tapable 事件流机制保证了插件的有序性，将各个插件串联起来， Webpack 在运行过程中会广播事件，插件只需要监听它所关心的事件，就能加入到这条 webapck 机制中，去改变 webapck 的运作，使得整个系统扩展性良好。

Tapable 也是一个小型的 library，是 Webpack 的一个核心工具。类似于 node 中的 events 库，核心原理就是一个`订阅发布模式`。作用是提供类似的插件接口。

webpack 中最核心的负责编译的 Compiler 和负责创建 bundles 的 Compilation 都是 Tapable 的实例，可以直接在 Compiler 和 Compilation 对象上广播和监听事件，方法如下：

```js
//  广播事件

compiler.apply('event-name', params)
compilation.apply('event-name', params)

// 监听事件
compiler.plugin('event-name', function (params) {})
compilation.plugin('event-name', function (params) {})
```

我们来看下 Tapable

```js
function Tapable() {
  this._plugins = {}
}
//发布name消息
Tapable.prototype.applyPlugins = function applyPlugins(name) {
  if (!this._plugins[name]) return
  var args = Array.prototype.slice.call(arguments, 1)
  var plugins = this._plugins[name]
  for (var i = 0; i < plugins.length; i++) {
    plugins[i].apply(this, args)
  }
}
// fn订阅name消息
Tapable.prototype.plugin = function plugin(name, fn) {
  if (!this._plugins[name]) {
    this._plugins[name] = [fn]
  } else {
    this._plugins[name].push(fn)
  }
}
//给定一个插件数组，对其中的每一个插件调用插件自身的apply方法注册插件
Tapable.prototype.apply = function apply() {
  for (var i = 0; i < arguments.length; i++) {
    arguments[i].apply(this)
  }
}
```

### Compiler 对象 （负责编译）
Compiler 对象包含了当前运行Webpack的配置，包括entry、output、loaders等配置，这个对象在启动Webpack时被实例化，而且是全局唯一的。Plugin可以通过该对象获取到Webpack的配置信息进行处理。

### Compilation对象
Compilation对象代表了一次资源版本构建。当运行 webpack 开发环境中间件时，每当检测到一个文件变化，就会创建一个新的 compilation，从而生成一组新的编译资源。一个 Compilation 对象表现了当前的模块资源、编译生成资源、变化的文件、以及被跟踪依赖的状态信息，简单来讲就是把本次打包编译的内容存到内存里。Compilation 对象也提供了插件需要自定义功能的回调，以供插件做自定义处理时选择使用拓展。

简单来说，Compilation的职责就是构建模块和Chunk，并利用插件优化构建过程。

Compiler 代表了整个 Webpack 从启动到关闭的生命周期，而 Compilation 只是代表了一次新的编译，只要文件有改动，compilation就会被重新创建。

### 参考文献

[揭秘 webpack 插件工作流程和原理](https://mp.weixin.qq.com/s?__biz=MzI5MjUxNjA4Mw==&mid=2247487144&idx=1&sn=f2da0c02f779948da961988b60cfd9fc&chksm=ec017734db76fe22661ce3ca8993d7b7edb37a87d837f864a04f02fe45196bcfcf4050c21540&mpshare=1&scene=1&srcid=&sharer_sharetime=1589761607298&sharer_shareid=6ac1a929ca7b722baddb7852d6a9db2e#rd)  
[WebPack 插件机制探索](https://blog.didiyun.com/index.php/2019/03/01/webpack/)
[Webpack 揭秘——走向高阶前端的必经之路](https://juejin.im/post/5badd0c5e51d450e4437f07a)
