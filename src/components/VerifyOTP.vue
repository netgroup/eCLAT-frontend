<script>
import { MailIcon } from "vue-feather-icons";

export default {
  name: "VerifyOTP",
  components: {
    MailIcon,
  },
  data() {
    return {
      email: "",
      otp: "",
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      const otpData = {
        email: this.email,
        otp: this.otp,
      };

      this.$emit("otp-verification", otpData);

      this.email = "";
      this.otp = "";
    },
  },
  emits: ["otp-verification"],
};
</script>

<template>
  <!-- Hero Start -->
  <section style="align-items: center; padding: 150px 0;">
    <div class="container">
      <div class="row" style="justify-content: center;">
        <div class="col-lg-6 col-md-8">
          <table
            style="box-sizing: border-box; width: 100%; border-radius: 6px; overflow: hidden; background-color: #fff; box-shadow: 0 0 3px rgba(60, 72, 88, 0.15);"
          >
            <thead>
              <tr
                style="background-color: #2f55d4; padding: 3px 0; line-height: 68px; text-align: center; color: #fff; font-size: 24px; font-weight: 700; letter-spacing: 1px;"
              >
                <th scope="col">
                  <img src="images/logo-light.png" height="24" alt="" />
                </th>
              </tr>
            </thead>

            <tbody>
              <!-- <tr>
                <td
                  style="padding: 48px 24px 0; color: #161c2d; font-size: 18px; font-weight: 600;"
                >
                  Hello, Harry
                </td>
              </tr> -->
              <tr>
                <td style="padding: 35px 24px 15px; color: #8492a6;">
                  Thanks for creating an eCLAT account. To continue, please
                  confirm your email address by inserting the four digit number
                  that has been sent to you via email:
                </td>
              </tr>

              <tr>
                <td
                  style="padding: 0px 24px 0; color: #161c2d; font-size: 18px; font-weight: 600;"
                >
                  <form @submit.prevent="onSubmit" class="login-form mt-4">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group ">
                          <label
                            >Your Email
                            <span class="text-danger">*</span></label
                          >
                          <div class="position-relative">
                            <mail-icon class="fea icon-sm icons "></mail-icon>
                            <input
                              type="email"
                              v-model="email"
                              class="form-control ps-5"
                              placeholder="Email"
                              name="email"
                              required=""
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group ">
                          <label>OTP <span class="text-danger">*</span></label>
                          <div class="position-relative">
                            <input
                              type="number"
                              min="0"
                              max="9999"
                              v-model="otp"
                              class="form-control ps-5"
                              placeholder="OTP"
                              name="otp"
                              required=""
                            />
                          </div>
                        </div>
                      </div>

                      <div class="col-md-12">
                        <input
                          class=" btn-primary "
                          type="submit"
                          value="Confirm Email Address"
                          style="padding: 8px 20px; outline: none; text-decoration: none; font-size: 16px; letter-spacing: 0.5px; transition: all 0.3s; font-weight: 600; border-radius: 6px;"
                        />
                      </div>
                    </div>
                  </form>
                </td>
              </tr>

              <tr>
                <td style="padding: 15px 24px 0; color: #8492a6;">
                  Didn't get the code? Click
                  <a style="color: red" v-on:click="$emit('toggle-elements')"
                    >here</a
                  >
                  to resend it.
                </td>
              </tr>
              <!-- <tr>
                <td style="padding: 15px 24px;">
                  <button
                    @click="toggleElements"
                    href="javascript:void(0)"
                    class="btn-primary"
                    style="padding: 8px 20px; outline: none; text-decoration: none; font-size: 16px; letter-spacing: 0.5px; transition: all 0.3s; font-weight: 600; border-radius: 6px;"
                  >
                    Resend OTP code
                  </button>
                </td>
              </tr> -->

              <tr>
                <td style="padding: 15px 24px 15px; color: #8492a6;">
                  eCLAT <br />
                  Support Team
                </td>
              </tr>

              <tr>
                <td
                  style="padding: 16px 8px; color: #8492a6; background-color: #f8f9fc; text-align: center;"
                >
                  © {{ new Date().getFullYear() }} eCLAT.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--end col-->
      </div>
      <!--end row-->
    </div>
    <!--end container-->
  </section>
  <!--end section-->
  <!-- Hero End -->
</template>

<style>
body {
  font-family: Nunito, sans-serif;
  font-size: 15px;
  font-weight: 400;
  overflow: visible;
}
</style>
