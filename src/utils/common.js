export default {
  data() {
    return {};
  },
  methods: {
    test() {
      console.log("testing");
    },
    dangerToast(body) {
      this.$bvToast.toast(body, {
        noCloseButton: true,
        title: `Error`,
        variant: "danger",
        solid: true,
      });
    },
    succesToast(body) {
      this.$bvToast.toast(body, {
        noCloseButton: true,
        title: `Succes`,
        variant: "success",
        solid: true,
      });
    },
    infoToast(body) {
      this.$bvToast.toast(body, {
        noCloseButton: true,
        title: `Info`,
        variant: "info",
        solid: true,
      });
    },

    
    // makeToast() {
    //   this.$bvToast.toast("Toast body content", {
    //     title: `Variant ${variant || "default"}`,
    //     variant: variant,
    //     solid: true,
    //   });
    // },
  },
};
