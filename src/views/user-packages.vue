<script>
import { ArrowUpIcon, GithubIcon, HelpCircleIcon } from "vue-feather-icons";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import Package from "@/components/Package";
export default {
  data() {
    fetch(`/backend/users/${this.$route.params.username}/packages`)
      .then((response) => response.json())
      .then((data) => {
        this.packages = data.data;
        console.log(this.packages);
      });
    return {
      packages: [],
      isUser: false,

      display_packages: [],
      programs_n: 0,
      search_string: "",
    };
  },
  created() {
    if (this.$route.params.username === localStorage.getItem("user")) {
      this.isUser = true;
    }
  },
  components: {
    Navbar,
    Footer,
    ArrowUpIcon,
    GithubIcon,
    HelpCircleIcon,
    Package,
  },
  methods: {},
};
</script>

<template>
  <div>
    <Navbar :nav-light="false" />

    <!-- Hero Start -->
    <section class="bg-half bg-light d-table w-100">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12 text-center">
            <div class="page-next-level">
              <h4
                v-show="!isUser && this.$route.params.id === 'null'"
                class="title"
              >
                Login to see your packages.
              </h4>
              <h4
                v-show="!isUser && this.$route.params.id !== 'null'"
                class="title"
              >
                Packages published by
                <span style="color:#215BBF">{{ $route.params.id }}</span>
              </h4>
              <h4 v-show="isUser" class="title">
                My packages
              </h4>
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

    <!-- <div :key="p._id" v-for="p in packages" class="col-sm-6 m-auto">
      <Package :packageObject="p" />
    </div> -->

    <section v-for="p in packages" :key="p._id">
      <!-- Hero Start -->
      <section class="bg-profile d-table w-100 bg-primary">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div
                class="card public-profile border-0 rounded shadow"
                style="z-index: 1;"
              >
                <div class="card-body">
                  <div class="row align-items-center">
                    <div class="col-lg-2 col-md-3 text-md-start text-center">
                      <img
                        src="@/assets/images/icon.png"
                        class="avatar avatar-large rounded-circle shadow d-block mx-auto"
                        alt=""
                      />
                    </div>
                    <!--end col-->

                    <div class="col-lg-10 col-md-9">
                      <div class="row align-items-end">
                        <div
                          @click="$router.push(`/packages/${p.name}`)"
                          class="col-md-7 text-md-start text-center mt-4 mt-sm-0"
                        >
                          <h3 class="title mb-0">{{ p.name }}</h3>
                          <small class="text-muted h6 me-2">{{
                            p.description
                          }}</small>
                          <!-- WE  USE THIS SECTION IN CASE WE USE THE AUTHORS FIELD -->
                          <!-- <ul class="list-inline mb-0 mt-3">
                            <li class="list-inline-item me-2">
                              <a
                                href="javascript:void(0)"
                                class="text-muted"
                                title="Instagram"
                              >
                                <code-icon class="fea icon-sm "></code-icon>
                                <span
                                  v-for="(element, index) in p.authors"
                                  :key="index"
                                >
                                  <span v-if="index != 0">, </span
                                  ><span>{{ element }}</span>
                                </span>
                              </a>
                            </li>
                          </ul> -->
                        </div>
                        <!--end col-->
                        <div class="col-md-5 text-md-end text-center">
                          <ul
                            class="list-unstyled social-icon social  mb-0 mt-4"
                          >
                            <li class="list-inline-item">
                              <a
                                :href="p.git_url + '#readme'"
                                class="rounded"
                                v-b-tooltip.hover
                                title="Documentation"
                              >
                                <help-circle-icon
                                  class="fea icon-sm fea-social"
                                ></help-circle-icon>
                              </a>
                            </li>
                            <li class="list-inline-item ms-1">
                              <a
                                :href="p.git_url"
                                class="rounded"
                                v-b-tooltip.hover
                                title="Git"
                              >
                                <github-icon
                                  class="fea icon-sm fea-social"
                                ></github-icon>
                              </a>
                            </li>
                          </ul>
                          <!--end icon-->
                        </div>
                        <!--end col-->
                      </div>
                      <!--end row-->
                    </div>
                    <!--end col-->
                  </div>
                  <!--end row-->
                </div>
              </div>
            </div>
            <!--end col-->
          </div>
          <!--end row-->
        </div>
        <!--ed container-->
      </section>

      <section class="section mt-60">
        <div class="container mt-lg-3">
          <div class="row">
            <!--end col-->

            <div class="col-lg-12 col-12">
              <div class="border-bottom pb-4">
                <h5>Import the package in your eCLAT script</h5>
                <p class="text-muted mb-0">
                  from programs.<span class="text-primary">{{ p.name }}</span>
                  import <em>program-name-here</em>
                </p>
              </div>

              <div class="pb-4">
                <div class="row">
                  <div class="col-md-12 mt-4 pt-2 pt-sm-0">
                    <h5>Programs:</h5>

                    <div
                      class="d-flex key-feature align-items-center p-3 rounded shadow mt-4"
                      v-for="(prog_desc, prog_name) in p.programs"
                      :key="prog_name"
                    >
                      <img
                        src="@/assets/images/Circleci.svg"
                        class="avatar avatar-ex-sm"
                        alt=""
                      />
                      <div class="ms-3">
                        <h4 class="title mb-0">{{ prog_name }}</h4>
                        <p class="text-muted mb-0">{{ prog_desc }}</p>
                      </div>
                    </div>
                  </div>
                  <!--end col-->
                </div>
                <!--end row-->
              </div>
            </div>
            <!--end col-->
          </div>
          <!--end row-->
        </div>
        <!--end container-->
      </section>
    </section>

    <Footer />
    <!-- Footer End -->
    <!-- Back to top -->
    <a
      href="javascript: void(0);"
      class="btn btn-icon btn-primary back-to-top"
      id="back-to-top"
      v-scroll-to="'#topnav'"
    >
      <arrow-up-icon class="icons"></arrow-up-icon>
    </a>
    <!-- Back to top -->
  </div>
</template>
