<template>
  <!--register area start-->
  <div class="col-lg-6 col-md-6">
    <div class="account_form register">
      <h2>Register</h2>
      <form>
        <p>
          <label>
            Nombre y Apellido
            <span>*</span>
          </label>
          <input type="text" v-model="displayName" />
        </p>
        <p>
          <label>
            Correo
            <span>*</span>
          </label>
          <input type="text" v-model="email" />
        </p>
        <p>
          <label>
            Contraseña
            <span>*</span>
          </label>
          <input type="password" v-model="password" />
        </p>
        <p>
          <label>
            Repetir Contraseña
            <span>*</span>
          </label>
          <input type="password" v-model="password_confirm" />
        </p>
        <div class="login_submit">
          <button @click="register">Register</button>
        </div>
      </form>
    </div>
  </div>
  <!--register area end-->
</template>

<script>
import users from '@/services/app/users'

export default {
  name: "Register",
  data() {
    return {
      email: "",
      displayName: "",
      password: "",
      password_confirm: ""
    };
  },
  methods: {
    register() {
      users.register(this.email, this.password, this.displayName)
    }
  }
};
</script>

<style>
</style>