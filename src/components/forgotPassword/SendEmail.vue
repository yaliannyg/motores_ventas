<template>
  <div class="col-lg-6 col-md-6">
    <div class="account_form">
      <div class="text-center">
        <h3 class="p-3">Recuperar Contraseña</h3>

        <i class="fas fa-user-lock icon-font"></i>
        <h2 class="title p-0 m-2">Ingrese su correo electrónico</h2>
        <p>Le enviaremos un código de verificación a su correo electronico de registro</p>
      </div>
      <ValidationObserver v-slot="{ invalid }">
        <form>
          <icon-input title="Correo Electronico">
            <template v-slot:icon>
              <i class="fas fa-envelope icon"></i>
            </template>
            <template v-slot:input_value>
              <ValidationProvider name="Email" rules="email" v-slot="{ errors }">
                <input class="input-field" type="email" v-model="email" />
                <span class="text-danger">{{ errors[0] }}</span>
              </ValidationProvider>
            </template>
          </icon-input>
          <div class="login_submit mt-2">
            <button type="button" class="login-button" @click="enviar(invalid)">Enviar</button>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import IconInput from "@/components/IconInput";
import _ from "lodash"

export default {
  components: {
    IconInput
  },
  data() {
    return {
      email: ""
    };
  },
  methods: {
    enviar(invalidForm) {
      console.log("enviando", invalidForm);
      if (invalidForm) this.dangerToast("Datos invalidos");
      else if (_.isEmpty(this.email)) this.dangerToast("Datos vacios");
      else this.$emit("enviarEmail", this.email);
    }
  }
};
</script>

<style scoped lang="scss" >
h3 {
  
  color: #ed981a;
  font-size: 2rem;
  font-weight: 300;
}
.icon-font {
  font-size: 70px;
}
.account_form {
  position: relative;
  top: -30%;
}
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