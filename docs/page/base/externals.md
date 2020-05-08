# externals

用 webpack 打包项目的时候，如果项目体量比较大，往往打出来的包 vender.js 会很大，导致首屏加载慢，这时候用 webpack 提供的 externals 属性，像 vue.js 、vuex.js 、vue-router.js 这些外部库，基本不会变的，如果将它们独立出来单独加载就能利于浏览器的缓存机制，不用每次都重新加载这些库 js，并且大大的减少了打包的 vendor.js 文件

我们来看看官网解释：

> webpack 中的 externals 配置提供了不从 bundle 中引用依赖的方式。解决的是，所创建的 bundle 依赖于那些存在于用户环境(consumer environment)中的依赖。

意思是如果需要引用一个库，但是又不想让 webpack 打包（减少打包的时间），并且又不影响我们在程序中以 CMD、AMD 或者 window/global 全局等方式进行使用（一般都以 import 方式引用使用），那就可以通过配置 externals。

这样做的目的就是将不怎么需要更新的第三方库脱离 webpack 打包，不被打入 bundle 中，从而减少打包时间，但又不影响运用第三方库的方式，例如 import 方式等。

### 使用方法

1、 引入 cdn 资源

```html
<script src="https://cdn.bootcss.com/vue/2.6.10/vue.min.js"></script>
<script src="https://cdn.bootcss.com/vue-router/3.0.6/vue-router.min.js"></script>
```

2、配置 webpack

```js
module.exports = {
  output: {},
  externals: {
    vue: 'Vue',
    'vue-router': 'VueRouter',
  },
}
```

3、在应用程序中依旧可以以 import 的方式

```js
import Vue from 'vue'
import VueRouter from 'vue-router'
```

### 不同环境设置externals方式
1. 如果你的代码想运行在Node环境中，那么你需要在external中添加前缀commonjs2或者commonjs
```js
externals:{
  react:'commonjs2 react',
  jquery:'commonjs2 jquery'
}
```

2. 如果需要requirejs等符合AMD规范的环境中加载，那就要添加amd
```js
externals:{
  react:'amd React',
  jquery:'amd jQuery'
}
```

3. 如果要在浏览器中运行，那么不用添加什么前缀，默认设置就是global。
```js
externals:{
  react:'React',
  jquery:'jQuery'
}
```


### 小结
1. 使用CDN引用链接，一般我们使用的是 umd 构建版本，它会兼容 commonjs、commonjs2、amd、window 等方案，在我们的浏览器环境中，它会绑定一个 React 变量到 window 上。externals 的作用在于：当 webpack 进行构建时，碰到 `import Vue from 'vue'` 与 `import VueRouter from 'vue-router'` 导入语句时会避开 node_modules 而去 externals 配置的映射上去找，而这个映射值（ Vue 与 VueRouter ）正是在 window 变量上找到的。


2. CDN引入的方式打包出来的vender.js体积会变小，减少的部分就是静态资源的大小。不过使用externals属性要注意的是，虽然可以优化首屏加载速度，但是由于静态资源分离，也会增加http请求数量。所以如果是小项目，最好就不要用externals属性，因为小项目打包的出来的vender.js体积不大，建议项目体量较大的项目再用比较合适。
