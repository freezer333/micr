import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

import "./../node_modules/bulma/css/bulma.css";

new Vue({
  render: h => h(App),
}).$mount('#app')
