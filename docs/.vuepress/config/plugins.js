
module.exports = [
    // '@vuepress/back-to-top',
    [
        'one-click-copy',
        {
            copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
            copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
            duration: 1500, // prompt message display time.
            showInMobile: false // whether to display on the mobile side, default: false.
        }
    ],
    [
        '@vuepress/last-updated',
        {
            transformer: (timestamp, lang) => {
                const dayjs = require('dayjs')
                return dayjs(timestamp).format('YYYY/MM/DD')
            }
        }
    ],
    require('../plugins/overwrite-lastupdate'),
    [
        '@vuepress/medium-zoom',
        {
            selector: '.theme-vdoing-content :not(a) :not(.emoji) > img',
            delay: 500,
            options: {
                margin: 24,
                background: 'black',
                scrollOffset: 0,
            },
        },
    ],
    [
        'vuepress-plugin-container',
        {
            type: 'right',
            defaultTitle: '',
        }
    ],
    [
        'vuepress-plugin-container',
        {
            type: 'quote',
            before: info => `<div class="quote"><p class="title">${info}</p>`,
            after: '</div>',
        }
    ],
    [
        '@vuepress/pwa',
        {
            serviceWorker: true,
            updatePopup: {
                message: "发现页面有新内容",
                buttonText: "刷新"
            }
        }
    ],
    [
        '@vssue/vuepress-plugin-vssue', {
            // 设置 `platform` 而不是 `api`
            platform: 'github-v4',
            // 其他的 Vssue 配置
            owner: 'yxxy',
            repo: 'bluepen',
            clientId: 'd54e41a76ad897897e24',
            clientSecret: process.env.clientSecret,
        },
    ],
    // [
    //     'vuepress-plugin-comment',
    //     {
    //         choosen: 'gitalk',
    //         options: {
    //             clientID: 'd54e41a76ad897897e24',
    //             clientSecret: process.env.clientSecret,
    //             repo: 'bluepen', // GitHub 仓库
    //             owner: 'yxxy', // GitHub仓库所有者
    //             admin: ['yxxy'], // 对仓库有写权限的人
    //             // distractionFreeMode: true,
    //             pagerDirection: 'last', // 'first'正序 | 'last'倒序
    //             id: "<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>", //  页面的唯一标识,长度不能超过50
    //             title: "「评论」<%- frontmatter.title %>", // GitHub issue 的标题
    //             labels: ["Gitalk", "Comment"], // GitHub issue 的标签
    //             body: "页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>" // GitHub issue 的内容
    //         }
    //     }
    // ]
]