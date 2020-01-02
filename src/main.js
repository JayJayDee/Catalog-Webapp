import Vue from 'vue'
import App from './App.vue'
import Loading from 'vue-loading-overlay';
import BootstrapVue from 'bootstrap-vue';

import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false
Vue.use(Loading);
Vue.use(BootstrapVue);

new Vue({
  render: h => h(App),
}).$mount('#app')
