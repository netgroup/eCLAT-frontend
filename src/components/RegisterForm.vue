<script>
import Switcher from "@/components/switcher";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
  HomeIcon,
  UserIcon,
  UserCheckIcon,
  MailIcon,
  KeyIcon,
} from "vue-feather-icons";

export default {
  name: "RegisterForm",
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      const newUser = {
        username: this.username,
        email: this.email,
        password: this.password,
      };

      this.$emit("register-user", newUser);

      this.username = "";
      this.email = "";
      this.password = "";
    },
  },

  components: {
    Switcher,
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    LinkedinIcon,
    HomeIcon,
    UserIcon,
    UserCheckIcon,
    MailIcon,
    KeyIcon,
  },
  emits: ["register-user"],
};
</script>

<template>
  <div>
    <!-- Loader -->
    <div class="back-to-home rounded d-none d-sm-block">
      <router-link to="/" class="btn btn-icon btn-soft-primary">
        <home-icon class="icons"></home-icon>
      </router-link>
    </div>

    <!-- Hero Start -->
    <section class="bg-auth-home d-table w-100">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-7 col-md-6">
            <div class="mr-lg-5">
              <img
                src="images/user/signup.svg"
                class="img-fluid d-block mx-auto"
                alt=""
              />
            </div>
          </div>
          <div class="col-lg-5 col-md-6">
            <div class="card shadow rounded border-0">
              <div class="card-body">
                <h4 class="card-title text-center">Signup</h4>
                <form class="login-form mt-4" @submit.prevent="onSubmit">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group ">
                        <label
                          >Username <span class="text-danger">*</span></label
                        >
                        <div class="position-relative">
                          <user-icon class="fea icon-sm icons"></user-icon>
                          <input
                            type="text"
                            v-model="username"
                            class="form-control ps-5"
                            placeholder="Username"
                            name="username"
                            required=""
                          />
                        </div>
                      </div>
                    </div>

                    <div class="col-md-12">
                      <div class="form-group ">
                        <label
                          >Your Email <span class="text-danger">*</span></label
                        >
                        <div class="position-relative">
                          <mail-icon class="fea icon-sm icons"></mail-icon>
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
                        <label
                          >Password <span class="text-danger">*</span></label
                        >
                        <div class="position-relative">
                          <key-icon class="fea icon-sm icons"></key-icon>
                          <input
                            type="password"
                            v-model="password"
                            class="form-control ps-5"
                            placeholder="Password"
                            name="password"
                            required=""
                            autocomplete="on"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <div class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck1"
                          />
                          <label class="custom-control-label" for="customCheck1"
                            >I Accept
                            <a href="#" class="text-primary"
                              >Terms And Condition</a
                            ></label
                          >
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <input
                        class="btn btn-primary btn-block col-md-12 "
                        type="submit"
                        value="Register"
                      />
                    </div>
                    <div class="col-lg-12 mt-4 text-center">
                      <h6>Or Signup With</h6>
                      <div class="row">
                        <div class="col-6 mt-3">
                          <a
                            href="javascript:void(0)"
                            class="btn btn-block btn-light"
                            ><i class="mdi mdi-facebook text-primary"></i>
                            Facebook</a
                          >
                        </div>
                        <!--end col-->

                        <div class="col-6 mt-3">
                          <a
                            href="javascript:void(0)"
                            class="btn btn-block btn-light"
                            ><i class="mdi mdi-google text-danger"></i>
                            Google</a
                          >
                        </div>
                        <!--end col-->
                      </div>
                    </div>
                    <!--end col-->
                    <div class="col-12 text-center">
                      <p class="mb-0 mt-3">
                        <small class="text-dark me-2"
                          >Already have an account?</small
                        >
                        <router-link
                          to="/login"
                          class="text-dark 
                          fw-bold"
                          >Sign In</router-link
                        >
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- Hero End -->
    <Switcher />
  </div>
</template>
