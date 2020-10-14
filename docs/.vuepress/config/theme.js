const sidebar = require("./sidebar");

module.exports = {
  repo: "yxxy/bluepen",
  // repoLabel: "Github",
  docsDir: 'docs',
  repoNavEnable: false,
  navbar: true,
  editLinks: true,
  editLinkText: "编辑此页",
  // sidebar: sidebar,
  sidebar: { mode: 'structuring', collapsable: true },
  displayAllHeaders: false,
  smoothScroll: true,
  lastUpdated: '更新于', // string | boolean
  search: true,
  searchMaxSuggestions: 10,
  nav: [
    {
      text: "编程",
      items: [
        // {
        //   text: "Java",
        //   link: "/java/install/"
        // },
        {
          text: "Jenkins",
          link: "/jenkins/install/"
        },
        {
          text: "OS",
          link: "/mac/startup/"
        },
        { text: '算法', link: '/pages/608b76/' },
      ]
    },
    { text: '随笔', link: '/pages/4d6082/' },
    { text: '分类', link: '/categories/' },
    { text: '标签', link: '/tags/' },
    { text: '归档', link: '/archives/' },
    { text: '关于', link: '/about', target: '_blank' },
    { text: '留言板', link: '/comment', target: '_blank' },
  ],
  logo: '/logo.png',
  updateBar: { // 最近更新栏
    showToArticle: false, // 显示到文章页底部，默认true
    moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
  },
  author: { // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, href: String}
    name: 'Alex Li', // 必需
    href: 'https://github.com/yxxy' // 可选的
  },
  blogger: { // 博主信息，显示在首页侧边栏
    avatar: '/thumb.jpg',
    name: 'Alex Li',
    slogan: '一个好人'
  },
  lastestUpdate: true,
  social: { // 社交图标，显示于博主信息栏和页脚栏
    // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
    icons: [
      {
        iconClass: 'icon-youjian',
        title: '发邮件',
        link: 'mailto:Lx89757@126.com'
      },
      {
        iconClass: 'icon-github',
        title: 'GitHub',
        link: 'https://github.com/yxxy'
      }
    ]
  },
  footer: { // 页脚信息
    createYear: 2019, // 博客创建年份
    copyrightInfo: '| yxxy | <a href="https://github.com/YxxY/bluepen/blob/master/LICENSE" target="_blank">MIT License</a>', // 博客版权信息，支持a标签
  }
};
