import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import elementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/reset.css';

import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';

Vue.config.productionTip = false;
Vue.use(elementUI);
Vue.use(mavonEditor);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
