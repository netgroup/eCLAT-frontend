<script>
import {
  ArrowUpIcon,
  ArrowRightIcon,
  MailIcon,
  UserCheckIcon,
  RefreshCwIcon,
  PackageIcon,
  ClockIcon,
} from "vue-feather-icons";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PackageRelease from "@/components/PackageRelease";
import ConfirmationForm from "@/components/ConfirmationForm";

/**
 * package-detail component
 */
export default {
  name: "package-detail",
  data() {
    return {
      packageInfo: [],
      authorInfo: [],
      showButton: false,
      showConfirmationForm: false,
      //versionToDeleteID is used to save the ID of the version to delete. Necessary after the emit from the confirmation form
      versionToDeleteID: "",
    };
  },
  async created() {
    const res = await fetch(`/backend/api/packages/${this.$route.params.name}`);
    const data = await res.json();
    this.packageInfo = await data.data;

    const resAuthor = await fetch(
      `/backend/api/users/${this.packageInfo.author}`
    );
    const dataAuthor = await resAuthor.json();
    this.authorInfo = await dataAuthor.data;

    if (this.authorInfo._id === localStorage.getItem("user")) {
      this.showButton = true;
    }
  },
  methods: {
    openConfirmationForm(id) {
      this.versionToDeleteID = id;
      this.showConfirmationForm = true;
    },

    async onDeleteRelease(name) {
      if (name === this.packageInfo.name) {
        const versionToDelete = {
          id: this.versionToDeleteID,
        };

        const res = await fetch(
          `/backend/api/packages/${this.$route.params.name}/delete-version`,
          {
            method: "PUT",
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(versionToDelete),
          }
        );

        const data = await res.json();
        console.log(data);
        if (data.status === 1) {
          //Hide the form
          this.showConfirmationForm = false;
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
    ArrowUpIcon,
    ArrowRightIcon,
    MailIcon,
    UserCheckIcon,
    RefreshCwIcon,
    PackageIcon,
    ClockIcon,
    PackageRelease,
    ConfirmationForm,
  },
};
</script>

<template>
  <div>
    <div v-show="showConfirmationForm">
      <ConfirmationForm
        class="confirmation-banner "
        operation="delete-version"
        @delete-version="onDeleteRelease"
      />
      <div class="blurry-background"></div>
    </div>

    <Navbar />

    <!-- Hero Start -->
    <section class="bg-half bg-light d-table w-100">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12 text-center">
            <div class="page-next-level">
              <img
                src="https://media.istockphoto.com/photos/happiest-dog-in-the-world-picture-id618949520?k=20&m=618949520&s=612x612&w=0&h=l9sEly8Uk-ZCW5ZgzvY_UA55Wn8bdqvoSdmSuaMO8K0="
                class="avatar avatar-small"
                alt=""
              />
              <h1 class="title mt-4 mb-3">
                {{ packageInfo.name }}
              </h1>
              <!-- <p class="para-desc mx-auto text-muted">
                Launch your campaign and benefit from our expertise on designing
                and managing conversion centered bootstrap4 html page.
              </p>
              <ul class="list-unstyled">
                <li class="list-inline-item text-primary mr-3">
                  <i class="mdi mdi-map-marker text-warning mr-2"></i>Beijing,
                  China
                </li>
                <li class="list-inline-item text-primary">
                  <i class="mdi mdi-office-building text-warning mr-2"></i
                  >Gradle
                </li>
              </ul> -->
              <div class="page-next">
                <nav aria-label="breadcrumb" class="d-inline-block">
                  <ul class="breadcrumb bg-white rounded shadow mb-0">
                    <li class="breadcrumb-item">
                      <router-link to="/">HOME</router-link>
                    </li>
                    <li class="breadcrumb-item">
                      <router-link to="/packages">PACKAGES</router-link>
                    </li>

                    <li class="breadcrumb-item active" aria-current="page">
                      PACKAGE DETAILS
                    </li>
                  </ul>
                </nav>
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

    <!-- Shape Start -->
    <div class="position-relative">
      <div class="shape overflow-hidden text-white">
        <svg
          viewBox="0 0 2880 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
    <!--Shape End-->

    <section class="section">
      <div class="container">
        <div class="row">
          <!-- Package Detail Start -->

          <div class="card col-lg-4 col-md-5 col-12" style="border-style: none">
            <div class="card  sticky-bar rounded shadow border-0">
              <div class="card-body">
                <h5 class="card-title border-bottom pb-0 ">
                  Package information
                </h5>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <div class="card my-0 " style="border-style: none">
                    <div class="row g-0">
                      <div class="col-md-1 mt-4" style="text-align: center">
                        <user-check-icon
                          class=" fea icon-ex-md "
                          style="height: 50px"
                        ></user-check-icon>
                      </div>
                      <div
                        class="col-md-11"
                        @click="$router.push(`/users/${authorInfo._id}`)"
                      >
                        <div class="card-body">
                          <h6 class="card-title">Author:</h6>
                          <p class="card-text text-primary">
                            {{ authorInfo.firstName }} {{ authorInfo.lastName }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card my-0 " style="border-style: none">
                    <div class="row g-0">
                      <div class="col-md-1 mt-4" style="text-align: center">
                        <mail-icon
                          class=" fea icon-ex-md "
                          style="height: 50px"
                        ></mail-icon>
                      </div>
                      <div class="col-md-11">
                        <div class="card-body">
                          <h6 class="card-title">Email:</h6>
                          <p class="card-text text-primary">
                            {{ authorInfo.email }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card my-0 " style="border-style: none">
                    <div class="row g-0">
                      <div class="col-md-1 mt-4" style="text-align: center">
                        <refresh-cw-icon
                          class=" fea icon-ex-md "
                          style="height: 50px"
                        ></refresh-cw-icon>
                      </div>
                      <div class="col-md-11">
                        <div class="card-body">
                          <h6 class="card-title">Latest update:</h6>
                          <p class="card-text text-primary">
                            {{ packageInfo.updated_at.split("T")[0] }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card my-0  " style="border-style: none">
                    <div class="row g-0">
                      <div class="col-md-1 mt-4" style="text-align: center">
                        <clock-icon
                          class=" fea icon-ex-md "
                          style="height: 50px"
                        ></clock-icon>
                      </div>
                      <div class="col-md-11">
                        <div class="card-body">
                          <h6 class="card-title">Date published:</h6>
                          <p class="card-text text-primary">
                            {{ packageInfo.created_at.split("T")[0] }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-8 col-md-7 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div class="ml-lg-4">
              <h5>Package Description:</h5>
              <p class="text-muted">
                {{ packageInfo.description }}
              </p>

              <h5 class="mt-4">Releases:</h5>

              <ul
                class="list-unstyled"
                :key="release._id"
                v-for="release in packageInfo.releases.slice().reverse()"
              >
                <li class="text-muted">
                  <PackageRelease
                    :release="release"
                    :showOptions="showButton"
                    @open-confirmation-form="openConfirmationForm"
                  />
                </li>
              </ul>
              <div class="mt-4" v-show="showButton">
                <router-link
                  :to="`/packages/${packageInfo.name}/add-version`"
                  class="btn btn-outline-primary me-2"
                >
                  Add version <i class="mdi mdi-plus-box-multiple"></i>
                </router-link>
                <router-link
                  :to="`/packages/${packageInfo.name}/update-package`"
                  class="btn btn-outline-success me-2"
                >
                  Update package <i class="mdi mdi-refresh"></i>
                </router-link>
                <router-link
                  :to="`/packages/${packageInfo.name}/delete-package`"
                  class="btn btn-outline-danger"
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
      v-scroll-to="'#topnav'"
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
