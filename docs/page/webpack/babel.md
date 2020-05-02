# babel 指南

### 什么是 Babel？

Babel 是一个工具链，主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。下面列出的是 Babel 能为你做的事情：

* 语法转换
* 通过 Polyfill 方式在目标环境中添加缺失的特性 (通过 @babel/polyfill 模块)
* 源码转换 (codemods)

### Babel 的基本原理
Babel 的核心就是 AST (抽象语法树)。首先将源码转成抽象语法树，然后对语法树进行处理生成新的语法树，最后将新语法树生成新的 JS 代码，整个编译过程可以分为 3 个阶段 parsing (解析)、transforming (转换)、generating (生成)，都是在围绕着 AST 去做文章。  

**解析**
将代码解析成抽象语法树（AST），每个js引擎（比如Chrome浏览器中的V8引擎）都有自己的AST解析器，而Babel是通过Babylon实现的。在解析过程中有两个阶段：词法分析和语法分析，词法分析阶段把字符串形式的代码转换为令牌（tokens）流，令牌类似于AST中节点；而语法分析阶段则会把一个令牌流转换成 AST的形式，同时这个阶段会把令牌中的信息转换成AST的表述结构。


**转换**
在这个阶段，Babel接受得到AST并通过babel-traverse对其进行深度优先遍历，在此过程中对节点进行添加、更新及移除操作。这部分也是Babel插件介入工作的部分。


**生成**
将经过转换的AST通过babel-generator再转换成js代码，过程就是深度优先遍历整个AST，然后构建可以表示转换后代码的字符串。


Babel 只负责编译新标准引入的新语法，比如 Arrow function、Class、ES Modul 等，它不会编译原生对象新引入的方法和 API，比如 Array.includes，Map，Set 等，这些需要通过 Polyfill 来解决，

### 抽象语法树（AST）
代码解析成AST的目的就是方便计算机更好地理解我们的代码。这里我们先写一段代码：
```js
function add(x, y) {
    return x + y;
}

add(1, 2);
```
然后将代码解析成抽象语法树，表示成JSON形式如下：
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

### babel各个模块介绍
#### babel-core
Babel 的核心功能包含在 @babel/core 模块中。看到 core 这个词了吧，意味着核心，没有它，在 babel 的世界里注定寸步难行。不安装 @babel/core，无法使用 babel 进行编译。

#### @babel/cli和 @babel/node
@babel/cli 是 Babel 提供的内建命令行工具。提到 @babel/cli 这里就不得不提一下 @babel/node ，这哥俩虽然都是命令行工具，但是使用场景不同，babel/cli 是安装在项目中，而 @babel/node 是全局安装。

#### polyfill
polyfill在代码中的作用主要是用已经存在的语法和api实现一些浏览器还没有实现的api，对浏览器的一些缺陷做一些修补。babel为什么存在polyfill。因为babel的转译只是语法层次的转译，例如箭头函数、解构赋值、class，对一些新增api以及全局函数（例如：Promise）无法进行转译，这个时候就需要在代码中引入babel-polyfill，让代码完美支持ES6+环境。

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
与 .babelrc 配置相同，但是可以使用JS编写。
```js
const presets = []
const plugins = []
module.exports = { presets, plugins }
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
plugins是babel中的插件，通过配置不同的插件才能告诉babel，我们的代码中有哪些是需要转译的。插件的执行顺序是从左往右执行。
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
显然这样一个一个配置插件会非常的麻烦，为了方便，babel为我们提供了一个配置项叫做persets（预设）。预设就是一系列插件的集合，就好像修图一样，把上次修图的一些参数保存为一个预设，下次就能直接使用。  前面提到插件的执行顺序是从左往右，而预设的执行顺序恰好反其道行之，它是从右往左。

如果要转译ES6语法，只要按如下方式配置即可：
```js
//先安装ES6相关preset： cnpm install -D babel-preset-es2015
{
  "presets": ["es2015"]
}
```

#### @babel/preset-env
@babel/preset-env 主要作用是对我们所使用的并且目标浏览器中缺失的功能进行代码转换和加载 polyfill，在不进行任何配置的情况下，@babel/preset-env 所包含的插件将支持所有最新的JS特性(ES2015,ES2016等，不包含 stage 阶段)，将其转换成ES5代码。例如，如果你的代码中使用了可选链(目前，仍在 stage 阶段)，那么只配置 @babel/preset-env，转换时会抛出错误，需要另外安装相应的插件。
```js
// .babelrc
{    
  "presets": ["@babel/preset-env"]
}
```

@babel/preset-env 会根据你配置的目标环境，生成插件列表来编译。对于基于浏览器或 Electron 的项目，官方推荐使用 .browserslistrc 文件来指定目标环境。默认情况下，如果你没有在 Babel 配置文件中(如 .babelrc)设置 targets 或 ignoreBrowserslistConfig，@babel/preset-env 会使用 browserslist 配置源。
如果你不是要兼容所有的浏览器和环境，推荐你指定目标环境，这样你的编译代码能够保持最小

```js
//.browserslistrc
> 0.25%
not dead
```


