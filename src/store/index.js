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
      localStorage.setItem("user", JSON.stringify(payload))
      state.user = payload
    }
  },
  actions: {
    set_auth (context, payload) {
      

    }
  },
  getters: {

  },
  modules: {
  }
})
