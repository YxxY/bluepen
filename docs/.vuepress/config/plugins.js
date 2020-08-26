
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
            selector: '.theme-vdoing-content :not(a) img:not(.no-zoom)',
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
            platform: 'github',
            // 其他的 Vssue 配置
            owner: 'YxxY',
            repo: 'bluepen',
            clientId: 'd54e41a76ad897897e24',
            clientSecret: process.env.clientSecret,
            labels: ['comment'],
            prefix: '[Comment]'
        },
    ],
    [
        'vuepress-plugin-helper-live2d', {
            // 是否开启控制台日志打印(default: false)
            log: false,
            live2d: {
                // 是否启用(关闭请设置为false)(default: true)
                enable: true,
                // 模型名称(default: hibiki)>>>取值请参考：
                // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
                model: 'tororo',
                display: {
                    position: "left", // 显示位置：left/right(default: 'right')
                    width: 135, // 模型的长度(default: 135)
                    height: 300, // 模型的高度(default: 300)
                    hOffset: 65, //  水平偏移(default: 65)
                    vOffset: 0, //  垂直偏移(default: 0)
                },
                mobile: {
                    show: false // 是否在移动设备上显示(default: false)
                },
                react: {
                    opacity: 0.8 // 模型透明度(default: 0.8)
                }
            }
        }
    ]
]