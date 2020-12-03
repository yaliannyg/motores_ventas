<template>
  <!--header middel start-->
  <div class="header_middle">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-3 col-md-3">
          <div class="logo">
            <router-link to="/">
              <img src="assets/img/logo/logo-mv.png" alt="MotoresVentas" />
            </router-link>
          </div>
        </div>
        <slot></slot>
      </div>
    </div>
  </div>
  <!--header middel end-->
</template>

<script>
export default {};
</script>

<style>
</style>