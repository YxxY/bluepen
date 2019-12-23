

  const java = [
  [
    "/docs/java/",
    "Java前言"
  ],
  {
    "title": "notes",
    "collapsable": false,
    "sidebarDepth": 2,
    "children": [
      [
        "01.notes/01.install.md",
        "install"
      ],
      [
        "01.notes/02.modifer.md",
        "modifer"
      ],
      [
        "01.notes/03.package.md",
        "package"
      ],
      [
        "01.notes/04.generic-type.md",
        "generic-type"
      ],
      [
        "01.notes/05.class.md",
        "class"
      ],
      [
        "01.notes/06.inheritance.md",
        "inheritance"
      ],
      [
        "01.notes/07.reflection.md",
        "reflection"
      ],
      [
        "01.notes/08.interface.md",
        "interface"
      ],
      [
        "01.notes/09.annotation.md",
        "annotation"
      ]
    ]
  },
  {
    "title": "maven",
    "collapsable": false,
    "sidebarDepth": 2,
    "children": [
      [
        "02.maven/",
        "Maven前言"
      ],
      [
        "02.maven/01.install.md",
        "install"
      ],
      [
        "02.maven/02.config.md",
        "config"
      ],
      [
        "02.maven/03.repo.md",
        "repo"
      ],
      [
        "02.maven/04.pom.md",
        "pom"
      ],
      [
        "02.maven/05.lifecycle.md",
        "lifecycle"
      ],
      [
        "02.maven/06.plugins.md",
        "plugins"
      ],
      [
        "02.maven/07.archetype.md",
        "archetype"
      ],
      [
        "02.maven/08.third-party-package.md",
        "third-party-package"
      ],
      [
        "02.maven/09.cmd.md",
        "cmd"
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
        "02.流水线.md/05.参数化构建.md",
        "参数化构建"
      ],
      [
        "02.流水线.md/06.使用FTP插件.md",
        "使用FTP插件"
      ],
      [
        "02.流水线.md/07.使用提交信息.md",
        "使用提交信息"
      ],
      [
        "02.流水线.md/08.多分支流水线插件.md",
        "多分支流水线插件"
      ],
      [
        "02.流水线.md/10.FAQ.md",
        "FAQ"
      ]
    ]
  }
]

  const nodejs = [
  {
    "title": "基础备忘",
    "collapsable": false,
    "sidebarDepth": 2,
    "children": []
  },
  {
    "title": "常用模块",
    "collapsable": false,
    "sidebarDepth": 2,
    "children": [
      [
        "02.常用模块/01.http-server.md",
        "http-server"
      ],
      [
        "02.常用模块/02.config.md",
        "config"
      ],
      [
        "02.常用模块/03.request.md",
        "request"
      ],
      [
        "02.常用模块/04.logger.md",
        "logger"
      ],
      [
        "02.常用模块/05.mockjs.md",
        "mockjs"
      ]
    ]
  }
]

  const os = [
  {
    "title": "linux",
    "collapsable": false,
    "sidebarDepth": 2,
    "children": [
      {
        "title": "常用命令",
        "collapsable": false,
        "sidebarDepth": 2,
        "children": [
          [
            "01.linux/01.常用命令/01.curl.md",
            "curl"
          ]
        ]
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
  },
  {
    "title": "windows",
    "collapsable": false,
    "sidebarDepth": 2,
    "children": []
  },
  {
    "title": "mac",
    "collapsable": false,
    "sidebarDepth": 2,
    "children": [
      [
        "03.mac/01.添加脚本至开机启动项.md",
        "添加脚本至开机启动项"
      ],
      [
        "03.mac/02.安装 Java.md",
        "安装 Java"
      ]
    ]
  }
]

  const tools = [
  {
    "title": "git",
    "collapsable": false,
    "sidebarDepth": 2,
    "children": [
      [
        "01.git/10.子模块.md",
        "子模块"
      ]
    ]
  },
  {
    "title": "nginx",
    "collapsable": false,
    "sidebarDepth": 2,
    "children": []
  },
  {
    "title": "vscode",
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

    "/docs/nodejs/": nodejs,

    "/docs/os/": os,

    "/docs/tools/": tools,

    "/docs/vuepress/": vuepress,

}
