module.exports = {
  title: 'webpack从入门到精通', // 设置网站标题
  base: '/webpack-docs/',
  repo: 'https://github.com/Michael-lzg/webpack-docs',
  description: '讲解webpack相关知识点', //描述
  port: 3333, //端口
  themeConfig: { //主题配置
    // 添加导航栏
    nav: [
      { text: '主页', link: '/' }, // 导航条
      { text: '知识库', link: '/page/' },
      {
        text: 'github',
        items: [
          { text: 'github', link: 'https://github.com/Michael-lzg' },
          { text: '博客', link: 'https://juejin.im/user/5b52fd38f265da0f4c6fbd72/posts' }
        ]
      }
    ],
    sidebar: {
      '/page/': [
        {
          title: 'webpack前世今生',
          collapsable: false,
          children: [
            'fonted/前端模块化',
            'fonted/前端工程化',
            'fonted/glup',
            'fonted/webpack4.0',
          ]
        },
        {
          title: 'webpack基础篇',
          collapsable: false,
          children: [
            'base/entry',
            'base/loader',
            'base/plugin',
            'base/webpack-dev-derver',
            'base/sourcemap',
            'base/externals',
            'base/optimization',
            'base/babel',
            'base/hash',
          ]
        },
        {
          title: 'webpack深入篇',
          collapsable: false,
          children: [
            'advanced/webpack的打包机制',
            'advanced/热更新原理',
            'advanced/异步加载原理',
            'advanced/webpack插件原理',
            'advanced/Tree Shaking',
            'advanced/DllPlugin',
          ]
        },
        {
          title: 'webpack应用篇',
          collapsable: false,
          children: [
            'application/从零构建一个wbpack项目',
            'application/用webpack构建一个vue项目',
            'application/移动端开发模板',
            'application/webpack优化打包大全',
            'application/webpack-chain',
            'application/vue-ssr服务端渲染',
          ]
        },
      ]
    }
  },
  dest: './dist',
  ga: '',
  evergreen: true,
}