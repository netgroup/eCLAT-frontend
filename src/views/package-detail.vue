<script>
import {
  LoaderIcon,
  ArrowUpIcon,
  ArrowRightIcon,
  MailIcon,
  UserCheckIcon,
  GithubIcon,
  HomeIcon,
  RefreshCwIcon,
  PackageIcon,
  ClockIcon,
  CodeIcon,
} from "vue-feather-icons";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PackageRelease from "@/components/PackageRelease";
import ConfirmationForm from "@/components/ConfirmationForm";
import jwt_decode from "jwt-decode";

/**
 * package-detail component
 */
export default {
  name: "package-detail",
  data() {
    return {
      packageInfo: {
        releases: [],
        git_url: "",
        updated_at: "",
        created_at: "",
      },
      authorInfo: {},
      showButton: false,
      showConfirmationForm: false,
      //versionToDeleteID is used to save the ID of the version to delete. Necessary after the emit from the confirmation form
      versionToDeleteID: "",
    };
  },
  async created() {
    const res = await fetch(`/backend/packages/${this.$route.params.name}`);
    const data = await res.json();
    this.packageInfo = await data.data;

    const resAuthor = await fetch(`/backend/users/${this.packageInfo.author}`);
    const dataAuthor = await resAuthor.json();
    this.authorInfo = await dataAuthor.data;

    try {
      if (this.authorInfo.username === jwt_decode($cookies.get("jwt")).login) {
        this.showButton = true;
      }
    } catch {
      this.showButton = false;
    }
  },

  methods: {
    openConfirmationForm(id) {
      this.versionToDeleteID = id;
      this.showConfirmationForm = true;
    },
    closeConfirmationForm() {
      this.showConfirmationForm = false;
    },

    async onDeleteRelease(name) {
      if (name === this.packageInfo.name) {
        const versionToDelete = {
          id: this.versionToDeleteID,
        };

        const res = await fetch(
          `/backend/packages/${this.$route.params.name}/delete-version`,
          {
            method: "PUT",
            credentials: "include",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(versionToDelete),
          }
        );

        const data = await res.json();

        if (data.status === 1) {
          //Remove the deleted package from the rendered list of packages
          this.packageInfo.releases = this.packageInfo.releases.filter(
            (release) => {
              if (release._id !== this.versionToDeleteID) {
                return release;
              }
            }
          );
          this.versionToDeleteID = "";
        }
      }
    },
  },

  components: {
    Navbar,
    Footer,
    LoaderIcon,
    ArrowUpIcon,
    ArrowRightIcon,
    MailIcon,
    UserCheckIcon,
    RefreshCwIcon,
    PackageIcon,
    ClockIcon,
    PackageRelease,
    ConfirmationForm,
    GithubIcon,
    HomeIcon,
    CodeIcon,
  },
};
</script>

<template>
  <div>
    <div v-show="showConfirmationForm">
      <ConfirmationForm
        class="confirmation-banner"
        operation="delete-version"
        @delete-version="onDeleteRelease"
        @close-confirmation-form="closeConfirmationForm"
      />
      <div class="blurry-background"></div>
    </div>

    <Navbar />

    <div class="container mt-5">
      <div class="row">
        <section class="col-12 text-center mt-5">
          <h1>{{ packageInfo.name }}</h1>
          <h5 class="text-muted">
            {{
              packageInfo.releases.length > 0
                ? packageInfo.releases[packageInfo.releases.length - 1].version
                : "-"
            }}
          </h5>
        </section>
      </div>
    </div>

    <section class="section pt-3">
      <div class="container">
        <div class="row">
          <!-- Package Detail Start -->

          <div class="card col-lg-4 col-md-5 col-12" style="border-style: none">
            <div class="card sticky-bar rounded shadow border-0">
              <div class="card-body">
                <h5 class="card-title border-bottom pb-0">
                  Package information
                </h5>
              </div>
              <div class="d-flex align-items-center p-3 ms-3">
                <user-check-icon class="fea icon-ex-md"></user-check-icon>
                <div class="ms-3">
                  <!-- @click="$router.push(`/users/${authorInfo._id}`)" -->
                  <h6 class="title mb-0">Author:</h6>
                  <a
                    class="text-primary mb-0"
                    :href="'https://github.com/' + authorInfo.username"
                  >
                    {{ authorInfo.username }}
                  </a>
                </div>
              </div>

              <div class="d-flex align-items-center p-3 ms-3">
                <mail-icon class="fea icon-ex-md"></mail-icon>
                <div class="ms-3">
                  <h6 class="title mb-0">Email:</h6>
                  <a
                    :v-show="authorInfo.email"
                    class="text-primary mb-0"
                    :href="'mailto:' + authorInfo.email"
                  >
                    {{ authorInfo.email }}
                  </a>
                  <p v-show="!authorInfo.email" class="text-primary mb-0">-</p>
                </div>
              </div>

              <div class="d-flex align-items-center p-3 ms-3">
                <github-icon class="fea icon-ex-md"></github-icon>
                <div class="ms-3">
                  <h6 class="title mb-0">GitHub repository:</h6>
                  <a class="text-primary mb-0" :href="packageInfo.git_url">
                    {{ packageInfo.git_url.slice(8) }}
                  </a>
                </div>
              </div>

              <div class="d-flex align-items-center p-3 ms-3">
                <home-icon class="fea icon-ex-md"></home-icon>
                <div class="ms-3">
                  <h6 class="title mb-0">Homepage:</h6>
                  <a
                    class="text-primary mb-0"
                    :href="packageInfo.git_url + '#readme'"
                  >
                    {{ packageInfo.git_url.slice(8) + "#readme" }}
                  </a>
                </div>
              </div>

              <div class="d-flex align-items-center p-3 ms-3">
                <code-icon class="fea icon-ex-md"></code-icon>
                <div class="ms-3">
                  <h6 class="title mb-0">Developer branch:</h6>
                  <a
                    class="text-primary mb-0"
                    :href="
                      packageInfo.git_url + '/tree/' + packageInfo.dev_branch
                    "
                  >
                    {{
                      packageInfo.git_url.slice(8) +
                      "/tree/" +
                      packageInfo.dev_branch
                    }}
                  </a>
                </div>
              </div>

              <div class="d-flex align-items-center p-3 ms-3">
                <refresh-cw-icon class="fea icon-ex-md"></refresh-cw-icon>
                <div class="ms-3">
                  <h6 class="title mb-0">Latest update:</h6>
                  <p class="text-primary mb-0">
                    {{ packageInfo.updated_at.split("T")[0] }}
                  </p>
                </div>
              </div>

              <div class="d-flex align-items-center p-3 ms-3">
                <clock-icon class="fea icon-ex-md"></clock-icon>
                <div class="ms-3">
                  <h6 class="title mb-0">Date published:</h6>
                  <p class="text-primary mb-3">
                    {{ packageInfo.created_at.split("T")[0] }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-8 col-md-7 col-12">
            <div class="ms-lg-4">
              <h5>Package Description:</h5>
              <p class="text-muted">
                {{ packageInfo.description }}
              </p>
              <h5
                v-b-tooltip.hover
                title="Programs of the latest verified release."
              >
                Programs:
              </h5>

              <p class="text-muted mb-0">
                from programs.<span class="text-primary">{{
                  packageInfo.name
                }}</span>
                import <em>program-name-here</em>
              </p>
              <loader-icon
                size="1.5x"
                class="custom-class mt-2"
                v-show="packageInfo.programs ? false : true"
              >
              </loader-icon>
              <div
                class="d-flex key-feature align-items-center p-3 rounded shadow mt-4"
                v-for="(prog_desc, prog_name) in packageInfo.programs"
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

              <h5 class="mt-4">Releases:</h5>

              <ul
                class="list-unstyled"
                :key="release._id"
                v-for="release in packageInfo.releases.slice().reverse()"
              >
                <li class="text-muted">
                  <PackageRelease
                    :git_url="packageInfo.git_url"
                    :release="release"
                    :showOptions="showButton"
                    @open-confirmation-form="openConfirmationForm"
                  />
                </li>
              </ul>
              <div class="mt-4" v-show="showButton">
                <router-link
                  :to="`/packages/${packageInfo.name}/add-version`"
                  class="btn btn-outline-primary me-2 mt-2"
                >
                  Add version <i class="mdi mdi-plus-box-multiple"></i>
                </router-link>
                <router-link
                  :to="`/packages/${packageInfo.name}/update-package`"
                  class="btn btn-outline-success me-2 mt-2"
                >
                  Update package <i class="mdi mdi-refresh"></i>
                </router-link>
                <router-link
                  :to="`/packages/${packageInfo.name}/delete-package`"
                  class="btn btn-outline-danger mt-2"
                >
                  Delete package <i class="mdi mdi-delete"></i>
                </router-link>
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
    <!-- Job Detail End -->
    <!--end section-->
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

<style scoped>
.avatar-small {
  border-radius: 50%;
}

.confirmation-banner {
  z-index: 1000;
  position: absolute;
  margin: auto;
  width: 100%;
}

.blurry-background {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 999;
  display: block;
  background-color: rgb(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
}
</style>
