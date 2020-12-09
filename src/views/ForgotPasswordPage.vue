<template>
  <div>
    <partial-layout>
      <div class="customer_login mt-32">
        <div class="container">
          <div class="row justify-content-center">
            <forgot-password></forgot-password>
          </div>
        </div>
      </div>
    </partial-layout>
  </div>
</template>

<script>
import ForgotPassword from "@/components/forgotPassword/ForgotPassword";
import PartialLayout from "@/layouts/PartialLayout.vue";
export default {
  components: {
    PartialLayout,
    ForgotPassword
  }
};
</script>

<style>
</style>