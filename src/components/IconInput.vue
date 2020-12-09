<template>
  <div>
    <label>
      {{title}}
      <span>*</span>
    </label>
    <div class="input-icons">
      <slot name="icon"></slot>

      <slot name="input_value"></slot>
      <slot name="helper_value"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "validation", "name"],
  data() {
    return {
      password: ""
    };
  },
  methods: {
    sendPassword(value) {
      this.$emit("sendPassword", this.password);
    }
  }
};
</script>

<style scoped>

.input-icons i {
  position: absolute;
}

.input-icons {
  width: 100%;
}

.icon {
  padding: 10px;
  min-width: 50px;
}
</style>