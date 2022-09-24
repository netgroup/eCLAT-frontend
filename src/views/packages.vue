<script>
import {
  ArrowUpIcon,
  InstagramIcon,
  GithubIcon,
  UserPlusIcon,
  UsersIcon,
  CodeIcon,
  HelpCircleIcon,
} from "vue-feather-icons";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

/**
 * Account-profile component

 */
//let packages = ['aa'];
export default {
  data() {
    fetch("/backend/packages")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.packages = this.display_packages = data.data;
        this.packages.forEach(
          (p) => (this.programs_n += Object.keys(p.programs || {}).length)
        );
      });
    return {
      packages: [],
      display_packages: [],
      programs_n: 0,
      search_string: "",
    };
  },
  components: {
    Navbar,
    Footer,
    ArrowUpIcon,

    InstagramIcon,

    GithubIcon,

    UserPlusIcon,
    UsersIcon,

    HelpCircleIcon,
    CodeIcon,
  },
  methods: {
    search: (packages, q) => {
      if (!q) return packages;
      else return packages.filter((el) => el.name.indexOf(q) >= 0);
    },
  },
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
              <h4 class="title">
                There are {{ packages.length }} packages and
                {{ programs_n }} programs available
              </h4>

              <div class="subcribe-form mt-4 pt-2">
                <form>
                  <div class="form-group mb-0">
                    <input
                      type="text"
                      id="help"
                      name="name"
                      class="border bg-white rounded-pill shadow"
                      required=""
                      placeholder="Search a program"
                      v-model="search_string"
                    />
                    <button type="submit" class="btn btn-pills btn-primary">
                      Search
                    </button>
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

    <section v-for="p in search(packages, search_string)" :key="p._id">
      <!-- Hero Start -->
      <section
        class="bg-profile d-table w-100 bg-primary"
        style="background: url('images/account/bg.png') center center;"
      >
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
      <!--end section-->
      <!-- Hero End -->

      <!-- Profile Start -->
      <section class="section mt-60">
        <div class="container mt-lg-3">
          <div class="row">
            <div class="col-lg-4 col-md-6 col-12 d-lg-block d-none">
              <div class="sticky-bar p-4 rounded shadow">
                <h5>Popularity :</h5>
                <div class="row mt-4">
                  <div class="col-6 text-center">
                    <user-plus-icon
                      class="fea icon-ex-md text-primary mb-1"
                    ></user-plus-icon>
                    <h5 class="mb-0">{{ 0 }}</h5>
                    <p class="text-muted mb-0">Views</p>
                  </div>
                  <!--end col-->

                  <div class="col-6 text-center">
                    <users-icon
                      class="fea icon-ex-md text-primary mb-1"
                    ></users-icon>
                    <h5 class="mb-0">{{ p.downloads }}</h5>
                    <p class="text-muted mb-0">Downloads</p>
                  </div>
                  <!--end col-->
                </div>
                <!--end row-->

                <div class="mt-4 pt-2">
                  <h5 class="">Mantainer :</h5>
                  <div class="mt-2">
                    <span class="text-primary fs-5">{{ p.author }} </span>
                  </div>
                  <!--end process box-->
                </div>
              </div>
            </div>
            <!--end col-->

            <div class="col-lg-8 col-12">
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
      <!--end section-->
      <!-- Profile End -->
      <!--end section-->
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
