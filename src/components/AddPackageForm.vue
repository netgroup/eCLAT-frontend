<script>
import {
  ArrowUpIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
  HomeIcon,
  PackageIcon,
  GithubIcon,
  GitBranchIcon,
  UserCheckIcon,
} from "vue-feather-icons";

export default {
  name: "AddPackageForm",
  props: {
    operation: String,
  },
  data() {
    return {
      name: "",
      git_url: "",
      dev_branch: "",
      description: "",
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      const newPackage = {
        name: this.name,
        git_url: this.git_url,
        dev_branch: this.dev_branch,
        description: this.description,
      };
      this.$emit("add-package", newPackage);

      this.name = "";
      this.git_url = "";
      this.dev_branch = "";
      this.description = "";
    },
  },

  components: {
    ArrowUpIcon,
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    LinkedinIcon,
    HomeIcon,
    PackageIcon,
    GithubIcon,
    GitBranchIcon,
    UserCheckIcon,
  },
  emits: ["add-package", "update-package"],
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
                <h4 class="card-title text-center">Package information</h4>
                <form class="login-form mt-4" @submit.prevent="onSubmit">
                  <div class="row">
                    <div class="col-md-12">
                      <p v-if="this.operation === 'add'" class="text-muted">
                        In this page you can make public your eBPF package by
                        inserting its name and a short description about its
                        usage in the form below. Keep in mind that the name of
                        the package meant to be published should be unique.
                      </p>
                      <p v-if="this.operation === 'update'" class="text-muted">
                        In this page you can update the name and description of
                        the package
                        <span class="text-primary fw-bold">{{
                          this.$route.params.name
                        }}</span
                        >. Be sure that the new name is unique.
                      </p>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <label
                          >Package name
                          <span class="text-danger">*</span></label
                        >
                        <div class="position-relative">
                          <package-icon
                            class="fea icon-sm icons"
                          ></package-icon>
                          <input
                            type="text"
                            v-model="name"
                            class="form-control ps-5"
                            placeholder="Add your unique package name "
                            name="name"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <label
                          >GitHub URL <span class="text-danger">*</span></label
                        >
                        <div class="position-relative">
                          <github-icon class="fea icon-sm icons"></github-icon>
                          <input
                            type="url"
                            pattern="https://github.com/.*"
                            v-model="git_url"
                            class="form-control ps-5"
                            placeholder="Add your GitHub repository link "
                            name="git_url"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div class="col-md-12">
                      <div class="form-group">
                        <label
                          >Developer branch
                          <span class="text-danger">*</span></label
                        >
                        <div class="position-relative">
                          <git-branch-icon
                            class="fea icon-sm icons"
                          ></git-branch-icon>
                          <input
                            type="text"
                            v-model="dev_branch"
                            class="form-control ps-5"
                            placeholder="Add your GitHub developer branch "
                            name="dev_branch"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div class="col-md-12">
                      <div class="form-group">
                        <label
                          >Description<span class="text-danger">*</span></label
                        >
                        <div class="position-relative">
                          <textarea
                            class="form-control"
                            v-model="description"
                            name="description"
                            id="descriptionTextarea"
                            rows="10"
                            placeholder="You can add a description for your package in this area."
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-12">
                      <input
                        class="btn btn-primary btn-block"
                        type="submit"
                        :value="
                          this.operation === 'add'
                            ? 'Add package'
                            : 'Update package'
                        "
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
