<template>
  <b-modal
    v-model="showModal"
    id="modal-scrollable"
    scrollable
    title="Scrollable Content"
    size="lg"
    
  >
    <div slot="modal-title">{{title}}</div>
    {{text}}
    <div slot="modal-footer" class="modal-footer account_form">
      <!-- <div class="d-flex"> -->

      <button>Aceptar</button>
      <button style="background-color:#b2b2b2">Cancelar</button>
      <!-- </div> -->
    </div>
  </b-modal>
</template>
  
<script>
export default {
  props: ["show", "text", "title"],
  data() {
    return {};
  },
  computed: {
    showModal: {
      get: function() {
        return this.show;
      },
      set: function(newValue) {
        this.$emit("modal-basic", newValue);
      }
    }
  }
};
</script>

<style>
.modal-header {
  justify-content: center;
  font-weight: bold;
  color: #ed981a;
  font-size: 17px;
  line-height: 17px;
  margin-bottom: 10px;
}
.modal-body {
  text-align: justify;
  font-size: 15px;
}
.modal-footer {
  width: 100%;
  justify-content: space-around;
}
.modal-footer button {
  width: 40%;
}
</style>