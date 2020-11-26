import Vue from 'vue'
import './plugins/bootstrap-vue'
import './assets/scss/main.scss'
import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate';
import en from 'vee-validate/dist/locale/en.json';
import * as rules from 'vee-validate/dist/rules';
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// install rules and localization
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

localize('en', en);
// Install components globally
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
