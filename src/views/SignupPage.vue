<template>
  <div>
   <partial-layout>
      <div class="customer_login mt-32">
        <div class="container">
          <div class="row justify-content-center">
            <signup></signup>
          </div>
        </div>
      </div>
    </partial-layout>
  </div>
</template>

<script>
import PartialLayout from "@/layouts/PartialLayout.vue";
import Signup from "@/components/signup/Signup";

export default {
  name: "LoginPage",
  components: {
    PartialLayout,
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