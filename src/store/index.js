import Vue from 'vue'
import Vuex from 'vuex'
import services from '@/services/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    set_user ( state, payload){
      console.log(payload)
      state.user = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
