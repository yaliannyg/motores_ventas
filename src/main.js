import Vue from 'vue'
import './plugins/bootstrap-vue'
import './assets/scss/main.scss'

import { ValidationObserver, ValidationProvider, setInteractionMode, localize } from 'vee-validate';
// import en from 'vee-validate/dist/locale/en.json';
import './utils/rules-validations'
import common from "./utils/common"

// import * as rules from 'vee-validate/dist/rules';
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// install rules and localization
// Object.keys(rules).forEach(rule => {
  //   extend(rule, rules[rule]);
  // });
  
  // localize('en', en);
  setInteractionMode('lazy');
// Install components globally
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
Vue.mixin(common)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
