const dayjs = require('dayjs')

module.exports = (options = {}, context) => ({
  extendPageData ($page) {
    const { transformer } = options
    const timestamp = $page.date
    const $lang = $page._computed.$lang
    if (timestamp) {
      const lastUpdated = typeof transformer === 'function'
        ? transformer(timestamp, $lang)
        : defaultTransformer(timestamp, $lang)
      $page.lastUpdated = lastUpdated
    }
  }
})

function defaultTransformer (timestamp, lang) {
  return dayjs(timestamp).format('YYYY/MM/DD')
}