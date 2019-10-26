
module.exports = {
    dest: 'dist',
    base: process.env.NODE_ENV === 'production' ? '/' : '/',
    title: '🏠',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    themeConfig: {
        // nav: [ //导航栏链接
        //     {
        //         text: 'Programming',
        //         items: [
        //             { text: 'Java', link: '/java/' },
        //         ]
        //     },
        //     {
        //         text: 'OS',
        //         items: [
        //             { text: 'Linux', link: '/linux/' },
        //             { text: 'Windows', link: '/windows' },
        //         ]
        //     },
        // ],
        sidebar: 'auto',
        // sidebar: {
        //     '/java/maven/': [
        //         {
        //             title: '⮜',
        //             path: '/java/',
        //             collapsable: false
        //         },
        //         {
        //             title: 'Maven',
        //             collapsable: false,
        //             sidebarDepth: 2,
        //             children: [
        //                 ['../', 'back'],
        //                 ['', 'home'],
        //                 'repo'
        //             ]
        //         },

        //     ],
        //     '/java/': [
        //         {
        //             title: 'Java',
        //             collapsable: false,
        //             sidebarDepth: 2,
        //             children: [
        //                 ['', 'home'],
        //                 ['maven/', 'Maven']


        //             ]
        //         }
        //     ]
        // },
        displayAllHeaders: false,
        smoothScroll: true,
        lastUpdated: 'Last Updated', // string | boolean
        search: true,
    },
    markdown: {
        lineNumbers: true
    },
    plugins: [
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
            },
        ],
        [
            'vuepress-plugin-container',
            {
                type: 'quote',
                before: info => `<div class="quote"><p class="title">${info}</p>`,
                after: '</div>',
            },
        ],

        // this is how VuePress Default Theme use this plugin
        [
            'vuepress-plugin-container',
            {
                type: 'tip',
                defaultTitle: {
                    '/': 'Tip',
                    '/zh/': '提示',
                },
            },
        ],
    ]
}
