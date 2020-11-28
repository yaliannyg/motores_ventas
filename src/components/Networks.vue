<template>
  <div class="container border w-50">
     
    <div class="row align-items-center">
      <div class="col-6 p-0 text-right">
        <span>Inicia sesion con:</span>
      </div>
      <div class="col-6 d-flex justify-content-between">
        <span to="/" @click="google" class="m-1">
          <img src="../assets/img/icon/google.png" width="100%"/>
        </span>
        <span to="/" @click="facebook" class="m-1">
          <img src="../assets/img/icon/facebook.png" width="100%"/>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    google () {
      console.log("google")
      this.dangerToast("error")
    },
    facebook () {
      console.log("facebook")
    }
  }
};
</script>

<style>
</style>