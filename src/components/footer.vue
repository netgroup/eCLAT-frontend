<script>
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
  MailIcon,
} from "vue-feather-icons";
export default {
  data() {
    return {};
  },
  components: {
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    LinkedinIcon,
    MailIcon,
  },
};
</script>

<template>
  <div>
    <!-- Footer Start -->
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
            <a href="#" class="logo-footer">
              <img src="@/assets/images/logo-light.png" height="44" alt="" />
            </a>
            <p class="mt-4">
              eCLAT provides a high-level programming abstraction to HIKe
              support of network-wide operations (chaining and deployment) from
              node programmability to network programmability
            </p>
            <ul class="list-unstyled social-icon social mb-0 mt-4">
              <li class="list-inline-item">
                <a href="javascript:void(0)" class="rounded">
                  <facebook-icon class="fea icon-sm fea-social"></facebook-icon>
                </a>
              </li>
              <li class="list-inline-item ms-1">
                <a href="javascript:void(0)" class="rounded">
                  <instagram-icon
                    class="fea icon-sm fea-social"
                  ></instagram-icon>
                </a>
              </li>
              <li class="list-inline-item ms-1">
                <a href="javascript:void(0)" class="rounded">
                  <twitter-icon class="fea icon-sm fea-social"></twitter-icon>
                </a>
              </li>
              <li class="list-inline-item ms-1">
                <a href="javascript:void(0)" class="rounded">
                  <linkedin-icon class="fea icon-sm fea-social"></linkedin-icon>
                </a>
              </li>
            </ul>
            <!--end icon-->
          </div>
          <!--end col-->

          <div class="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h5 class="text-light footer-head">Company</h5>
            <ul class="list-unstyled footer-list mt-4">
              <li>
                <router-link to="/page-aboutus" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i> About
                  us</router-link
                >
              </li>
              <li>
                <router-link to="/page-services" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i>
                  Services</router-link
                >
              </li>
              <li>
                <router-link to="/page-team" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i> Team</router-link
                >
              </li>
              <li>
                <router-link to="/page-blog-grid" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i> Blog</router-link
                >
              </li>
              <li>
                <router-link to="/login" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i> Login</router-link
                >
              </li>
            </ul>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h5 class="text-light footer-head">Useful Links</h5>
            <ul class="list-unstyled footer-list mt-4">
              <li>
                <router-link to="/page-terms" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i> Terms of
                  Services</router-link
                >
              </li>
              <li>
                <router-link to="/page-privacy" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i> Privacy
                  Policy</router-link
                >
              </li>
              <li>
                <a href="https://hike-eclat.readthedocs.io/" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i> Documentation</a
                >
              </li>
              <li>
                <router-link to="/changelog" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i>
                  Changelog</router-link
                >
              </li>
              <li>
                <router-link to="/components" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i>
                  Components</router-link
                >
              </li>
            </ul>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h5 class="text-light footer-head">Newsletter</h5>
            <p class="mt-4">Sign up and receive the latest tips via email.</p>
            <form>
              <div class="row">
                <div class="col-lg-12">
                  <div class="foot-subscribe form-group">
                    <label
                      >Write your email
                      <span class="text-danger">*</span></label
                    >
                    <div class="position-relative">
                      <mail-icon class="fea icon-sm icons"></mail-icon>
                      <input
                        type="email"
                        name="email"
                        id="emailsubscribe"
                        class="form-control ps-5 rounded"
                        placeholder="Your email : "
                        required
                      />
                    </div>
                  </div>

                  <div class="col-lg-12">
                    <input
                      type="submit"
                      id="submitsubscribe"
                      name="send"
                      class="btn btn-soft-primary btn-block"
                      value="Subscribe"
                      @click="console.log(email)"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </footer>
    <!--end footer-->
    <footer class="footer footer-bar">
      <div class="container text-center">
        <div class="row align-items-center">
          <div class="col-sm-12">
            <div class="text-sm-left">
              <p class="mb-0">
                © 2021 - {{ new Date().getFullYear() }} eCLAT. Developed by
                <a href="https://eln.uniroma2.it/en/" target="_blank" class=""
                  >Department of Electronic Engineering of Tor Vergata
                  University of Rome.</a
                >
              </p>
            </div>
          </div>
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </footer>
    <!--end footer-->
  </div>
</template>
