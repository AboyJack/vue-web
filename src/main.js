// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 代码高亮文件引入 文档可见https://highlightjs.org/static/demo/
import highLight from 'highlight.js'
// 样式文件,这里我选的是sublime样式，文件里面还有其他样式可供选择
import 'highlight.js/styles/atom-one-light.css'
// 引入echarts
// import echarts from 'echarts'

// Vue.prototype.$echarts = echarts
Vue.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre code')
  // console.log(el, blocks)
  blocks.forEach((block) => {
    highLight.highlightBlock(block)
  })
})

Vue.config.productionTip = false // 阻止 vue 在启动时生成生产提示

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
