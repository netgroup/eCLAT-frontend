<script>
import { HomeIcon } from "vue-feather-icons";

/**
 * Page-error component
 */
export default {
  data() {
    return {};
  },
  components: {
    HomeIcon,
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

    <!-- ERROR PAGE -->
    <section class="bg-home d-flex align-items-center">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-md-12 text-center">
            <img src="@/assets/images/404.svg" class="img-fluid" alt="" />
            <div class="text-uppercase mt-4 display-3">Oh ! no</div>
            <div class="text-capitalize text-dark mb-4 error-page">
              Page Not Found
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <div class="row mb-3">
          <div class="col-md-12 text-center">
            <router-link to="/" class="btn btn-outline-primary mt-4"
              >Go Back</router-link
            >
            <router-link to="/" class="btn btn-primary mt-4 ms-2"
              >Go To Home</router-link
            >
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- ERROR PAGE -->
  </div>
</template>
