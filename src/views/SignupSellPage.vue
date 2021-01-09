<template>
  <div>
   <partial-layout>
      <div class="customer_login mt-32">
        <div class="container">
          <div class="row justify-content-center">
            <signup-sell></signup-sell>
          </div>
        </div>
      </div>
    </partial-layout>
  </div>
</template>

<script>
import PartialLayout from "@/layouts/PartialLayout.vue";
import SignupSell from "@/components/signup/SignupSell";

export default {
  name: "LoginPage",
  components: {
    PartialLayout,
    SignupSell
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