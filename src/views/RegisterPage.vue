<template>
  <div>
    <default-layout>
      <div class="customer_login mt-32">
        <div class="container">
          <div class="row justify-content-center">
            <register></register>
            
          </div>
        </div>
      </div>
    </default-layout>
  </div>
</template>

<script>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import Register from "@/components/register/Register";

export default {
  name: "LoginPage",
  components: {
    DefaultLayout,
    Register
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