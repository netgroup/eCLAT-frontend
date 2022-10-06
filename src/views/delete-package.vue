<script>
import { ArrowUpIcon } from "vue-feather-icons";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ConfirmationForm from "@/components/ConfirmationForm";
import jwt_decode from "jwt-decode";

export default {
  name: "delete-package",
  components: { Navbar, Footer, ArrowUpIcon, ConfirmationForm },
  created() {
    if (!this.$cookies.get("jwt")) {
      this.$router.push("/login");
    } else if (jwt_decode(this.$cookies.get("jwt")).exp * 1000 <= Date.now()) {
      $cookies.remove("jwt");
      this.$router.push("/login");
    }
  },

  methods: {
    async onDeletePackage(name) {
      if (name === this.$route.params.name) {
        const res = await fetch(
          `/backend/packages/${this.$route.params.name}`,
          {
            method: "DELETE",
            credentials: "include",
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        const data = await res.json();

        if (data.status === 1) {
          this.$router.push("/packages");
        }
      }
    },
  },
};
</script>

<template>
  <div>
    <Navbar />
    <ConfirmationForm
      operation="delete-package"
      :packageName="$route.params.name"
      @delete-package="onDeletePackage"
    />
    <Footer />
    <a
      href="javascript: void(0);"
      class="btn btn-icon btn-primary back-to-top"
      id="back-to-top"
      v-scroll-to="{ element: '#topnav', duration: 500 }"
    >
      <arrow-up-icon class="icons"></arrow-up-icon>
    </a>
  </div>
</template>
