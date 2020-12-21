<template>
  <div id="app" class="h-100">
    
    <router-view/>
  </div>
</template>

<script>
export default {
  created(){
    console.log(process.env.SERVER_ENV);
    
  }
  // beforeCreate (){
  //   let data = JSON.parse(localStorage.getItem('user'))
  //   console.log("data")
  //   if(data)
  //   this.$store.commit("set_user", data);
  // }

}
</script>

<style>

</style>

