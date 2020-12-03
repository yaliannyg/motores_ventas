<template>
  <!--header top start-->
  <div class="header_top">
    <div class="container">
      <div class="top_inner">
        <div class="row align-items-center">
          <slot name="menu"></slot>
          <div class="col-lg-6 col-md-6">
            <div v-if="user.email" class="top_right text-right">
              <ul>
                <li class="top_links">
                  <a href="#">
                    <!-- <i class="ion-android-person"></i> Mi Cuenta -->
                    <b-img
                      class="m-1"
                      :src="user.avatar"
                      rounded="circle"
                      alt="Right-rounded image"
                      width="50px"
                    ></b-img>
                    {{user.displayName}}
                    <i class="ion-ios-arrow-down"></i>
                  </a>
                  <ul class="dropdown_links">
                    <li>
                      <a href="#" @click="logout">logout</a>
                    </li>
                    <li>
                      <router-link to="/dashboard">Dashboard</router-link>
                    </li>
                    <li>
                      <a href="wishlist.html">Favoritos</a>
                    </li>
                  </ul>
                </li>
                <li class="currency">
                  <a href="#">
                    $ USD
                    <i class="ion-ios-arrow-down"></i>
                  </a>
                  <ul class="dropdown_currency">
                    <li>
                      <a href="#">USD – Dolar</a>
                    </li>
                    <li>
                      <a href="#">Bs – Bolivares</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div v-else class="top_right text-right">
              <ul>
                <li class="top_links">
                  <router-link to="/login">
                    <i class="ion-android-person"></i>
                    Login
                  </router-link>
                </li>
                <li class="currency">
                  <a href="#">
                    $ USD
                    <i class="ion-ios-arrow-down"></i>
                  </a>
                  <ul class="dropdown_currency">
                    <li>
                      <a href="#">USD – Dolar</a>
                    </li>
                    <li>
                      <a href="#">Bs – Bolivares</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--header top start-->
</template>

<script>
// import { mapActions } from "vuex";
import { logout } from "@/services/app/users";
export default {
  props: ["user"],
  methods: {
    // ...mapActions(["logout"]),
    async logout() {
      console.log("logout");
      let { status } = await logout(this.user.token);

      if (status === 201) {
        localStorage.removeItem("user");
        this.$store.commit("set_user", {});
        this.$router.push("/login");
      } else this.dangerToast("Error en el servidor");
    }
  }
};
</script>

<style>
</style>