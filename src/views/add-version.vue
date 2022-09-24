<script>
import AddVersionForm from "@/components/AddVersionForm";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default {
  name: "add-version",

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
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(newVersion),
        }
      );

      const data = await res.json();
      console.log(data);
      if (data.status === 1) {
        this.$router.push(`/packages/${this.$route.params.name}`);
      }
    },
  },
};
</script>

<template
  ><div>
    <Navbar :nav-light="false" :isWhiteNavbar="true" />
    <AddVersionForm @add-version="addNewPackage" />
    <Footer />
  </div>
</template>
