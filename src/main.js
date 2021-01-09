import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/google'
import './assets/scss/main.scss'
import x5GMaps from 'x5-gmaps'

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
// Vue.use(x5GMaps, { key: "260452926706-6dc54f3bnrmp7nqd9qs4nkqsm4bc3lam.apps.googleusercontent.com", libraries: ['places'] });
Vue.mixin(common)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
