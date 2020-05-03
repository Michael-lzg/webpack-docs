# sourceMap

开发过程中，代码调试当然少不了，那么问题来了，经过打包后的文件，你是不容易找到出错的地方的，Source Map 就是用来解决这个问题的。

sourceMap 文件和源码的一个映射关系，它能帮助我们就能够快速定位问题，并进行修复。

```js
module.exports = {
  // ...
  devtool: 'source-map', // 会生成对于调试的完整的.map文件
}
```

以上的配置打包回 dist 文件夹会生产相应的.map 文件。值得注意的是开启souceMap打包速度会减慢，生产文件变大，所以我们可以在开发环境使用 sourceMap，生产环境则关闭。


### sourceMap的种类

* source-map: 会生成map格式的文件，里面包含映射关系的代码
* inline-source-map: 不会生成map格式的文件，包含映射关系的代码会放在打包后生成的代码中
* inline-cheap-source-map: 一是将错误只定位到行，不定位到列。二是映射业务代码，不映射loader和第三方库等。会提升打包构建的速度。
* inline-cheap-module-source-map: module会映射loader和第三方库
* eval: 用eval的方式生成映射关系代码，效率和性能最佳。但是当代码复杂时，提示信息可能不精确。