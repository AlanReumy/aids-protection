import Vue from 'vue' //引入vue
import Vuex from 'vuex' // 引入vuex
import faqModule from './faq'
Vue.use(Vuex) // 让vue使用vuex
// 通过vuex构造函数创建store对象
const store = new Vuex.Store({
  state() {
    return {
      count: 0
    }
  },
  mutations: {},
  modules: {
    faqModule
  }
})
export default store //导出store对象
