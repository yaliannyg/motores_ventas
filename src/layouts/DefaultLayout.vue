<template>
  <div class="default-layout">
    <header-partial></header-partial>
    <main class="main">
      <slot></slot>
    </main>
  </div>
</template>

<script>
import HeaderPartial from "@/partials/HeaderPartial.vue";
export default {
  name: "DefaultLayout",

  components: {
    HeaderPartial
  }
};
</script>