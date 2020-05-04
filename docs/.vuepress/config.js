module.exports = {
  title: 'webpack从入门到精通', // 设置网站标题
  base: '/webpack-docs/',
  repo: 'https://github.com/Michael-lzg/webpack-docs',
  description: '讲解webpack相关知识点', //描述
  port: 3000, //端口
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
            'base/optimization',
            'base/babel',
            'base/hash',
            'base/知识问答',
          ]
        },
        {
          title: 'webpack深入篇',
          collapsable: false,
          children: [
            'advanced/demo',
            'advanced/优化打包',
          ]
        },
      ]
    }
  },
  dest: './dist',
  ga: '',
  evergreen: true,
}