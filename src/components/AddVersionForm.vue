<script>
import {
  ArrowUpIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
  HomeIcon,
  GitCommitIcon,
  UserCheckIcon,
} from "vue-feather-icons";

export default {
  name: "AddVersionForm",
  data() {
    return {
      major: "",
      minor: "",
      patch: "",
      note: "",
      latestVersion: "",
    };
  },
  async created() {
    const res = await fetch(`/backend/packages/${this.$route.params.name}`);

    const data = await res.json();

    try {
      this.latestVersion = data.data.releases.slice(-1)[0].version;

      var VeNo = this.latestVersion.split(".").map((x) => {
        return parseInt(x, 10);
      });

      [this.major, this.minor, this.patch] = VeNo;
    } catch (e) {
      this.latestVersion = null;
      [this.major, this.minor, this.patch] = [1, 0, 0];
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      const version = `${this.major}.${this.minor}.${this.patch}`;

      const newVersion = {
        version: version,
        note: this.note,
      };

      this.$emit("add-version", newVersion);

      this.note = "";
    },
  },

  components: {
    ArrowUpIcon,
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    LinkedinIcon,
    HomeIcon,
    GitCommitIcon,
    UserCheckIcon,
  },
  emits: ["add-version"],
};
</script>

<template>
  <div>
    <!-- Loader -->
    <div class="back-to-home rounded d-none d-sm-block">
      <router-link to="/" class="btn btn-icon btn-soft-primary">
        <home-icon class="icons"></home-icon>
      </router-link>
    </div>

    <!-- Hero Start -->
    <section class="bg-auth-home d-table w-100">
      <div class="container">
        <div class="row align-items-center">
          <!-- <div class="col-lg-7 col-md-6">
            <div class="mr-lg-5">
              <img
                src="images/user/signup.svg"
                class="img-fluid d-block mx-auto"
                alt=""
              />
            </div>
          </div> -->
          <div class="col-lg-6 col-md-8 m-auto">
            <div class="card shadow-lg p-3 mb-5 bg-body rounded border-light">
              <div class="card-body">
                <h4 class="card-title text-center">Package version</h4>
                <form class="login-form mt-4" @submit.prevent="onSubmit">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>Tag <span class="text-danger">*</span></label>
                        <p class="text-muted">
                          Insert the tag of the release written in the three
                          digit form.
                        </p>
                        <div
                          class="inputs d-flex flex-row justify-content-center mt-2 col-lg-6 m-auto"
                        >
                          <input
                            type="number"
                            v-model="major"
                            class="text-center form-control rounded"
                            id="major"
                            name="major"
                            maxlength="3"
                            min="0"
                            required
                          />
                          <input
                            type="number"
                            v-model="minor"
                            class="mx-1 text-center form-control rounded"
                            id="minor"
                            name="minor"
                            maxlength="3"
                            min="0"
                            required
                          />
                          <input
                            type="number"
                            v-model="patch"
                            class="text-center form-control rounded"
                            id="patch"
                            name="patch"
                            maxlength="3"
                            min="0"
                            required
                          />
                        </div>
                        <p
                          class="text-muted mt-2"
                          v-show="latestVersion ? true : false"
                        >
                          <span
                            >Latest available version is
                            <span class="text-primary"
                              >v{{ latestVersion }}</span
                            >.
                            <ul>
                              <li>
                                In case of
                                <span style="color: #de3163">major</span>
                                release that introduces a new functionality
                                which breaks backwards compatibility, upgrade
                                the first value.
                              </li>
                              <li>
                                In case of
                                <span style="color: #ffbf00">minor</span>
                                release that introduces a new backwards
                                compatible functionality, upgrade the second
                                value.
                              </li>
                              <li>
                                In case of a
                                <span style="color: #f2e52c">patch</span>
                                release that contains minor modifications to
                                address a specific problem, upgrade the third
                                value.
                              </li>
                            </ul>
                          </span>
                        </p>

                        <p
                          class="text-muted mt-2"
                          v-show="latestVersion ? false : true"
                        >
                          This is the first release of this package. It is
                          suggested to always start by the version number
                          <span class="text-primary">v1.0.0</span>.
                        </p>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>Note</label>
                        <div class="position-relative">
                          <textarea
                            class="form-control"
                            v-model="note"
                            name="note"
                            id="noteTextarea"
                            rows="6"
                            placeholder="You can add some notes about the new released version."
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-12">
                      <input
                        class="btn btn-primary btn-block"
                        type="submit"
                        value="Add version"
                      />
                    </div>
                    <!--end col-->
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
