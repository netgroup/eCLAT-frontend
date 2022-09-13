<script>
import { ArrowUpIcon } from "vue-feather-icons";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import Package from "@/components/Package";
/**
 * Account-profile component

 */
//let packages = ['aa'];
export default {
  data() {
    fetch("/backend/api/packages")
      .then((response) => response.json())
      .then((data) => {
        this.packages = data.data;

        // this.programs_n = data.data.length;
        // this.packages = this.display_packages = data.data;
        // this.packages.forEach(
        //   (p) => (this.programs_n += Object.keys(p.programs || {}).length));
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
    if (this.$route.params.id === localStorage.getItem("user")) {
      this.isUser = true;
    }
  },
  components: {
    Navbar,
    Footer,
    ArrowUpIcon,
    Package,
  },
  methods: {
    search: (packages, q) => {
      if (!q) return packages;
      else return packages.filter((el) => el.name.indexOf(q) >= 0);
    },
    showPackages(id) {
      if (id === this.$route.params.id) {
        return true;
      }
      return false;
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
              <h4 v-show="!isUser" class="title">
                Packages published by
                <span style="color:#215BBF">{{ $route.params.id }}</span>
              </h4>
              <h4 v-show="isUser" class="title">
                My packages
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

    <div :key="p._id" v-for="p in packages" class="col-sm-6 m-auto">
      <Package :packageObject="p" v-show="showPackages(p.author)" />
    </div>

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
