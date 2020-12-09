<template>
  <send-email v-if="change === 1" @enviarEmail="enviarEmail"></send-email>
  <send-code
    v-else-if="change === 2"
    @enviarCodigo="comprobarCodigo"
    :email="this.email"
    @updatePassword="cambiarPassword"
  ></send-code>
  <change-password v-else-if="change === 3" @updatePassword="cambiarPassword"></change-password>
</template>

<script>
import SendEmail from "@/components/forgotPassword/SendEmail";
import SendCode from "@/components/forgotPassword/SendCode";
import ChangePassword from "@/components/forgotPassword/ChangePassword";
import { sendEmail, sendCode, changePassword } from "@/services/app/users";

export default {
  components: {
    SendEmail,
    SendCode,
    ChangePassword
  },
  data() {
    return {
      change: 1,
      email: ""
    };
  },
  methods: {
    async enviarEmail(email) {
      try {
        console.log(email);
        let { status, data } = await sendEmail(email);
        if (status === 201) {
          this.email = email;
          this.change = 2;
        } else this.dangerToast(data.error || "Error en el servidor");
      } catch (error) {
        this.dangerToast("Error en el servidor");
      }
    },
    async comprobarCodigo(code) {
      console.log(code);

      try {
        let { status, data } = await sendCode(this.email, code);
        if (status === 200) {
          console.log(data);
          this.change = 3;
        } else this.dangerToast(data.error || "Error en el servidor");
      } catch (err) {
        this.dangerToast("Error en el servidor");
      }
    },
    async cambiarPassword(pass) {
      console.log(this.email, "pass");
      let email = this.email;
      let password = pass;
      try {
        let { status, data } = await changePassword(email, password);
        if (status === 201) {
          this.succesToast("Contraseña Restablecida");
          this.change = 1;
          this.$router.push("/login");
        } else this.dangerToast(data.error || "Error en el servidor");
      } catch (err) {
        this.dangerToast("Error en el servidor");
      }
    }
  }
};
</script>

<style>
</style>