const sidebar = require("./sidebar");

module.exports = {
  repo: "yxxy/bluepen",
  repoLabel: "查看源码",
  navbar: true,
  editLinks: true,
  editLinkText: "在 GitHub 上编辑此页",
  sidebar: sidebar,
  displayAllHeaders: false,
  smoothScroll: true,
  lastUpdated: '更新于', // string | boolean
  search: true,
  searchMaxSuggestions: 10,
  nav: [
    { text: 'About', link: '/about', target:'_blank' },
    {
      text: "其它",
      items: [
        {
          text: "Jenkins",
          link: "/jenkins/"
        },
        {
          text: "Vuepress",
          link: "/vuepress/"
        },
        {
          text: "OS",
          link: "/mac/startup/"
        },
      ]
    },
  ]
};
