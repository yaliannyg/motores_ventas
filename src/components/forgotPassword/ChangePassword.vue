<template>
  <div class="col-lg-6 col-md-6">
    <div class="account_form">
      <div class="text-center">
        <h3 class="p-3">Recuperar Contraseña</h3>

        <i class="fas fa-key icon-font"></i>
        <h2 class="title p-0 m-2">Ingrese su nueva contraseña</h2>
      </div>

      <ValidationObserver v-slot="{ invalid }">
        <form>
          <icon-input title="Contraseña">
            <template v-slot:icon>
              <i class="fas fa-key icon"></i>
            </template>
            <template v-slot:input_value>
              <ValidationProvider name="Contraseña" vid="confirmation" v-slot="{ errors }">
                <input class="input-field" type="password" v-model="password" />
                <span class="text-danger">{{ errors[0] }}</span>
              </ValidationProvider>
            </template>
          </icon-input>

          <icon-input title="Repetir Contraseña">
            <template v-slot:icon>
              <i class="fas fa-key icon"></i>
            </template>
            <template v-slot:input_value>
              <ValidationProvider
                name="Contraseña"
                rules="confirmed:confirmation"
                v-slot="{ errors }"
              >
                <input class="input-field" type="password" v-model="password_confirm" />
                <span class="text-danger">{{ errors[0] }}</span>
              </ValidationProvider>
            </template>
          </icon-input>
          <div class="login_submit mt-2">
            <button type="button" @click="changePassword(invalid)">Cambiar Contraseña</button>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import IconInput from "@/components/IconInput";

export default {
  components: {
    IconInput
  },
  data() {
    return { password: "", password_confirm: "" };
  },
  methods: {
    changePassword(invalid) {
      if (invalid) this.dangerToast("Datos invalidos");
      else if (_.isEmpty(this.password)) this.dangerToast("Datos vacios");
      else {
        console.log(this.password, "the tastes of my love");
        
        this.$emit("updatePassword", this.password);
      }
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