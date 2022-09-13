<script>
import VerifyOTP from "../components/VerifyOTP";
import ResendOTP from "../components/ResendOTP";
/**
 * Email-confirmation component
 */
export default {
  name: "email-confirmation",
  components: {
    VerifyOTP,
    ResendOTP,
  },
  data() {
    return {
      showElements: true,
    };
  },
  methods: {
    async verifyOTP(otpData) {
      const res = await fetch("/backend/api/auth/verify-otp", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(otpData),
      });

      const data = await res.json();
      console.log(data);
      if (data.status === 1) {
        //email è stata verificata
        this.$router.push("/");
      }
    },
    async resendOTP(otpData) {
      const res = await fetch("/backend/api/auth/resend-verify-otp", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(otpData),
      });

      const data = await res.json();
      console.log(data);
      if (data.status === 1) {
        this.showElements = true;
      }
    },
    toggleElements() {
      this.showElements = false;
    },
  },
};
</script>

<template
  ><div>
    <VerifyOTP
      v-show="showElements"
      @otp-verification="verifyOTP"
      @toggle-elements="toggleElements"
    />
    <ResendOTP v-show="!showElements" @resend-otp="resendOTP" />
  </div>
</template>
