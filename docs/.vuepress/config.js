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
    // theme: 'vdoing',
    theme: require.resolve('../../theme-vdoing'),
    themeConfig: themeConf,
    markdown: mdConf,
    plugins: pluginsConf,
}
