<script>
import { ArrowUpIcon } from "vue-feather-icons";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ConfirmationForm from "@/components/ConfirmationForm";

export default {
  name: "delete-package",
  components: { Navbar, Footer, ArrowUpIcon, ConfirmationForm },

  methods: {
    async onDeletePackage(name) {
      if (name === this.$route.params.name) {
        const res = await fetch(
          `/backend/packages/${this.$route.params.name}`,
          {
            method: "DELETE",
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const data = await res.json();
        console.log(data);
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
      v-scroll-to="'#topnav'"
    >
      <arrow-up-icon class="icons"></arrow-up-icon>
    </a>
  </div>
</template>
