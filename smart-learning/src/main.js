import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-vue/dist/bootstrap-vue.css";
import router from '@/router'
import VueRouter from 'vue-router';
import { LayoutPlugin } from 'bootstrap-vue'
Vue.use(LayoutPlugin)
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(router);
    
Vue.use(VueRouter);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
