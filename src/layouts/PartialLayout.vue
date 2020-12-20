<template>
  <div class="partial-layout">
    <header-partial>
      <template v-slot:header_middle>
        <header-middle>
          <h1 class="display-4">{{title}}</h1>
        </header-middle>
      </template>
    </header-partial>
    <main class="main">
      <slot></slot>
    </main>
  </div>
</template>

<script>
import HeaderPartial from "@/partials/HeaderPartial.vue";
import HeaderMiddle from "@/partials/header/HeaderMiddle";
export default {
  components: {
    HeaderPartial,
    HeaderMiddle
  },
  props: ["title"]
};
</script>

<style>
</style>