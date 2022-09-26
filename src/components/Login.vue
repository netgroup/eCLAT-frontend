<script>
import { HomeIcon, UserIcon, KeyIcon, GithubIcon } from "vue-feather-icons";

/**
 * Login component
 */
export default {
  name: "Login",
  data() {
    return {
      GITHUB_CLIENT_ID: "1c281240a2b1ff021d88",
      gitHubRedirectURL: "http://localhost:3200/api/v1/auth/login/github",
    };
  },
  components: {
    HomeIcon,
    UserIcon,
    KeyIcon,
    GithubIcon,
  },
};
</script>

<template>
  <div>
    <div class="back-to-home rounded d-none d-sm-block">
      <router-link to="/" class="btn btn-icon btn-soft-primary">
        <home-icon class="icons"></home-icon>
      </router-link>
    </div>

    <!-- Hero Start -->
    <section class="d-flex align-items-center p-2">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-7 col-md-6">
            <div class="me-lg-5">
              <img
                src="images/user/login.svg"
                class="img-fluid d-block mx-auto"
                alt=""
              />
            </div>
          </div>

          <div class="card text-center col-lg-5 col-md-6">
            <img
              src="@/assets/logo-dark-2.png"
              class="card-img-top w-50 mx-auto pt-4"
              alt="eclat-logo-dark-2"
            />
            <div class="card-body">
              <h5 class="card-title fs-3">Log in to your account</h5>
              <p class="card-text">
                Use your GitHub account to login the eCLAT® website and fully
                utilize all the functions provided by our framework.
              </p>
              <a
                :href="`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${gitHubRedirectURL}&scope=user:email`"
                class="btn btn-primary btn-block col-lg-12 mt-3"
                ><github-icon size="1.5x" class="me-3"></github-icon>GitHub</a
              >
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
  </div>
</template>
