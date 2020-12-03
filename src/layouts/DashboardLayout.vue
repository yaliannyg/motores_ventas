<template>
  <div class="dashboard-layout">
    <b-container fluid class="m-0 p-0 h-100">
      <b-row class="h-25 m-0 p-0">
        <b-col class="p-0 m-0">
          <header-partial ref="header_top">
            <template v-slot:header_top>
              <header-top :user="user">
                <template v-slot:menu>
                  <div class="col-lg-6 col-md-6" ref="main_menu">
                    <main-menu :user="user" :color="'#000'"></main-menu>
                  </div>
                </template>
              </header-top>
            </template>
          </header-partial>
        </b-col>
      </b-row>
      <b-row class="h-75 m-0 p-0">
      <b-col class="p-0 m-0">
          <main class="main">
            <slot></slot>
          </main>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import HeaderPartial from "@/partials/HeaderPartial.vue";
import HeaderTop from "@/partials/header/HeaderTop";
import MainMenu from "@/components/menu/MainMenu";
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      leftColStyles: ""
    };
  },
  components: {
    HeaderTop,
    HeaderPartial,
    MainMenu
  },
  computed: {
    ...mapState(["user"])
  },
  created() {
    // leftColStyles= window.innerHeight -
  }
};
</script>

<style scoped>
</style>