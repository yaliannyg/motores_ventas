<template>
  <div class="container border w-50">
    <div class="row align-items-center">
      <div class="col-6 p-0 text-right">
        <span>Inicia sesion con:</span>
      </div>
      <div class="col-6 d-flex justify-content-between">
        <span @click="google" class="m-1">
          <img src="@/assets/img/icon/google.png" width="100%" />
        </span>
        <span @click="getFbSdk({appId: 183017743516756, version: 'v9.0'})" class="m-1">
          <img src="@/assets/img/icon/facebook.png" width="100%" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    google() {
      console.log("google");
      this.dangerToast("error");
    },
    initFbSdk(options) {
      return new Promise(resolve => {
        window.fbAsyncInit = function() {
          const defaults = { cookie: true, xfbml: true };
          options = { ...defaults, ...options };
          window.FB.init(options);
          resolve();
        };
        /* eslint-disable */
        (function(d, s, id) {
          const fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) {
            return;
          }
          const js = d.createElement(s);
          js.id = id;
          js.src = "//connect.facebook.net/es_ES/sdk.js";
          fjs.parentNode.insertBefore(js, fjs);
        })(document, "script", "facebook-jssdk");
        /* eslint-enable */
      });
    },
    async getFbSdk(options) {
      const dangerToast = this.dangerToast;
      const vm = this;
      if (!window.FB) await this.initFbSdk(options);
      try {
        window.FB.login(
          function(response) {
            if (response.authResponse) {
              let accessToken = response.authResponse.accessToken;
              console.log(accessToken);

              window.FB.api(
                "/me",
                "GET",
                { fields: "email,name, picture.type(large)" },
                function(response) {

                  vm.$emit("fbLogin", response);
                }
              );
            } else {
              dangerToast("Inicio de sesión con Facebook cancelado");
            }
          },
          { scope: "email" }
        );
      } catch (error) {
        console.log(`Ha ocurrido un error: ${error}`);
      }
    }
  }
};
</script>

<style>
</style>