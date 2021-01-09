<template>
  <div>
    <partial-layout>
      <div class="customer_login mt-32">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6 col-md-6">
              <login @loadPage="loadPage"></login>
            </div>
            <b-overlay :show="loading" no-wrap style="inset:-200px"></b-overlay>
          </div>
        </div>
      </div>
    </partial-layout>
  </div>
</template>

<script>
import PartialLayout from "@/layouts/PartialLayout.vue";
import Login from "@/components/login/Login";

export default {
  name: "LoginPage",
  components: {
    PartialLayout,
    Login
    // Register
  },
  data() {
    return {
      email: "",
      name: "",
      password: "",
      loading: false
    };
  },
  methods:{
    loadPage(value){
      
      this.loading= value
    }
  }
};
</script>

<style lang="scss">
// .b-overlay {
//   inset: -200px;
// }
</style>