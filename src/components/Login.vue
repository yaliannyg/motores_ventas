<template>
  <!--login area start-->
  <div class="col-lg-6 col-md-6">
    <div class="account_form">
      <div class="text-center">
        <img src="assets/img/carro.png" class alt="login car icon" width="50%" />
        <h2 class="title">Bienvenido</h2>
      </div>
      <form>
        <icon-input title="Correo Electronico">
          <template v-slot:icon>
            <i class="fas fa-envelope icon"></i>
          </template>
        </icon-input>
        <icon-input title="Contraseña">
          <template v-slot:icon>
            <i class="fas fa-key icon"></i>
          </template>
        </icon-input>
        <div class="login_submit">
          <a
            href="https://demo.hasthemes.com/autima-preview/autima/login.html#"
          >Recuperar Contraseña</a>
          <button class="login-button ">login</button>
        <div>
          <label for="remember">Aun no tienes una cuenta?

          <router-link tag="a" to="/register">Registrate ahora</router-link>
          </label>
        </div>
        </div>
      </form>
    </div>
  </div>
  <!--login area start-->
</template>

<script>
import IconInput from "@/components/IconInput";

export default {
  name: "Login",
  components: {
    IconInput
  },
  data() {
    return {
      user: {
        firstName: "f",
        lastName: "k"
      }
    };
  },
  methods: {
    async login() {}
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