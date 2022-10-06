<script>
import {
  ArrowUpIcon,
  GithubIcon,
  UserIcon,
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
    GithubIcon,
    UserIcon,
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
      <div
        class="container w-75 card border-0 border-bottom my-2"
        v-if="p.releases.length > 0"
      >
        <div class="row card-body">
          <!-- First column -->
          <div class="col-lg-10 col-sm-12">
            <h4 @click="$router.push(`/packages/${p.name}`)">
              {{ p.name }}
            </h4>
            <div class="text-muted">{{ p.description }}</div>
            <ul class="list-inline mt-2">
              <li class="list-inline-item">
                <span
                  v-for="(prog_desc, prog_name) in p.programs"
                  :key="prog_name"
                  class="badge rounded-pill badge-primary me-2"
                  >{{ prog_name }}</span
                >
              </li>
            </ul>
            <a
              class="text-primary mt-2"
              :href="'https://github.com/' + p.author"
            >
              <user-icon size="1.2x"></user-icon>
              {{ p.author }}</a
            >

            <span class="text-dark">
              published {{ p.releases[p.releases.length - 1].version }} •
              {{
                p.releases[p.releases.length - 1].created_at.split("T")[0]
              }}</span
            >
          </div>

          <!-- Second column -->
          <div class="col-lg-2 col-sm-12 position-relative d-none d-md-block">
            <ul
              class="list-unstyled social-icon social position-absolute bottom-0 end-0"
            >
              <li class="list-inline-item me-1">
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
              <li class="list-inline-item">
                <a
                  :href="p.git_url"
                  class="rounded"
                  v-b-tooltip.hover
                  title="Git"
                >
                  <github-icon class="fea icon-sm fea-social"></github-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <Footer />
    <!-- Footer End -->
    <!-- Back to top -->
    <a
      href="javascript: void(0);"
      class="btn btn-icon btn-primary back-to-top"
      id="back-to-top"
      v-scroll-to="{ element: '#topnav', duration: 500 }"
    >
      <arrow-up-icon class="icons"></arrow-up-icon>
    </a>
    <!-- Back to top -->
  </div>
</template>
