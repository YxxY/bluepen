
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
    ]
]