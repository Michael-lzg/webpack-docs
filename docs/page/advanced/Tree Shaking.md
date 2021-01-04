# Tree Shaking 配置机制

tree-shaking 简称摇树。它的作用是能够在模块的层面上做到打包后的代码只包含被引用并被执行的模块，而不被引用或不被执行的模块被删除掉，以起到减包的效果。

tree-shaking 的目的，就是通过减少 web 项目中 JavaScript 的无用代码，以达到减少用户打开页面所需的等待时间，来增强用户体验。

新的 webpack 4 正式版本，扩展了这个检测能力，通过 `package.json` 的 `"sideEffects"` 属性作为标记，向 compiler 提供提示，表明项目中的哪些文件是 "pure(纯的 ES2015 模块)"，由此可以安全地删除文件中未使用的部分。

我们先来举个例子

1、新建 math.js 文件，暴露两个方法

```js
export const add = (a, b) => {
  console.log(a + b)
}

export const minus = (a, b) => {
  console.log(a - b)
}
```

2、在 index.js 中使用 add 方法：

```js
import { add } from './math.js'

add(1, 2)
```

3、执行 npm run build 打包。虽然我们没有使用 math.js 下的 minus 方法，我们打开打包出来的 js 文件还是包含了 minus 方法。这显然不是我们想要的。

### Tree Shaking

我们修改一下 webpack.prod.js 配置文件

```js
module.exports = merge(common, {
  mode: 'production',
  optimization: {
    usedExports: true,
  },
})
```

同时我们需要在 package.json 下加上 sideEffects 配置：

```js
"sideEffects": false, // 对所有的文件都启用 tree_shaking
```

此时我们再打包一次，我们会发现 minus 这个方法也被去掉了。

需要注意的是，如果是开发环境，webpack 默认不会删除我们的代码，而是会加上几行注释，如果删除的话，可能会影响我们开发时定位错误。

### sideEffects

sideEffects 是指 tree_shaking 对哪些文件有用，像我们上面的例子，因为需要对所有的文件都启用 tree_shaking，所以我们可以设置为 false。

如果我们要针对某些文件做处理，则需要特殊配置，如

```js
"sideEffects": [
    "*.less",
    "*.css",
    "*.vue"
  ]
```

使用 Tree Shaking 的条件

- 使用 ES2015 模块语法（即 import 和 export）。
- 在项目 package.json 文件中，添加一个 "sideEffects" 入口。
- 引入一个能够删除未引用代码(dead code)的压缩工具(minifier)（例如 UglifyJSPlugin）。
