<script>
import AddPackageForm from "@/components/AddPackageForm";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import jwt_decode from "jwt-decode";

export default {
  name: "add-package",
  components: {
    AddPackageForm,
    Navbar,
    Footer,
  },
  created() {
    if (!this.$cookies.get("jwt")) {
      this.$router.push("/login");
    } else if (jwt_decode(this.$cookies.get("jwt")).exp * 1000 <= Date.now()) {
      $cookies.remove("jwt");
      this.$router.push("/login");
    }
  },
  methods: {
    async updatePackage(newPackage) {
      const res = await fetch(`/backend/packages/${this.$route.params.name}`, {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newPackage),
      });

      const data = await res.json();

      if (data.status === 1) {
        this.$router.push(`/packages/${newPackage.name}`);
      }
    },
  },
};
</script>

<template>
  <div>
    <Navbar :nav-light="false" :isWhiteNavbar="true" />
    <AddPackageForm operation="update" @add-package="updatePackage" />
    <Footer />
  </div>
</template>
