import Vue from 'vue'
import App from './App.vue'
import VueCompostionAPI from '@vue/composition-api'

Vue.config.productionTip = false

Vue.use(VueCompostionAPI)

new Vue({
  render: h => h(App),
}).$mount('#app')
