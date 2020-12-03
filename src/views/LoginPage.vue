<template>
  <div>
    <partial-layout>
      <div class="customer_login mt-32">
        <div class="container">
          <div class="row justify-content-center">
            <login></login>
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
      password: ""
    };
  }
};
</script>

<style>
</style>