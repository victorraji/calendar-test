/*eslint-disable*/
import Vue from 'vue'
import App from './components/App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import moment from 'moment-timezone'
moment.tz.setDefault('UTC')
Object.defineProperty (Vue.prototype, '$moment', { get() { return this.$root.moment } })
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  data: {
    moment
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
