module.exports = {
  title: 'webpack从入门到精通', // 设置网站标题
  base: '/',
  description: '讲解webpack相关知识点', //描述
  dest: './dist', // 设置输出目录
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
          title: 'webpack专题',
          // collapsable: false,
          children: [
            'webpack/基本配置',
            'webpack/知识问答',
            'webpack/对比glup',
            'webpack/搭建项目',
            'webpack/优化打包',
            'webpack/loader',
            'webpack/babel',
          ]
        }
      ]
    }
  },
  dest: './docs/.vuepress/dist',
  ga: '',
  evergreen: true,
}