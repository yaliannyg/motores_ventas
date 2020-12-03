<template>
  <div class="default-layout">
    <!-- <header-partial></header-partial> -->
    <header-partial>
      <template v-slot:header_top>
        <header-top :user="user">
          <template v-slot:menu>
            <social></social>
          </template>
        </header-top>
      </template>
      <template v-slot:header_middle>
        <header-middle>
          <middle-content></middle-content>
        </header-middle>
      </template>
      <template v-slot:header_bottom>
        <div class="header_bottom bottom_four sticky-header">
          <main-menu :user="user"></main-menu>
        </div>
      </template>
    </header-partial>
    <main class="main">
      <slot></slot>
    </main>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import HeaderPartial from "@/partials/HeaderPartial.vue";
import HeaderTop from "@/partials/header/HeaderTop";
import HeaderMiddle from "@/partials/header/HeaderMiddle";
import MiniCart from "@/partials/header/MiniCart";
import MainMenu from "@/components/menu/MainMenu.vue";
import MiddleContent from "@/components/content/MiddleContent";
import DiscountArea from "@/partials/header/DiscountArea";
import Social from "@/components/menu/Social";

export default {
  name: "DefaultLayout",

  components: {
    HeaderPartial,
    HeaderTop,
    HeaderMiddle,
    MiniCart,
    MainMenu,
    MiddleContent,
    DiscountArea,
    Social
  },
  computed: {
    ...mapState(["user"])
  }
};
</script>