<template>
  <RegisterForm @register-user="registerUser" />
</template>

<script>
import RegisterForm from "../components/RegisterForm.vue";

export default {
  name: "signup-page",
  components: {
    RegisterForm,
  },
  methods: {
    async registerUser(user) {
      const res = await fetch("/backend/auth/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await res.json();
      console.log(data);
      if (data.status === 1) {
        //route per verificare OTP
        this.$router.push("/email-confirmation");
      }
    },
  },
};
</script>
