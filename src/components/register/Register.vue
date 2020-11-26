<template>
  <!--register area start-->
  <div class="col-lg-6 col-md-6">
    <div class="account_form">
      <div class="header-form text-center">
        <div class="text-center content-avatar" @click="show=true">
          <img v-if="!avatar.length" src="assets/img/logo.png" alt="logo" />
          <img v-else :src="avatar" class="rounded-circle" alt="logo" />
          <div>
            <div class="content-icon">
              <i class="fas fa-plus icon-logo"></i>
            </div>
          </div>
        </div>
        <h2 class="title">Registrar para empezar</h2>
      </div>
      <form>
        <icon-input title="Nombre y Apellido">
          <template v-slot:icon>
            <i class="fas fa-pencil-alt icon"></i>
          </template>
          <template v-slot:input_value>
            <input class="input-field" type="text" v-model="displayName" />
          </template>
        </icon-input>

        <icon-input title="Correo">
          <template v-slot:icon>
            <i class="fas fa-envelope icon"></i>
          </template>
          <template v-slot:input_value>
            <ValidationProvider name="E-mail" rules="required|email" v-slot="{ errors }">
              <input class="input-field" type="text" v-model="email" />
              <span>{{ errors[0] }}</span>
            </ValidationProvider>
          </template>
        </icon-input>

        <icon-input title="Contraseña" @sendPassword="getPassword">
          <template v-slot:icon>
            <i class="fas fa-key icon"></i>
          </template>

          <template v-slot:input_value>
            <input class="input-field" type="text" v-model="password" />
          </template>
        </icon-input>

        <icon-input title="Repetir Contraseña">
          <template v-slot:icon>
            <i class="fas fa-key icon"></i>
          </template>
          <template v-slot:input_value>
            <input class="input-field" type="text" v-model="password_confirm" />
          </template>
        </icon-input>
        <div class="login_submit mt-2">
          <button type="button" @click="register">registrar</button>
        </div>
      </form>
    </div>
    <!--register area end-->
    <!-- Modal crop -->
    <modal-crop :show="show" @update="close_modal" @get_avatar="get_avatar"></modal-crop>
    <basic-modal
      :show="showCondiciones"
      @condiciones="condiciones"
      @modal-basic="showCondiciones = !showCondiciones"
      :text="textTerminosCondiciones"
      :title="'Términos y Condiciones'"
    ></basic-modal>
  </div>
</template>

<script>
import users from "@/services/app/users";
import ModalCrop from "@/components/register/ModalCrop";
import IconInput from "@/components/IconInput";
import BasicModal from "@/components/BasicModal";
import { ValidationProvider } from "vee-validate";
export default {
  name: "Register",
  components: { IconInput, ModalCrop, BasicModal, ValidationProvider },
  data() {
    return {
      show: false,
      showCondiciones: false,
      avatar: "",
      email: "",
      displayName: "",
      password: "",
      password_confirm: "",
      terminosCondiciones: false,
      textTerminosCondiciones:
        '1. Your use of the Service is at your sole risk. The service is provided on an "as is" and "as available" basis. 2. Support for Expo services is only available in English, via e-mail. 3. You understand that Expo uses third-party vendors and hosting partners to provide the necessary hardware, software, networking, storage, and related technology required to run the Service. 4. You must not modify, adapt or hack the Service or modify another website so as to falsely imply that it is associated with the Service, Expo, or any other Expo service. 5. You may use the Expo Pages static hosting service solely as permitted and intended to host your organization pages, personal pages, or project pages, and for no other purpose. You may not use Expo Pages in violation of Expo trademark or other rights or in violation of applicable law. Expo reserves the right at all times to reclaim any Expo subdomain without liability to you. 1. Your use of the Service is at your sole risk. The service is provided on an "as is" and "as available" basis. 2. Support for Expo services is only available in English, via e-mail. 3. You understand that Expo uses third-party vendors and hosting partners to provide the necessary hardware, software, networking, storage, and related technology required to run the Service. 4. You must not modify, adapt or hack the Service or modify another website so as to falsely imply that it is associated with the Service, Expo, or any other Expo service. 5. You may use the Expo Pages static hosting service solely as permitted and intended to host your organization pages, personal pages, or project pages, and for no other purpose. You may not use Expo Pages in violation of Expo trademark or other rights or in violation of applicable law. Expo reserves the right at all times to reclaim any Expo subdomain without liability to you. 1. Your use of the Service is at your sole risk. The service is provided on an "as is" and "as available" basis. 2. Support for Expo services is only available in English, via e-mail. 3. You understand that Expo uses third-party vendors and hosting partners to provide the necessary hardware, software, networking, storage, and related technology required to run the Service. 4. You must not modify, adapt or hack the Service or modify another website so as to falsely imply that it is associated with the Service, Expo, or any other Expo service. 5. You may use the Expo Pages static hosting service solely as permitted and intended to host your organization pages, personal pages, or project pages, and for no other purpose. You may not use Expo Pages in violation of Expo trademark or other rights or in violation of applicable law. Expo reserves the right at all times to reclaim any Expo subdomain without liability to you.'
    };
  },
  methods: {
    register() {
      //validar datos
      //mostrar condiciones
      this.showCondiciones = true;
    },

    get_avatar(id) {
      this.avatar = id;
    },
    close_modal(id) {
      this.show = id;
    },
    condiciones(value) {
      //si value es true
      //registrar usuario
    },
    getPassword(value) {
      console.log("dd", value);
      this.password = value;
    }
  }
};
</script>


<style scoped>
.title {
  padding: 15px;
  font-weight: bolder;
}
.content-avatar {
  display: flex;
  margin: auto;
  width: 40%;
  border: solid #ed981a 1px;
  border-radius: 50%;
}

.content-icon {
  border-radius: 50%;
  position: relative;
  left: -130%;
  background: #ed981a;
  top: 70%;
}

.icon-logo {
  font-size: 25px;
  padding: 15px;
}
/* .input-field {
  width: 100%;
  padding: 10px;
  padding-left: 25px;
  text-align: left;
} */
</style>





