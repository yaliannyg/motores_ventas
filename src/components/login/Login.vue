<template>
  <!--login area start-->
  <div class="col-lg-6 col-md-6">
    <div class="account_form">
      <div class="text-center">
        <img src="assets/img/carro.png" class alt="login car icon" width="50%" />
        <h2 class="title">Bienvenido</h2>
      </div>
      <ValidationObserver v-slot="{ invalid }">
        <form>
          <icon-input title="Correo Electronico">
            <template v-slot:icon>
              <i class="fas fa-envelope icon"></i>
            </template>
            <template v-slot:input_value>
              <ValidationProvider name="Email" rules="email" v-slot="{ errors }">
                <input class="input-field" type="email" v-model="user.email" />
                <span class="text-danger">{{ errors[0] }}</span>
              </ValidationProvider>
            </template>
          </icon-input>
          <icon-input title="Contraseña">
            <template v-slot:icon>
              <i class="fas fa-key icon"></i>
            </template>
            <template v-slot:input_value>
              <ValidationProvider name="Contraseña" rules="required" v-slot="{ errors }">
                <input class="input-field" type="password" v-model="user.password" />
                <span class="text-danger">{{ errors[0] }}</span>
              </ValidationProvider>
            </template>
          </icon-input>
          <div class="login_submit">
            <div class="text-align-right">
              <router-link to="/login">Recuperar Contraseña</router-link>
            </div>
            <button type="button" class="login-button" @click="login(invalid)">Entrar</button>
            <div class="m-0">
              <div class="m-0 d-flex justify-content-center p-0">
                <router-link tag="a" to="/register">
                  <label for="remember" class="m-0 p-0 text-dark">Aun no tienes una cuenta?</label>
                  Registrate ahora
                </router-link>
              </div>
            </div>
          </div>
          <networks></networks>
        </form>
      </ValidationObserver>
    </div>
  </div>
  <!--login area start-->
</template>

<script>
import IconInput from "@/components/IconInput";
import Networks from "@/components/Networks";
import { login } from "@/services/app/users";
import _ from "lodash";
// import {  mapMutations }  from "vuex"
export default {
  name: "Login",
  components: {
    IconInput,
    Networks
  },
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    // ...mapMutations(['setUser']),
    async login(invalidForm) {
      let { email, password } = this.user;
      console.log(email, password);
      if (invalidForm) this.dangerToast("Datos invalidos");
      else if (_.isEmpty(email) || _.isEmpty(password))
        this.dangerToast("Datos vacios");

      let { status, data } = await login(email, password);
      if (status === 200) {
        console.log("status", status);

        this.$store.commit("set_user", data);
      }
      // if ((this.user.email === "y") & (this.user.password === "p")) {
      //   this.$store.commit("set_user", this.user);
      // } else console.log("error");
    }
  }
};
</script>

<style scoped>
i {
  font-weight: 900;
}
.title {
  padding: 15px;

  font-weight: bolder;
}
.login-button {
  background-color: #ed981a;
}
</style>