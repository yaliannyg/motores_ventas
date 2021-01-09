<template>
  <b-modal
    v-model="showModal"
    id="modal-scrollable"
    scrollable
    title="Scrollable Content"
    size="lg"
    
  >
    <div slot="modal-title"><h3>{{title}}</h3></div>
    {{text}}
    <div slot="modal-footer" class="modal-footer account_form" >
      <!-- <div class="d-flex"> -->

      <button class="btn-cancel" @click="condiciones(false)" v-if="aceptar" @keyup.enter="condiciones(false)">Cancelar</button>
      <button @click="condiciones(true)" v-else >Aceptar</button>
      <!-- </div> -->
    </div>
  </b-modal>
</template>
  
<script>
export default {
  props: ["show", "text", "title", "aceptar"],
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
  },
  methods: {
    condiciones (value) {
      console.log("dddd");
        this.$emit("condiciones", value);
    },
  
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