<template>
  <div>
    <Login @login-user="loginUser" />
  </div>
</template>

<script>
import Login from "../components/Login.vue";

export default {
  name: "login-page",
  components: {
    Login,
  },
  methods: {
    async loginUser(userInfo) {
      const res = await fetch("/backend/auth/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });

      const data = await res.json();
      console.log(data);

      if (data.status === 1) {
        //Save the jwt token and the user id locally
        localStorage.setItem("user", data.data.username);
        localStorage.setItem("token", data.data.token);
        this.$router.push("/");
      } else {
        //email not confirmed
        if (
          data.message ===
          "Account is not confirmed. Please confirm your account."
        ) {
          this.$router.push("/email-confirmation");
        }
        //error
      }
    },
  },
};
</script>
