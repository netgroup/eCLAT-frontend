<script>
import { PackageIcon } from "vue-feather-icons";

export default {
  name: "ConfirmationForm",
  components: { PackageIcon },
  props: {
    operation: String,
    packageName: String,
  },
  data() {
    return {
      name: "",
      subject: "",
    };
  },

  methods: {
    onSubmit(e) {
      e.preventDefault();

      if (this.operation === "delete-package") {
        this.$emit("delete-package", this.name);
      } else if (this.operation === "delete-version") {
        this.$emit("delete-version", this.name);
      }
      this.name = "";
    },
  },
  emits: ["delete-package", "delete-version"],
};
</script>

<template>
  <!-- Hero Start -->
  <section
    style="align-items: center; padding: 150px 0;"
    class="confirmation-banner"
  >
    <div class="container">
      <div class="row" style="justify-content: center;">
        <div class="col-lg-6 col-md-8">
          <table
            style="box-sizing: border-box; width: 100%; border-radius: 6px; overflow: hidden; background-color: #fff; box-shadow: 0 0 3px rgba(60, 72, 88, 0.15);"
          >
            <thead>
              <tr
                style="background-color: #2f55d4; padding: 3px 0; line-height: 68px; text-align: center; color: #fff; font-size: 24px; font-weight: 700; letter-spacing: 1px;"
              >
                <th scope="col">
                  <img src="images/logo-light.png" height="24" alt="" />
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td
                  style="padding: 48px 24px 0; color: #161c2d; font-size: 18px; font-weight: 600;"
                >
                  <span style="color: red">ATTENTION!</span> Are you sure you
                  want to delete this
                  {{ operation === "delete-package" ? "package" : "version" }}?
                </td>
              </tr>

              <tr>
                <td style="padding: 35px 24px 15px; color: #8492a6;">
                  Insert the name of the package
                  <span style="color: black">{{ packageName }}</span> to confirm
                  the operation.
                </td>
              </tr>

              <tr>
                <td
                  style="padding: 0px 24px 0; color: #161c2d; font-size: 18px; font-weight: 600;"
                >
                  <form @submit.prevent="onSubmit" class="login-form mt-4">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group ">
                          <label
                            >Package's name
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
                              placeholder=""
                              name="name"
                              required=""
                            />
                          </div>
                        </div>
                      </div>

                      <div class="col-md-12">
                        <input
                          class=" btn-danger "
                          type="submit"
                          value="Delete"
                          style="padding: 8px 20px; outline: none; text-decoration: none; font-size: 16px; letter-spacing: 0.5px; transition: all 0.3s; font-weight: 600; border-radius: 6px;"
                        />
                      </div>
                    </div>
                  </form>
                </td>
              </tr>

              <tr>
                <td style="padding: 15px 24px 15px; color: #8492a6;">
                  eCLAT <br />
                  Support Team
                </td>
              </tr>

              <tr>
                <td
                  style="padding: 16px 8px; color: #8492a6; background-color: #f8f9fc; text-align: center;"
                >
                  © {{ new Date().getFullYear() }} eCLAT.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--end col-->
      </div>
      <!--end row-->
    </div>
    <!--end container-->
  </section>
  <!--end section-->
  <!-- Hero End -->
</template>

<style>
body {
  font-family: Nunito, sans-serif;
  font-size: 15px;
  font-weight: 400;
  overflow: visible;
}
</style>
