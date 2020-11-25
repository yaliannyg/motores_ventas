<template>
  <my-upload
    langType="es-MX"
    v-model="showModal"
    @crop-success="cropSuccess"
    :width="300"
    :height="300"
    img-format="png"
  ></my-upload>
</template>

<script>
import myUpload from "vue-image-crop-upload";
export default {
  props: ["show"],
  components: {
    myUpload
  },
  data() {
    return {
      
      avatar: ""
    };
  },
  computed: {
    showModal: {
      get: function() {
        return this.show;
      },
      set: function(newValue) {
        this.$emit("update", newValue);
      }
    }
  },
  methods: {
    test() {
      console.log("a");
    },
    cropSuccess(imgDataUrl, field) {
      this.$emit("get_avatar", imgDataUrl);
    },
    /**
     * upload fail
     *
     * [param] status    server api return error status, like 500
     * [param] field
     */
    cropUploadFail(status, field) {
      console.log("-------- upload fail --------");
      console.log(status);
      console.log("field: " + field);
    }
  }
};
</script>

<style>
/* Modal Crop Styles */
.vue-image-crop-upload .vicp-wrap .vicp-operate a {
  color: #ed981a;
}

.vue-image-crop-upload
  .vicp-wrap
  .vicp-step2
  .vicp-crop
  .vicp-crop-left
  .vicp-range
  input[type="range"]::-webkit-slider-thumb {
  background-color: #ed981a;
}

.vue-image-crop-upload
  .vicp-wrap
  .vicp-step2
  .vicp-crop
  .vicp-crop-left
  .vicp-range
  input[type="range"]::-webkit-slider-runnable-track {
  background-color: #f9d7aae3;
}
.vue-image-crop-upload
  .vicp-wrap
  .vicp-step2
  .vicp-crop
  .vicp-crop-left
  .vicp-range
  input[type="range"]:focus::-webkit-slider-runnable-track {
  background-color: #ed982ebf;
}
</style>