<template>
  <div class="w-100">
    <label v-if="title">
      {{title}}
      <span>*</span>
    </label>
    <div class="input-icons" :class="addClass">
      <slot name="icon"></slot>

      <slot name="input_value" :class="getWidth"></slot>
      <slot name="helper_value"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "validation", "name", "addClass"],
  data() {
    return {
      password: ""
    };
  },
  computed:{
    getWidth(){
      return this.addClass? 'w-100':''
    }
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