<template>
  <div class="container border w-50">
    <div class="row align-items-center">
      <div class="col-6 p-0 text-right">
        <span>Inicia sesion con:</span>
      </div>
      <div class="col-6 d-flex justify-content-between">
        <span to="/" @click="google" class="m-1">
          <img src="@/assets/img/icon/google.png" width="100%" />
        </span>
        <span to="/" @click="getFbSdk({appId: 1227832397412659, version: 'v9.0'})" class="m-1">
          <img src="@/assets/img/icon/facebook.png" width="100%" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["loginFb"],
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
    getFbSdk(options) {
      return new Promise(async resolve => {
        if (window.FB) {
          window.FB.login(function(response) {
            if (response.authResponse) {
              console.log("Welcome!  Fetching your information.... ");
              window.FB.api("/", function(response) {
                console.log("Good to see you, " , response );
              });
            } else {
              console.log("User cancelled login or did not fully authorize.");
            }
          });
          resolve(window.FB);
        } else {
          await this.initFbSdk(options);
          window.FB.login(function(response) {
            if (response.authResponse) {
              console.log("Welcome!  Fetching your information.... ");
              window.FB.api("/me", function(response) {
                console.log("Good to see you, " , response );
              });
            } else {
              console.log("User cancelled login or did not fully authorize.");
            }
          });

          resolve(window.FB);
        }
      });
    }
  }
};
</script>

<style>
</style>