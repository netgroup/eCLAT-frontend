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
    async addNewPackage(newPackage) {
      const res = await fetch("/backend/packages", {
        method: "POST",
        // credentials: "include",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${$cookies.get("jwt")}`,
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

<template
  ><div>
    <Navbar :nav-light="false" :isWhiteNavbar="true" />
    <AddPackageForm operation="add" @add-package="addNewPackage" />
    <Footer />
  </div>
</template>
