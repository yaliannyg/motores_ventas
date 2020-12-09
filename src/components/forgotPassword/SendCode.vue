<template>
  <div class="col-lg-6 col-md-6">
    <div class="account_form">
      <div class="text-center">
        <h3 class="p-3">Recuperar Contraseña</h3>

        <i class="fas fa-lock-open icon-font"></i>
        <h2 class="title p-0 m-2">Ingrese su código de verificación</h2>
        <p>Hemos enviado un código de verificación a su correo electrónico de registro</p>
      </div>
      <form>
        <icon-input title="Código de verificación">
          <template v-slot:icon>
            <i class="fas fa-pencil-alt icon"></i>
          </template>
          <template v-slot:input_value>
            <input class="input-field" type="text" v-model="code" />
          </template>
        </icon-input>
        <div class="login_submit mt-2">
          <button type="button" class="login-button" @click="enviarCodigo">Verificar</button>
          <div class="m-0">
            <div class="m-0 d-flex justify-content-center p-0 mt-3">
              <label class="m-0 p-0 text-dark">¿No recibiste el codigo de vérificación?</label>
            </div>
            <div class="m-0 d-flex justify-content-center">
              <label class="m-2" style="color:#ed981a" @click="resend" >Reenviar Código</label>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import IconInput from "@/components/IconInput";
import _ from "lodash";

export default {
  props:["email"],
  components: {
    IconInput
  },
  data() {
    return {
      code: ""
    };
  },
  methods: {
    enviarCodigo() {
      if (_.isEmpty(this.code)) this.dangerToast("Datos vacios");
      else this.$emit("enviarCodigo", this.code);
    },
    resend(){
      this.infoToast("Reenviando condigo");
      this.$emit("enviarEmail", this.email);
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