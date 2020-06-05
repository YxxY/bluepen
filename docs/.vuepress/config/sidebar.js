

const java = [
  {
    "collapsable": false,
    "sidebarDepth": 2,
    "children": [
      [
        "01基础/02.基本数据类型.md",
        "基本数据类型"
      ],
      [
        "01基础/03.字符串.md",
        "字符串"
      ],
      [
        "01基础/04.对象.md",
        "对象"
      ],
      [
        "01基础/05.类.md",
        "类"
      ]
    ]
  }
]

const jenkins = [
  [
    "/blog/jenkins/",
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
      ],
      [
        "01.基础/02.权限控制.md",
        "权限控制"
      ]
    ]
  },
  {
    "title": "流水线",
    "collapsable": false,
    "sidebarDepth": 2,
    "children": [
      [
        "02.流水线/01.流水线任务.md",
        "流水线任务"
      ],
      [
        "02.流水线/02.流水线语法.md",
        "流水线语法"
      ],
      [
        "02.流水线/03.环境变量.md",
        "环境变量"
      ],
      [
        "02.流水线/04.邮件通知.md",
        "邮件通知"
      ],
      [
        "02.流水线/05.参数化构建.md",
        "参数化构建"
      ],
      [
        "02.流水线/06.使用FTP插件.md",
        "使用FTP插件"
      ],
      [
        "02.流水线/07.使用提交信息.md",
        "使用提交信息"
      ],
      [
        "02.流水线/08.执行命令和脚本.md",
        "执行命令和脚本"
      ],
      [
        "02.流水线/09.多分支流水线插件.md",
        "多分支流水线插件"
      ],
      [
        "02.流水线/10.FAQ.md",
        "FAQ"
      ]
    ]
  }
]

const nodejs = [
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
            "01.linux/02.常用命令/01.curl.md",
            "curl"
          ]
        ]
      }
    ]
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
    "title": "docker",
    "collapsable": false,
    "sidebarDepth": 2,
    "children": [
      [
        "03.docker/01.Install.md",
        "Install"
      ]
    ]
  },
  {
    "title": "mysql",
    "collapsable": false,
    "sidebarDepth": 2,
    "children": [
      [
        "04.mysql/01.安装授权.md",
        "安装授权"
      ]
    ]
  }
]

const vuepress = [
  [
    "/blog/vuepress/",
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

    "/blog/java/": java,

    "/blog/jenkins/": jenkins,

    "/blog/nodejs/": nodejs,

    "/blog/os/": os,

    "/blog/tools/": tools,

    "/blog/vuepress/": vuepress,

}
