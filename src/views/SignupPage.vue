<template>
  <div>
    <default-layout>
      <div class="customer_login mt-32">
        <div class="container">
          <div class="row justify-content-center">
            <signup></signup>
            
          </div>
        </div>
      </div>
    </default-layout>
  </div>
</template>

<script>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import Signup from "@/components/signup/Signup";

export default {
  name: "LoginPage",
  components: {
    DefaultLayout,
    Signup
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