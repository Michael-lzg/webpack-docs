# babel 指南

### 什么是 Babel？

Babel 是一个工具链，主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。下面列出的是 Babel 能为你做的事情：

- 语法转换
- 通过 Polyfill 方式在目标环境中添加缺失的特性 (通过 @babel/polyfill 模块)
- 源码转换 (codemods)

### Babel 的基本原理

Babel 的核心就是 AST (抽象语法树)。首先将源码转成抽象语法树，然后对语法树进行处理生成新的语法树，最后将新语法树生成新的 JS 代码，整个编译过程可以分为 3 个阶段 parsing (解析)、transforming (转换)、generating (生成)，都是在围绕着 AST 去做文章。

**解析**
将代码解析成抽象语法树（AST），每个 js 引擎（比如 Chrome 浏览器中的 V8 引擎）都有自己的 AST 解析器，而 Babel 是通过 Babylon 实现的。在解析过程中有两个阶段：词法分析和语法分析，词法分析阶段把字符串形式的代码转换为令牌（tokens）流，令牌类似于 AST 中节点；而语法分析阶段则会把一个令牌流转换成 AST 的形式，同时这个阶段会把令牌中的信息转换成 AST 的表述结构。

**转换**
在这个阶段，Babel 接受得到 AST 并通过 babel-traverse 对其进行深度优先遍历，在此过程中对节点进行添加、更新及移除操作。这部分也是 Babel 插件介入工作的部分。

**生成**
将经过转换的 AST 通过 babel-generator 再转换成 js 代码，过程就是深度优先遍历整个 AST，然后构建可以表示转换后代码的字符串。

Babel 只负责编译新标准引入的新语法，比如 Arrow function、Class、ES Modul 等，它不会编译原生对象新引入的方法和 API，比如 Array.includes，Map，Set 等，这些需要通过 Polyfill 来解决，

### 抽象语法树（AST）

代码解析成 AST 的目的就是方便计算机更好地理解我们的代码。这里我们先写一段代码：

```js
function add(x, y) {
  return x + y
}

add(1, 2)
```

然后将代码解析成抽象语法树，表示成 JSON 形式如下：

```js
{
  "type": "Program",
  "start": 0,
  "end": 52,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 40,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "add"
      },
      "expression": false,
      "generator": false,
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "name": "x"
        },
        {
          "type": "Identifier",
          "start": 16,
          "end": 17,
          "name": "y"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 19,
        "end": 40,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 25,
            "end": 38,
            "argument": {
              "type": "BinaryExpression",
              "start": 32,
              "end": 37,
              "left": {
                "type": "Identifier",
                "start": 32,
                "end": 33,
                "name": "x"
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 36,
                "end": 37,
                "name": "y"
              }
            }
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 42,
      "end": 52,
      "expression": {
        "type": "CallExpression",
        "start": 42,
        "end": 51,
        "callee": {
          "type": "Identifier",
          "start": 42,
          "end": 45,
          "name": "add"
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 46,
            "end": 47,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 49,
            "end": 50,
            "value": 2,
            "raw": "2"
          }
        ]
      }
    }
  ],
  "sourceType": "module"
}
```

### babel 各个模块介绍

#### babel-core

Babel 的核心功能包含在 @babel/core 模块中。看到 core 这个词了吧，意味着核心，没有它，在 babel 的世界里注定寸步难行。不安装 @babel/core，无法使用 babel 进行编译。

#### @babel/cli 和 @babel/node

@babel/cli 是 Babel 提供的内建命令行工具。提到 @babel/cli 这里就不得不提一下 @babel/node ，这哥俩虽然都是命令行工具，但是使用场景不同，babel/cli 是安装在项目中，而 @babel/node 是全局安装。

#### polyfill

polyfill 在代码中的作用主要是用已经存在的语法和 api 实现一些浏览器还没有实现的 api，对浏览器的一些缺陷做一些修补。babel 为什么存在 polyfill。因为 babel 的转译只是语法层次的转译，例如箭头函数、解构赋值、class，对一些新增 api 以及全局函数（例如：Promise）无法进行转译，这个时候就需要在代码中引入 babel-polyfill，让代码完美支持 ES6+环境。

#### @babel/parser

负责将代码解析为抽象语法树

#### @babel/traverse

遍历抽象语法树的工具，我们可以在语法树中解析特定的节点，然后做一些操作

### Babel 的配置文件

最常用的方法是在你的项目中创建名为 .babelrc 的文件

```js
{
 "presets": [...],
 "plugins": [...]
}
```

#### package.json

可以将 .babelrc 中的配置信息作为 babel 键(key) 添加到 package.json 文件中:

```js
{ 
  "babel": {        
    "presets": [],        
    "plugins": []    
  }
}
```

#### .babelrc.js

与 .babelrc 配置相同，但是可以使用 JS 编写。

```js
const presets = []
const plugins = []
module.exports = { presets, plugins }
```

#### babel.config.js

在项目根目录下创建一个名为 babel.config.js 的文件。

```js
module.exports = 
  function(api) {    
    api.cache(true);    
    const presets = [...];    
    const plugins = [...];    
    return {        
      presets,        
      plugins    
    }
  } 
```

### plugins

plugins 是 babel 中的插件，通过配置不同的插件才能告诉 babel，我们的代码中有哪些是需要转译的。插件的执行顺序是从左往右执行。

Babel 默认只转换新的 javascript 语法，而不转换新的 API，比如 Iterator, Generator, Set, Maps, Proxy, Reflect,Symbol,Promise 等全局对象。以及一些在全局对象上的方法(比如 Object.assign)都不会转码。
比如说，ES6 在 Array 对象上新增了 Array.form 方法，Babel 就不会转码这个方法，如果想让这个方法运行，必须使用 babel-polyfill 来转换等。

因此：babel-polyfill 和 babel-runtime 就是为了解决新的 API 与这种全局对象或全局对象方法不足的问题，因此可以使用这两个插件可以转换的。

- babel-polyfill 的原理是当运行环境中并同有实现的一些方法，babel-polyfill 会做兼容。它通过向全局对象和内置对象的 prototype 上添加方法秋实现的。
- babel-runtime 它是将 es6 编译成 es5 去执行。它不会污染全局对象和内置对象的原型，需要手动 imprt，但会有很多冗余。
- babel-plugin-transform-runtime 可以避免手动 import 的痛苦， 并且它还做了公用方法的抽离。

```js
{
  "plugins": [
    "transform-es2015-arrow-functions", //转译箭头函数
    "transform-es2015-classes", //转译class语法
    "transform-es2015-spread", //转译数组解构
    "transform-es2015-for-of" //转译for-of
  ]
}
//如果要为某个插件添加配置项，按如下写法：
{
  "plugins":[
    //改为数组，第二个元素为配置项
    ["transform-es2015-arrow-functions", { "spec": true }]
  ]
}
```

### presets

显然这样一个个配置插件会非常的麻烦，为了方便，babel 为我们提供了一个配置项叫做 persets（预设）。预设就是一系列插件的集合，就好像修图一样，把上次修图的一些参数保存为一个预设，下次就能直接使用。 前面提到插件的执行顺序是从左往右，而预设的执行顺序恰好反其道行之，它是从右往左。

```js
{
  "plugins": [
    "check-es2015-constants",
    "es2015-arrow-functions",
    "es2015-block-scoped-functions",
  ]
}
```

Babel 团队为了方便，将同属 ES2015 几十个 Transform Plugins 集合到 babel-preset-es2015 一个 Preset 中，这样我们只需要在.babelrc 的 presets 加入 es2015 一个配置就可以完成全部 es2015 语法的支持了。

于是 babel-preset-env 出现了， 它的功能类似于 babel-preset-latest， 它会根据目标环境不支持的新特性来转译。在.babelrc 配置文件中，可以如下简单的配置：

```js
{
  "presets": ['env']
}
```

#### 浏览器

支持每个浏览器最后两个版本和 safari 大于等于 7 版本所需的 polyfill 代码转换

```js
{
  'presets': [
    ['env', {
      'target': {
        'browsers': ['last 2 versions', 'safari >= 7']
      }
    }]
  ]
}
```

支持市场份额超过 5%的浏览器

```js
{
  'presets': [
    ['env', {
      'target': {
        'browsers': '> 5%'
      }
    }]
  ]
}
```

指定浏览器版本

```js
{
  'presets': [
    ['env', {
      'target': {
        'chrome': 56
      }
    }]
  ]
}
```

### 参考文献
[import、require、export、module.exports 混合使用详解](https://juejin.im/post/6844903520865386510)
