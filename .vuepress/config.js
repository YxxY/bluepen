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
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    themeConfig: themeConf,
    markdown: mdConf,
    plugins: pluginsConf,
}
