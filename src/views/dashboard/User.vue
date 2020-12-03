<template>
  <!-- rol de usuario -->
  <section>
    <b-container>
      <b-row>
        <b-col cols="10" class="m-auto p-2 w-100">
          <div class="account_form">
            <b-row>
              <b-col cols="1"></b-col>
              <b-col cols="4" class="text-center">
                <b-img :src="user.avatar" fluid alt="Responsive image"></b-img>
              </b-col>

              <b-col cols="6" class="align-self-center">
                <b-row class="justify-content-center">
                  <b-col cols="10" class="d-flex border m-2">
                    <div class="m-1">
                      <i class="fas fa-user icon mr-2"></i>
                      <span>Nombre</span>
                    </div>
                    <div class="m-1 ml-2">
                      <span>{{user.displayName}}</span>
                      <i class="fas fa-pencil-alt icon m-1"></i>
                    </div>
                  </b-col>
                </b-row>
                <b-row class="justify-content-center">
                  <b-col cols="10" class="d-flex border m-2">
                    <div class="m-1">
                      <i class="fas fa-key icon mr-2"></i>

                      <span>Contraseña</span>
                    </div>
                    <div class="m-1 ml-2">
                      <span>*******</span>
                      <i class="fas fa-pencil-alt icon m-1"></i>
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
              <b-col cols="1"></b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState(["user"]),
    ...mapGetters([])
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