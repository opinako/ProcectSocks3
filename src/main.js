import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import { Sampler } from "tone";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  Sampler,
  render: h => h(App)
}).$mount('#app')
