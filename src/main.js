// iHappy 2018-3-9 赵越

import App from './App.vue'

// Vue 项目配置
Vue.prototype.$config = require('./config')

/**
 * Vue 全局初始化
 */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App />'
})