import Vue from "vue";
import Vuex from "vuex";
import services from "@/services/api";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || {},
  },
  mutations: {
    set_user(state, payload) {
      localStorage.setItem("user", JSON.stringify(payload));
      state.user = payload;
      
    },
  },
  actions: {
    // async logout(context, payload) {
    //   let { status } = await logout(context.state.user.token)

    //   if (status === 201) {
    //     localStorage.removeItem("user");
    //     this.context.commit("set_user", {});
    //     this.$router.push("/login");
    //   } else this.dangerToast("Error en el servidor");

    // },
  },
  getters: {
    isAuthenticated(state, getters) {
      // const user = JSON.parse(state.user)
      return state.user.isAuthenticated;
    },
  },
  modules: {},
});
