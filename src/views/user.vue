<script>
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ArrowUpIcon } from "vue-feather-icons";

export default {
  name: "user",
  components: {
    Navbar,
    Footer,
    ArrowUpIcon,
  },
  data() {
    fetch(`/backend/api/users/${this.$route.params.id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 0) this.$router.push("/page-error");
        this.user = data.data;
      });
    return {
      user: [],
    };
  },
};
</script>

<template
  ><div>
    <h1>User with id {{ $route.params.id }}</h1>
    <p>{{ user }}</p>

    <router-link
      :to="`/users/${$route.params.id}/packages`"
      class="btn btn-dark ms-2"
      >Go to user's packages</router-link
    >

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
