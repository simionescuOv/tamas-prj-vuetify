import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;

window['fundal']='red lighten-3';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
