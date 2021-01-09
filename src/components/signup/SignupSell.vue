<template>
  <!--signup area start-->
  <div class="col-lg-6 col-md-6">
    <div class="account_form pt-2">
      <div class="header-form text-center">
        <div class="text-center content-avatar" @click="show=true">
          <img v-if="!avatar.length" src="@/assets/img/logo.png" alt="logo" />
          <img v-else :src="avatar" class="rounded-circle" alt="logo" />
          <div>
            <div class="content-icon">
              <i class="fas fa-plus icon-logo"></i>
            </div>
          </div>
        </div>
        <h2 class="title">Registro de Tienda</h2>
      </div>
      <ValidationObserver v-slot="{ invalid, errors }">
        <form v-on:submit.prevent="onSubmit">
          <icon-input title="Nombre">
            <template v-slot:icon>
              <i class="fas fa-pencil-alt icon"></i>
            </template>
            <template v-slot:input_value>
              <ValidationProvider name="Nombre" rules="alpha_spaces" v-slot="{ errors }">
                <input class="input-field" type="text" v-model="name" />
                <span class="text-danger">{{ errors[0]? "Nombre Invalido": "" }}</span>
              </ValidationProvider>
            </template>
          </icon-input>

          <icon-input title="Rif">
            <template v-slot:icon>
              <b-form-select
                v-model="selected"
                :options="options"
                style="width:13%; border-radius:0;vertical-align:baseline; font-weight:bolder; padding-left:4%"
              ></b-form-select>
            </template>
            <template v-slot:input_value>
              <ValidationProvider name="Rif" rules="numeric" v-slot="{ errors }">
                <input class="input-field" style="width:87%" type="number" v-model="rif" />
                <span class="text-danger">{{ errors[0] }}</span>
              </ValidationProvider>
            </template>
          </icon-input>

          <icon-input title="N de Telefono">
            <template v-slot:icon>
              <i class="fas fa-phone icon"></i>
            </template>
            <template v-slot:input_value>
              <ValidationProvider name="Telefono" rules="numeric" v-slot="{ errors }">
                <input class="input-field" type="number" v-model.number="telefono" />
                <span class="text-danger">{{ errors[0] }}</span>
              </ValidationProvider>
            </template>
          </icon-input>

          <icon-input title="Ubicacion">
            <template v-slot:icon>
              <i class="fas fa-map-marker-alt icon" @click="showModal=!showModal"></i>
            </template>
            <template v-slot:input_value>
              <ValidationProvider name="Ubicacion" v-slot="{ errors }">
                <input class="input-field" type="text" v-model="ubicacion" />
                <span class="text-danger">{{ errors[0] }}</span>
              </ValidationProvider>
            </template>
          </icon-input>

          <icon-input title="Captcha" addClass="d-flex">
            <template v-slot:icon>
              <img :src="captchaImg" alt="logo" />
            </template>
            <template v-slot:input_value>
              <ValidationProvider name="Captcha" v-slot="{ errors }" class="w-100">
                <input class="input-field" type="text" v-model="captcha" />
                <span class="text-danger">{{ errors[0] }}</span>
              </ValidationProvider>
            </template>
          </icon-input>
          <div class="login_submit mt-2">
            <button type="submit" @click="condiciones(invalid, errors)">registrar</button>
          </div>
        </form>
      </ValidationObserver>
    </div>
    <!--signup area end-->
    <!-- Modal crop -->
    <modal-crop :show="show" @update="close_modal" @get_avatar="get_avatar"></modal-crop>
    <b-modal v-model="showModal" id="modal-scrollable" scrollable title="Ubicacion" size="lg">
      {{"text"}}
      <div slot="modal-footer" class="modal-footer account_form">
        <button>Cancelar</button>
        <button>Aceptar</button>
      </div>
    </b-modal>
  </div>
</template>

<script>
import ModalCrop from "@/components/signup/ModalCrop";
import IconInput from "@/components/IconInput";
import BasicModal from "@/components/BasicModal";
import { singup, login, getCaptcha, sellerSignup } from "@/services/app/users";
import { mapState, mapGetters } from "vuex";
import _ from "lodash";

export default {
  name: "Signup",
  components: { IconInput, ModalCrop, BasicModal },
  async created() {
    let error = "";
    try {
      let { status, data } = await getCaptcha(this.user);

      if (status === 200) {
        this.captchaImg = data.image;
        this.cookie = data.cookie;
      } else {
        error = data.error;
      }
    } catch (err) {
      error = "Error en el servidor";
    } finally {
      if (error === "" || error === undefined) return;
      this.dangerToast(error);
    }
  },
  computed: {
    ...mapState(["user"])
  },
  data() {
    return {
      selected: "V",
      options: [
        { value: "V", text: "V" },
        { value: "J", text: "J" },
        { value: "E", text: "E" }
      ],
      show: false,
      showModal: false,
      avatar: "",
      rif: "",
      name: "",
      telefono: "",
      ubicacion: "",
      captchaImg: "",
      captcha: "",
      cookie: ""
    };
  },
  methods: {
    d() {
      console.log("d");
    },
    condiciones(invalidForm, errors) {
      if (invalidForm) this.dangerToast("Datos invalidos");
      else if (
        _.isEmpty(this.name) ||
        _.isEmpty(this.rif) ||
        _.isEmpty(this.telefono.toString()) ||
        _.isEmpty(this.captcha)
      )
        this.dangerToast("Datos vacios");
      else if (_.isEmpty(this.avatar)) {
        this.dangerToast("Avatar es requerido");
      } else this.signup();
    },
    get_avatar(id) {
      this.avatar = id;
    },
    close_modal(id) {
      this.show = id;
    },
    async signup() {
      let avatar = this.DataURIToBlob(this.avatar);

      let sellerProperties = {
        name: this.name,
        rifCode: this.selected,
        rif: this.rif,
        telefono: this.telefono,
        latitude: "-64.6807552",
        longitude: "10.2039552",
        avatar: avatar,
        captcha: this.captcha,
        cookie: this.cookie
      };
      let { status, data } = await sellerSignup(sellerProperties, this.user);
      if (status === 201) {
        await this.$store.commit("set_seller", data);
        await this.$store.commit("set_status_seller", "sent");
        this.$router.push("/sellerDashboard");
      } else {
        this.dangerToast(data.error);
      }
    },
    DataURIToBlob(dataURI) {
      var binary = atob(dataURI.split(",")[1]);
      var array = [];
      for (var i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
      }
      return new Blob([new Uint8Array(array)], { type: "image/jpeg" });
    }
  }
};
</script>


<style scoped>
.account_form {
  position: relative;
  top: -15%;
}
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
</style>

