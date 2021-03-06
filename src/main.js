import Vue from 'vue'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './vuex/store.js'

Vue.config.productionTip = false
Vue.use(ElementUi);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
