<template>
  <div>
    <default-layout>
      <div class="customer_login mt-32">
        <div class="container">
          <div class="row justify-content-center">
            <login></login>
            
          </div>
        </div>
      </div>
    </default-layout>
  </div>
</template>

<script>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import Login from "@/components/Login.vue";
// import Register from "@/components/Register.vue";

export default {
  name: "LoginPage",
  components: {
    DefaultLayout,
    Login,
    // Register
  },
  data () {
    return {
      email: '',
      name: '',
      password: ''
    }
  }
};
</script>

<style>
</style>