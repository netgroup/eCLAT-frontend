<script>
import AddVersionForm from "@/components/AddVersionForm";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import jwt_decode from "jwt-decode";

export default {
  name: "add-version",
  created() {
    if (!this.$cookies.get("jwt")) {
      this.$router.push("/login");
    } else if (jwt_decode(this.$cookies.get("jwt")).exp * 1000 <= Date.now()) {
      $cookies.remove("jwt");
      this.$router.push("/login");
    }
  },
  components: {
    AddVersionForm,
    Navbar,
    Footer,
  },
  methods: {
    async addNewPackage(newVersion) {
      const res = await fetch(
        `/backend/packages/${this.$route.params.name}/version`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(newVersion),
        }
      );

      const data = await res.json();

      if (data.status === 1) {
        this.$router.push(`/packages/${this.$route.params.name}`);
      }
    },
  },
};
</script>

<template>
  <div>
    <Navbar :nav-light="false" :isWhiteNavbar="true" />
    <AddVersionForm @add-version="addNewPackage" />
    <Footer />
  </div>
</template>
