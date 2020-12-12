<template>
  <!-- rol de usuario -->
  <section>
    <b-container>
      <b-row>
        <b-col cols="10" class="m-auto p-2 w-100">
          <div class="account_form">
            <b-row>
              <!-- <b-col cols="1"></b-col> -->
              <b-col cols="4" class="text-center">
                <b-img :src="user.avatar" fluid alt="Responsive image" @click="show_crop=true"></b-img>
              </b-col>

              <b-col cols="8" class="align-self-center">
                <b-row class="justify-content-center">
                  <b-col cols="10" class="d-flex border m-2 align-items-center p-3">
                    <div class>
                      <i class="fas fa-user icon mr-2"></i>
                      <span>Nombre</span>
                    </div>
                    <div class="ml-2 w-75">
                      <div v-if="inputData" class="w-100">
                        <span>{{user.displayName}}</span>
                        <i class="fas fa-pencil-alt icon" @click="changeToInput"></i>
                      </div>
                      <div v-else class="d-flex align-items-center w-100">
                        <icon-input>
                          <template v-slot:input_value>
                            <ValidationProvider
                              name="Nombre y Apellido"
                              rules="alpha_spaces"
                              v-slot="{ errors }"
                            >
                              <input class="input-field" type="text" v-model="displayName" />
                              <span
                                class="text-danger"
                              >{{ errors[0]? "Nombre y Apellido Invalido": "" }}</span>
                            </ValidationProvider>
                          </template>
                        </icon-input>
                        <i class="fas fa-save icon ml-3" @click="saveNewName"></i>
                      </div>
                    </div>
                  </b-col>
                </b-row>
                <b-row class="justify-content-center">
                  <b-col cols="10" class="d-flex border m-2 align-items-center p-3">
                    <div>
                      <i class="fas fa-key icon mr-2"></i>

                      <span>Contraseña</span>
                    </div>
                    <div class="ml-2 w-75">
                      <div v-if="inputDataPasswod" class="w-100">
                        <span>******</span>
                        <i class="fas fa-key icon mr-2" @click="inputDataPasswod = !inputDataPasswod"></i>
                      </div>
                      <div v-else class="d-flex align-items-center w-100">
                        <icon-input>
                          <template v-slot:input_value>
                            <input class="input-field" type="password" v-model="password" />
                          </template>
                        </icon-input>
                        <i class="fas fa-save icon ml-3" @click="saveNewPassword"></i>
                      </div>
                    </div>
                  </b-col>
                </b-row>
                <b-row class="justify-content-center">
                  <b-col cols="10" class="d-flex border m-2">
                    <div class="m-1">
                      <i class="fas fa-user-tag icon mr-2"></i>

                      <span>Rol:</span>
                    </div>
                    <div class="m-1 ml-2">
                      <b-link>Comprador</b-link>
                      <span class="m-2">/</span>
                      <b-link>Vendedor</b-link>
                    </div>
                  </b-col>
                </b-row>
              </b-col>
              <!-- <b-col cols="1"></b-col> -->
            </b-row>
          </div>
        </b-col>
      </b-row>

      <modal-crop :show="show_crop" @update="close_modal" @get_avatar="get_avatar"></modal-crop>
    </b-container>
  </section>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import ModalCrop from "@/components/signup/ModalCrop";
import {
  changeAvatar,
  changeDisplayname,
  changePassword
} from "@/services/app/users";
import IconInput from "@/components/IconInput";
export default {
  components: {
    ModalCrop,
    IconInput
  },
  computed: {
    ...mapState(["user"])
  },
  data() {
    return {
      show_crop: false,
      inputData: true,
      inputDataPasswod: true,
      displayName: "",
      password: ""
    };
  },
  methods: {
    DataURIToBlob(dataURI) {
      var binary = atob(dataURI.split(",")[1]);
      var array = [];
      for (var i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
      }
      return new Blob([new Uint8Array(array)], { type: "image/jpeg" });
    },
    close_modal(id) {
      this.show_crop = id;
    },
    async get_avatar(picture) {
      let avatar = this.DataURIToBlob(picture);
      let { status, data } = await changeAvatar(avatar, this.user);
      if (status == 201) {
        await this.$store.commit("set_avatar", data.avatar);
        this.succesToast("Avatar modificado");
      } else this.dangerToast(data);
    },
    changeToInput() {
      this.inputData = !this.inputData;
      this.displayName = this.user.displayName;
    },
    async saveNewName() {
      let { status, data } = await changeDisplayname(
        this.displayName,
        this.user
      );
      if (status == 201) {
        await this.$store.commit("set_name", this.displayName);
        this.inputData = !this.inputData;
        this.succesToast("Nombre modificado");
      } else this.dangerToast(data);
    },
    async saveNewPassword() {
      try {
        let { status, data } = await changePassword(
          this.user.email,
          this.password
        );
        if (status === 201) {
          this.succesToast("Contraseña Guardada");
          this.inputDataPasswod = !this.inputDataPasswod
        } else this.dangerToast(data.error || "Error en el servidor");
      } catch (err) {
        this.dangerToast("Error en el servidor");
      }
    }
  }
};
</script>

<style scoped>
.form-group {
  margin: 1rem;
}
.account_form {
  width: 90%;
  padding: 1rem;
}
</style>