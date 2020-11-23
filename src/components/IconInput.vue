<template>
  <div>
    <label>
      {{title}}
      <span>*</span>
    </label>
    <div class="input-icons">
         <slot name="icon"></slot>
      
      <input class="input-field" type="text" />
    </div>
  </div>
</template>

<script>
export default {
    props: ['title']
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

.input-field {
  width: 100%;
  padding: 10px;
  padding-left: 25px;
  text-align: left;
}
</style>