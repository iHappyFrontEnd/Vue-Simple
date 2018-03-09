// iHappy 2018-3-9 赵越

/**
 * @module 初始化与全局配置模块
 * @return {object} 全局配置
 */
module.exports = (function () {
  // 初始化
  (function init() {
    // 配置 log
    window.log = message => console.log(message)

    // rem 配置，以 iPhone 6 7 8，375px 参考
    document.querySelector('html').style.fontSize = 100 / 375 * window.innerWidth + 'px'
  })()

  return {
    // 配置参数
  }
})()