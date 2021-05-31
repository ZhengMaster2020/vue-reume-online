import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/reset.css'

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import BaseFooterBtn from './components/base-components/BaseFooterBtn'
import Apis from './apis'

Vue.prototype.$api = Apis

Vue.config.productionTip = false
Vue.use(elementUI)
Vue.use(mavonEditor)

Vue.component('FooterBtn', BaseFooterBtn)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
