

  const java = [
  [
    "/docs/java/",
    "Java前言"
  ],
  {
    "title": "maven",
    "collapsable": false,
    "sidebarDepth": 2,
    "children": [
      [
        "01.maven/",
        "Maven前言"
      ],
      [
        "01.maven/01.install.md",
        "install"
      ],
      [
        "01.maven/02.config.md",
        "config"
      ],
      [
        "01.maven/03.repo.md",
        "repo"
      ],
      [
        "01.maven/04.pom.md",
        "pom"
      ],
      [
        "01.maven/05.lifecycle.md",
        "lifecycle"
      ],
      [
        "01.maven/06.plugins.md",
        "plugins"
      ],
      [
        "01.maven/07.archetype.md",
        "archetype"
      ],
      [
        "01.maven/08.third-party-package.md",
        "third-party-package"
      ],
      [
        "01.maven/09.cmd.md",
        "cmd"
      ],
      [
        "01.maven/10.faq.md",
        "faq"
      ]
    ]
  },
  {
    "title": "notes",
    "collapsable": false,
    "sidebarDepth": 2,
    "children": [
      [
        "02.notes/",
        "Notes前言"
      ],
      [
        "02.notes/01.install.md",
        "install"
      ],
      [
        "02.notes/02.modifer.md",
        "modifer"
      ],
      [
        "02.notes/03.package.md",
        "package"
      ],
      [
        "02.notes/04.generic-type.md",
        "generic-type"
      ],
      [
        "02.notes/05.class.md",
        "class"
      ],
      [
        "02.notes/06.inheritance.md",
        "inheritance"
      ],
      [
        "02.notes/07.reflection.md",
        "reflection"
      ],
      [
        "02.notes/08.interface.md",
        "interface"
      ],
      [
        "02.notes/09.annotation.md",
        "annotation"
      ]
    ]
  }
]

  const jenkins = [
  [
    "/docs/jenkins/",
    "Jenkins前言"
  ],
  {
    "title": "基础",
    "collapsable": false,
    "sidebarDepth": 2,
    "children": [
      [
        "01.基础/01.安装.md",
        "安装"
      ]
    ]
  },
  {
    "title": "流水线",
    "collapsable": false,
    "sidebarDepth": 2,
    "children": [
      [
        "02.流水线.md/01.流水线任务.md",
        "流水线任务"
      ],
      [
        "02.流水线.md/02.流水线语法.md",
        "流水线语法"
      ],
      [
        "02.流水线.md/03.环境变量.md",
        "环境变量"
      ],
      [
        "02.流水线.md/04.邮件通知.md",
        "邮件通知"
      ],
      [
        "02.流水线.md/05.使用FTP插件.md",
        "使用FTP插件"
      ],
      [
        "02.流水线.md/06.多分支流水线插件.md",
        "多分支流水线插件"
      ],
      [
        "02.流水线.md/10.FAQ.md",
        "FAQ"
      ]
    ]
  }
]

  const linux = [
  {
    "title": "常用命令",
    "collapsable": false,
    "sidebarDepth": 2,
    "children": []
  },
  {
    "title": "vim",
    "collapsable": false,
    "sidebarDepth": 2,
    "children": []
  },
  {
    "title": "tips",
    "collapsable": false,
    "sidebarDepth": 2,
    "children": []
  }
]

  const vuepress = [
  [
    "/docs/vuepress/",
    "Vuepress前言"
  ],
  {
    "title": "基础备忘",
    "collapsable": false,
    "sidebarDepth": 2,
    "children": [
      [
        "01.基础备忘/01.使用自定义容器.md",
        "使用自定义容器"
      ]
    ]
  }
]


module.exports = {

    "/docs/java/": java,

    "/docs/jenkins/": jenkins,

    "/docs/linux/": linux,

    "/docs/vuepress/": vuepress,

}
