<template>
  <div>
    <default-layout ></default-layout>
  </div>
</template>

<script>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
// import Login from '@/components/Login.vue'


export default {
  name: "Home",
  components: {
    DefaultLayout
  },
  data() {
    return {
      list: []
    };
  },
  async created() {
    // console.log(await wordService.getPokemones())
  },
  methods: {

  }
};
</script>

<style>
</style>