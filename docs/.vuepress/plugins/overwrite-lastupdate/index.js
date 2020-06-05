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
  timestamp = timestamp.toISOString().replace(/T|Z/gi, " ")
  let fmt =  dayjs(timestamp).format('YYYY-MM-DD HH:mm')
  if(fmt.endsWith('00:00'))
    fmt = fmt.substring(0, fmt.length - 5)
  return fmt
}