<template>
  <header class="header_area header_padding">
    <slot name="header_top"></slot>
    <slot name="header_middle"></slot>
    <slot name="mini_cart"></slot>
    <slot name="header_bottom"></slot>
    <slot name="discount_area"></slot>

   
  </header>
</template>

<script>
import { mapState, mapGetters } from "vuex";


import HeaderTop from "@/partials/header/HeaderTop";
import HeaderMiddle from "@/partials/header/HeaderMiddle";
import MiniCart from "@/partials/header/MiniCart";

export default {
  components: {
    HeaderTop,
    HeaderMiddle,
    MiniCart
  },
  computed: {
    ...mapState(["user"]),
    ...mapGetters([])
  },
  methods: {
 
  }
};
</script>

<style>
</style>