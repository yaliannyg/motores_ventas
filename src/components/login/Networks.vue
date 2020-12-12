<template>
  <div class="container border w-50">
    <div class="row align-items-center">
      <div class="col-6 p-0 text-right">
        <span>Inicia sesion con:</span>
      </div>
      <div class="col-6 d-flex justify-content-between">
        <span class="m-1">
          <g-signin-button
            :params="googleSignInParams"
            @success="onSignInSuccess"
            @error="onSignInError"
          >
            <img src="@/assets/img/icon/google.png" width="100%" />
          </g-signin-button>
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
  data() {
    return {
      googleSignInParams: {
        client_id:
          "260452926706-6dc54f3bnrmp7nqd9qs4nkqsm4bc3lam.apps.googleusercontent.com",
          offlineAccess: false,
          
      }
      // googleSignInParams: {
      //   clientId:
      //     "260452926706-6dc54f3bnrmp7nqd9qs4nkqsm4bc3lam.apps.googleusercontent.com", // client ID of type WEB for your server (needed to verify user ID and offline access)
      //   offlineAccess: false, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      //   //hostedDomain: '', // specifies a hosted domain restriction
      //   //loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
      //   forceConsentPrompt: true // [Android] if you want to show the authorization prompt at each login.
      //   //accountName: '', // [Android] specifies an account name on the device that should be used
      //   //iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
      // }
    };
  },
  methods: {
    onSignInSuccess(googleUser) {
      // `googleUser` is the GoogleUser object that represents the just-signed-in user.
      // See https://developers.google.com/identity/sign-in/web/reference#users
      // const profile = googleUser.getBasicProfile(); // etc etc
      console.log(googleUser)
    },
    onSignInError(error) {
      // `error` contains any error occurred.
      console.log("OH NOES", error);
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