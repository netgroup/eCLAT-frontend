<script>
import {
  ArrowUpIcon,
  GithubIcon,
  UserIcon,
  LinkIcon,
  HelpCircleIcon,
} from "vue-feather-icons";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import jwt_decode from "jwt-decode";

import Package from "@/components/Package";
export default {
  data() {
    fetch(`/backend/users/${this.$route.params.username}/packages`)
      .then((response) => response.json())
      .then((data) => {
        this.packages = data.data;
        try {
          this.author = jwt_decode($cookies.get("jwt"));
        } catch {}
      });

    return {
      packages: [],
      author: Object,
      isUser: false,
    };
  },
  created() {
    if (!this.$cookies.get("jwt")) {
      this.$router.push("/login");
    } else if (jwt_decode(this.$cookies.get("jwt")).exp * 1000 <= Date.now()) {
      $cookies.remove("jwt");
      this.$router.push("/login");
    }
  },
  components: {
    Navbar,
    Footer,
    ArrowUpIcon,
    GithubIcon,
    UserIcon,
    LinkIcon,
    HelpCircleIcon,
    Package,
  },
  methods: {},
};
</script>

<template>
  <div>
    <Navbar :nav-light="false" />

    <div class="container" style="margin-top: 8%">
      <div class="row">
        <div class="col-lg-2 col-sm-12" style="margin-bottom: 8%">
          <div
            class="card border-0 border-bottom sticky-bar"
            style="width: 16rem"
          >
            <img :src="this.author.avatar_url" class="card-img-top rounded" />
            <div class="card-body">
              <h5 class="card-title fs-4">
                {{ this.author.login }}
              </h5>
              <a class="card-title" :href="this.author.html_url"
                ><link-icon size="1x" class="custom-class"></link-icon>
                {{
                  this.author.html_url ? this.author.html_url.slice(8) : ""
                }}</a
              >
            </div>
          </div>
        </div>
        <div class="col-lg-10 col-sm-12 container">
          <section v-for="p in packages" :key="p._id">
            <div class="container w-75 card border-0 border-bottom my-2">
              <div class="row card-body">
                <!-- First column -->
                <div class="col-lg-10 col-sm-12">
                  <h4 @click="$router.push(`/packages/${p.name}`)">
                    {{ p.name }}
                  </h4>
                  <div class="text-muted">{{ p.description }}</div>
                  <ul class="list-inline mt-2" v-if="p.programs">
                    <li class="list-inline-item">
                      <span
                        v-for="(prog_desc, prog_name) in p.programs"
                        :key="prog_name"
                        class="badge rounded-pill badge-primary me-2"
                        >{{ prog_name }}</span
                      >
                    </li>
                  </ul>

                  <span class="text-dark" v-if="p.releases.length > 0">
                    Published {{ p.releases[p.releases.length - 1].version }} •
                    {{
                      p.releases[p.releases.length - 1].created_at.split("T")[0]
                    }}</span
                  >
                  <span class="text-warning" v-else>
                    There are no public releases yet
                  </span>
                </div>

                <!-- Second column -->
                <div
                  class="col-lg-2 col-sm-12 position-relative d-none d-md-block"
                >
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
                        <github-icon
                          class="fea icon-sm fea-social"
                        ></github-icon>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>

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
