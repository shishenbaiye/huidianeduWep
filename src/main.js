import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import store from './store'
import router from './router'
import config from './lib/config'
import axios from 'axios'
import api from './api' 

Vue.prototype.$http = axios
Vue.use(config)
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
