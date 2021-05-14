module.exports = {
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-color-table/demo/' : '/',
  css: { extract: false }
}