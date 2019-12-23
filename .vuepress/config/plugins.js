
module.exports = [
    '@vuepress/back-to-top',
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
        'vuepress-plugin-medium-zoom',
        {
            // selector: '.zoom',
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

    // this is how VuePress Default Theme use this plugin
    [
        'vuepress-plugin-container',
        {
            type: 'tip',
            defaultTitle: {
                '/': '提示',
                '/zh/': '提示',
            },
        }
    ],
    [
        'vuepress-plugin-container',
        {
            type: 'warning',
            defaultTitle: {
                '/': '注意',
                '/zh/': '注意',
            },
        }
    ],
    [
        'vuepress-plugin-container',
        {
            type: 'danger',
            defaultTitle: {
                '/': '警告',
                '/zh/': '警告'
            },
        }
    ],
    // [
    //     '@vuepress/google-analytics', { 'ga': 'UA-124601890-1' }
    // ],
    [
        '@vuepress/pwa',
        {
            serviceWorker: true,
            updatePopup: {
                message: "发现页面有新内容",
                buttonText: "刷新"
            }
        }
    ]
    // [
    //     'vuepress-plugin-comment',
    //     {
    //       choosen: 'gitalk', 
    //       options: {
    //         clientID: '3c7427f9edf5cff66186',
    //         clientSecret: process.env.clientSecret || 'da9ea83e0cb16ffe6d86971a4a912de04bdf3411',
    //         repo: 'bluepen',
    //         owner: 'yxxy',
    //         admin: ['yxxy'],
    //         id: '<%- frontmatter.commentid || frontmatter.permalink %>',  // Ensure uniqueness and length less than 50
    //         distractionFreeMode: false,  // Facebook-like distraction free mode
    //         labels: ['Gitalk', 'Comment'],
    //         title: '「评论」<%- frontmatter.title %>',
    //         body: '<%- frontmatter.title %>：<%- window.location.origin %><%- frontmatter.to.path || window.location.pathname %>'
    //       }
    //     }
    //   ]
]