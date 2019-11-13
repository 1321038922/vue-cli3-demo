import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store";
import Element from 'element-ui'
import './assets/element-variables.scss'

Vue.config.productionTip = false;
Vue.use(Element)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
