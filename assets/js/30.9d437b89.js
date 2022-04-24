(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{769:function(t,v,_){"use strict";_.r(v);var e=_(51),s=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"添加子模块"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#添加子模块"}},[t._v("->")]),t._v(" 添加子模块")]),t._v(" "),_("p",[t._v("将一个已存在的目标 Git 仓库添加为当前仓库的子模块。"),_("br"),t._v("\n通过命令 "),_("code",[t._v("git submodule add [<options>] <repository_url> [<path>]")]),t._v(" 实现, eg:")]),t._v(" "),_("div",{staticClass:"language-bash line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[_("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" submodule "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" https://github.com/chaconinc/DbConnector\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("p",[t._v("添加的子模块默认是放在当前项目的根目录，也可以指定最后一个"),_("code",[t._v("path")]),t._v("参数放在其它路径。"),_("br"),t._v("\n添加成功后，会生成一个新的文件 "),_("code",[t._v(".gitmodules")]),t._v(", 记录子模块信息。")]),t._v(" "),_("h2",{attrs:{id:"克隆含有子模块的项目"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#克隆含有子模块的项目"}},[t._v("->")]),t._v(" 克隆含有子模块的项目")]),t._v(" "),_("p",[_("code",[t._v("git clone")]),t._v("命令克隆带有子模块的项目，其子模块目录会"),_("strong",[t._v("默认为空")])]),t._v(" "),_("p",[t._v("以下两种方式可以完成子模块代码的拉取：")]),t._v(" "),_("ol",[_("li",[t._v("clone 完成后继续执行两条命令\n"),_("ul",[_("li",[_("code",[t._v("git submodule init")]),t._v(", 初始化配置文件")]),t._v(" "),_("li",[_("code",[t._v("git submodule update")]),t._v(", 拉取数据到合适的目录")])])]),t._v(" "),_("li",[t._v("给 git clone 添加 "),_("code",[t._v("--recursive")]),t._v(" 参数")])]),t._v(" "),_("h2",{attrs:{id:"更新子模块"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#更新子模块"}},[t._v("->")]),t._v(" 更新子模块")]),t._v(" "),_("p",[t._v("子模块在加载到主项目里就就成为了主项目的一部分，有固定的版本。不手动更新的话不会自动更新。")]),t._v(" "),_("h3",{attrs:{id:"在主项目更新子模块"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#在主项目更新子模块"}},[t._v("->")]),t._v(" 在主项目更新子模块")]),t._v(" "),_("ul",[_("li",[t._v("cd到子模块目录")]),t._v(" "),_("li",[t._v("切换到对应分支")]),t._v(" "),_("li",[t._v("修改，提交，同步，推送")]),t._v(" "),_("li",[t._v("返回主项目根目录，提交子模块的更新，同步，推送")])]),t._v(" "),_("p",[t._v("总之，把子模块当作一个独立代码库处理即可。")]),t._v(" "),_("h2",{attrs:{id:"同步子模块"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#同步子模块"}},[t._v("->")]),t._v(" 同步子模块")]),t._v(" "),_("p",[t._v("在当前项目执行命令 "),_("code",[t._v("git submodule update --remote")]),t._v("可以将子模块同步到最新的一次提交。\n该命令默认同步所有子模块。也可以在后面添加具体的子模块名字，只同步局部。eg:")]),t._v(" "),_("div",{staticClass:"language-bash line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[_("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" submodule update --remote DbConnector\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("p",[t._v("一般来说，这不是推荐的做法，子模块是主项目的一部分，它的版本由主项目决定。"),_("br"),t._v("\n推荐的做法是：")]),t._v(" "),_("ul",[_("li",[t._v("git pull同步远程更新")]),t._v(" "),_("li",[t._v("git status查看本地状态，如果有子模块版本更新，执行 "),_("code",[t._v("git submodule update")]),t._v("确认本次更新")]),t._v(" "),_("li",[t._v("如果不确认，就默认表示放弃本次修改，下次提交后会使得子模块回滚到本地当前的版本")])]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),_("p",[t._v("git版本在 v2.14之后， 可全局配置 "),_("code",[t._v("git config --global submodule.recurse true")]),_("br"),t._v("\n使得拉取远程更新时，如果子模块有更新则自动确认更新")])]),t._v(" "),_("h2",{attrs:{id:"删除子模块"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#删除子模块"}},[t._v("->")]),t._v(" 删除子模块")]),t._v(" "),_("ul",[_("li",[t._v("删除子模块目录及源码\n"),_("ul",[_("li",[t._v("手动删除\n"),_("ul",[_("li",[t._v("删除子模块目录")]),t._v(" "),_("li",[t._v("删除项目目录下 "),_("code",[t._v(".gitmodules")]),t._v("文件中子模块相关条目")]),t._v(" "),_("li",[t._v("删除配置项 "),_("code",[t._v(".git/config")]),t._v("中子模块相关条目")])])]),t._v(" "),_("li",[t._v("或者执行命令 "),_("code",[t._v("git submodule deinit [<MOD_NAME>]")]),t._v(", 即逆向初始化")])])]),t._v(" "),_("li",[t._v("删除模块下的子模块目录 "),_("code",[t._v(".git/module/*")]),t._v("，\n"),_("ul",[_("li",[t._v("每个子模块对应一个目录，注意只删除对应的子模块目录即可")]),t._v(" "),_("li",[t._v("通过命令的方式 "),_("code",[t._v("git rm --cached [<MOD_NAME>]")])])])]),t._v(" "),_("li",[t._v("提交修改")])])])}),[],!1,null,null,null);v.default=s.exports}}]);