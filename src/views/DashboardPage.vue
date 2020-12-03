<template>
  <dashboard-layout class=" h-100">
    
      <b-row class="h-100">
        <b-col cols="2 p-0 ">
          <lateral-menu></lateral-menu>
        </b-col>
        <b-col cols="10">
          <router-view></router-view>
        </b-col>
      </b-row>
    
  </dashboard-layout>
</template>

<script>
import DashboardLayout from "@/layouts/DashboardLayout.vue";

import LateralMenu from "@/components/menu/LateralMenu";

export default {
  name: "Dashboard",
  components: {
    DashboardLayout,
    LateralMenu
  },
  data() {
    return {
      parentHeight: 0
    };
  },
  async created() {
    // console.log(await wordService.getPokemones())
  },

  mounted() {
    this.parentHeight = this.$parent.$el.offsetHeight;
    console.log(this.$parent)
  }
};
</script>

<style>
.a{
  background: "red";
}
</style>