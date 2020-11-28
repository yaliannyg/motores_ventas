export default {
  data() {
    return {};
  },
  methods: {
    test() {
      console.log("testing");
    },
    dangerToast(body){
        this.$bvToast.toast(body, {
            noCloseButton: true,
            title: `Error`,
            variant: "danger",
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
