<template>
  <!-- rol de usuario -->
  <section>
    <b-container>
      <b-row>
        <b-col cols="10" class="m-auto p-2 w-100">
          <div class="account_form">
            <b-row>
              <b-col cols="4" class="text-center m-auto">
                <b-img :src="user.avatar" fluid alt="Responsive image" @click="show_crop=true"></b-img>
              </b-col>

              <b-col cols="8" class="align-self-center">
                <b-row class="justify-content-center">
                  <b-col cols="11" class="d-flex m-2 align-items-center pt-3 pb-3 pl-5 box-data">
                    <div class="span-data">
                      <i class="fas fa-user icon mr-2"></i>
                      <span>Nombre</span>
                    </div>
                    <div class="input-data">
                      <div v-if="inputData" class="w-100 ml-3">
                        <span>
                          <b>{{user.displayName}}</b>
                        </span>
                        <i class="fas fa-pencil-alt icon ml-3" @click="changeToInput"></i>
                      </div>
                      <div v-else class="d-flex align-items-center w-100 ml-2">
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
                        <i class="fas fa-save icon ml-2" @click="saveNewName"></i>
                      </div>
                    </div>
                  </b-col>
                </b-row>
                <b-row class="justify-content-center" v-if="user.method == 'normal'">
                  <b-col cols="11" class="d-flex m-2 align-items-center pt-3 pb-3 pl-5 box-data">
                    <div class="span-data">
                      <i class="fas fa-key icon mr-2"></i>
                      <span>Contraseña</span>
                    </div>
                    <div class="input-data">
                      <div v-if="inputDataPasswod" class="w-100 ml-3">
                        <span>
                          <b>******</b>
                        </span>
                        <i
                          class="fas fa-pencil-alt icon ml-3"
                          @click="inputDataPasswod = !inputDataPasswod"
                        ></i>
                      </div>
                      <div v-else class="d-flex align-items-center w-100 ml-2">
                        <icon-input>
                          <template v-slot:input_value>
                            <input class="input-field" type="password" v-model="password" />
                          </template>
                        </icon-input>
                        <i class="fas fa-save icon ml-2" @click="saveNewPassword"></i>
                      </div>
                    </div>
                  </b-col>
                </b-row>
                <b-row class="justify-content-center">
                  <b-col cols="11" class="d-flex m-2 align-items-center pt-3 pb-3 pl-5 box-data">
                    <div class="span-data">
                      <i class="fas fa-map-marker-alt icon mr-2"></i>
                      <span>Radio de busqueda</span>
                    </div>
                    <div class="input-data">
                      <div v-if="inputDataRadio" class="w-100 ml-3">
                        <span>
                          <b>{{user.distance}}</b>
                        </span>
                        <i class="fas fa-pencil-alt icon ml-3" @click="changeToInputRadio"></i>
                      </div>
                      <div v-else class="d-flex align-items-center w-100 ml-2">
                        <div class="input-group">
                          <input
                            type="number"
                            class="form-control w-50 text-center p-0"
                            v-model="radio"
                          />
                          <div class="input-group-append ml-1">
                            <button
                              class="btn btn-outline-secondary rounded"
                              type="button"
                              @click="radio--"
                            >-</button>
                            <button
                              class="btn btn-outline-secondary rounded"
                              type="button"
                              @click="radio++"
                            >+</button>
                          </div>
                        </div>
                        <i class="fas fa-save icon ml-2" @click="saveNewRadio"></i>
                      </div>
                    </div>
                  </b-col>
                </b-row>
                <b-row class="justify-content-center">
                  <b-col cols="11" class="d-flex m-2  pt-3 pb-3 pl-5 box-data flex-column">
                    <div class="d-flex align-self-baseline">
                      <div class="m-1">
                        <i class="fas fa-user-tag icon mr-2"></i>

                        <span>Rol:</span>
                      </div>
                      <div class="m-1 ml-2">
                        <span>Comprador</span>
                        <span class="m-2">/</span>
                        <span>Vendedor</span>
                      </div>
                    </div>

                    <div style="margin-left:90px">
                      <router-link to="/signup/sell">Ser Vendedor</router-link>
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
  changePassword,
  changeDistance
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
      inputDataRadio: true,
      displayName: "",
      password: "",
      radio: ""
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
      try {
        let { status, data } = await changeDisplayname(
          this.displayName,
          this.user
        );
        if (status == 201) {
          await this.$store.commit("set_name", this.displayName);
          this.inputData = !this.inputData;
          this.succesToast("Nombre modificado");
        } else this.dangerToast(data);
      } catch (error) {
        this.dangerToast("Error en el servidor");
      }
    },
    async saveNewPassword() {
      if (this.password > 6) {
        try {
          let { status, data } = await changePassword(
            this.user.email,
            this.password
          );
          if (status === 201) {
            this.succesToast("Contraseña Guardada");
            this.inputDataPasswod = !this.inputDataPasswod;
          } else this.dangerToast(data.error || "Error en el servidor");
        } catch (err) {
          this.dangerToast("Error en el servidor");
        }
      } else {
        if (this.password > 0)
          this.dangerToast("Contraseña debe tener un minimo de 6 caracteres");
        this.inputDataPasswod = !this.inputDataPasswod;
      }
    },
    changeToInputRadio() {
      this.inputDataRadio = !this.inputDataRadio;
      this.radio = this.user.distance;
    },
    async saveNewRadio() {
      try {
        let { status, data } = await changeDistance(this.radio, this.user);
        if (status == 201) {
          await this.$store.commit("set_distance", this.radio);
          this.inputDataRadio = !this.inputDataRadio;
          this.succesToast("Radio modificado");
        } else this.dangerToast(data);
      } catch (error) {
        this.dangerToast("Error en el servidor");
      }
    }
  }
};
</script>

<style scoped lang="scss">
.form-group {
  margin: 1rem;
}
.account_form {
  width: 90%;
  padding: 1rem;
}
.input-data {
  width: 60%;
}

.span-data {
  width: 35%;
}
.account_form button {
  height: auto;
  /* height: auto;
  padding: 0; */
  /* border:solid 1px black; */
  border-radius: 0px;
  margin: 0;
}
.span-data {
  height: 40px;
  display: flex;
  align-items: center;
  // background: black;
  /* height: auto;
  padding: 0; */
  /* border:solid 1px black; */
  // border-radius: 0px;
  // margin: 0;
}

.box-data {
  border: 1px solid #ed981a;
}
</style>