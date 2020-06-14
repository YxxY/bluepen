const {
    mdConf,
    themeConf,
    pluginsConf,
    localesConf
} = require('./config/')


module.exports = {
    dest: 'dist',
    locales: localesConf,
    title: 'BluePen',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }],
        ['meta', { name: 'theme-color', content: '#11a8cd'}], // 移动浏览器主题颜色
        ['meta', { name: 'keywords', content: '学习, blog'}]
    ],
    // theme: 'vdoing',
    theme: require.resolve('../../theme-vdoing'),
    themeConfig: themeConf,
    markdown: mdConf,
    plugins: pluginsConf,
}
