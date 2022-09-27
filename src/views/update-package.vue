<script>
import AddPackageForm from "@/components/AddPackageForm";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default {
  name: "add-package",
  components: {
    AddPackageForm,
    Navbar,
    Footer,
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
      console.log(data);
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
