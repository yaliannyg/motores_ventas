<template>
  <!--register area start-->
  <div class="col-lg-6 col-md-6">
     <basic-modal></basic-modal>
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
        </icon-input>
        <icon-input title="Correo">
          <template v-slot:icon>
            <i class="fas fa-envelope icon"></i>
          </template>
        </icon-input>
        <icon-input title="Contraseña">
          <template v-slot:icon>
            <i class="fas fa-key icon"></i>
          </template>
        </icon-input>
        <icon-input title="Repetir Contraseña">
          <template v-slot:icon>
            <i class="fas fa-key icon"></i>
          </template>
        </icon-input>
        <div class="login_submit mt-2">
          <button>registrar</button>
        </div>
      </form>
    </div>
    <!--register area end-->
    <!-- Modal crop -->
    <modal-crop :show="show" @update="close_modal"  @get_avatar="get_avatar"></modal-crop>
   
  </div>
</template>

<script>
import users from "@/services/app/users";
import ModalCrop from "@/components/register/ModalCrop"
import IconInput from "@/components/IconInput";
import BasicModal from "@/components/BasicModal"

export default {
  name: "Register",
  components: { IconInput, ModalCrop, BasicModal },
  data() {
    return {
      show: false,
      avatar: '',
      email: "",
      displayName: "",
      password: "",
      password_confirm: ""
    };
  },
  methods: {
    register() {
      users.register(this.email, this.password, this.displayName);
    },

    get_avatar (id){
      
      this.avatar = id
    },
    close_modal (id) {
      this.show = id
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
</style>>


