import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import { API_URL } from './constants'

Vue.config.productionTip = false

Vue.prototype.$API_URL = API_URL

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
