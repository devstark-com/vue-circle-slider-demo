// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueCircleSlider from 'vue-circle-slider'
Vue.use(VueCircleSlider)

Vue.config.productionTip = false

Vue.directive('hljs', {
  inserted: function (el) {
    window.hljs.highlightBlock(el)
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
