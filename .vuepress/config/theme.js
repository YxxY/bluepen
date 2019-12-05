const sidebar = require("./sidebar");

module.exports = {
  repo: "yxxy/bluepen",
  navbar: true,
  editLinks: true,
  editLinkText: "在 GitHub 上编辑此页",
  sidebar: sidebar,
  displayAllHeaders: false,
  smoothScroll: true,
  lastUpdated: 'Last Updated', // string | boolean
  search: true,
  nav: [
    // {
    //   text: "coding",
    //   items: [
    //     {
    //       text: "java",
    //       link: "/java/"
    //     }
    //   ]
    // },
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
      ]
    },
  ]
};
