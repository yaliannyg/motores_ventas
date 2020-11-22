<template>
  <!--login area start-->
  <div class="col-lg-6 col-md-6">
    <div class="account_form">
      <h2>login</h2>
      <form action="https://demo.hasthemes.com/autima-preview/autima/login.html#">
        <p>
          <label>
            Username or email
            <span>*</span>
          </label>
          <input type="text" />
        </p>
        <p>
          <label>
            Passwords
            <span>*</span>
          </label>
          <input type="password" />
        </p>
        <div class="login_submit">
          <a href="https://demo.hasthemes.com/autima-preview/autima/login.html#">Lost your password?</a>
          <label for="remember">
            <input id="remember" type="checkbox" />
            Remember me
          </label>
          <button type="submit">login</button>
        </div>
      </form>
    </div>
  </div>
  <!--login area start-->
</template>

<script>
export default {
  name: "Login",
  data () {
    return {

    }
  },
  methods : {
    async login () {
      
    }
  }
};
</script>

<style>
</style>