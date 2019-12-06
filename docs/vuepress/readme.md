---
title: vuepress
date: 2019-10-01
permalink: vuepress
comment: false
---

入了 vue的大坑，试了下生态里的 vuepress来写文档，截至到我使用的 v1.2.0的版本，体验还可以
- 访问速度感觉比之前用的 `Docs`要快点，静态编译后发布的优势
- 另外可直接在 markdown里使用 vue组件是最吸引人的
- [markdown扩展](https://vuepress.vuejs.org/zh/guide/markdown.html) 里的自定义容器，特定行代码高亮， permalink等功能很实用

不好的体验也有：
- 配置文件不支持热更新，前期调试非常影响体验，至今也是个 [问题](https://github.com/vuejs/vuepress/issues/1283)
- 个性化配置的支持还不够，例如
    - 配置文件只能放在根目录的 `.vuepress`目录下
    - 全局默认的 `sidebarDepth`为 1， 且只有 0，1，2三个选项……真的是一言难尽
- windows上的玄学不支持，最后都是在 wsl和 mac上用了

