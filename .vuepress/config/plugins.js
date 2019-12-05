module.exports = [
    '@vuepress/back-to-top',
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
]