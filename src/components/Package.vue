<template>
  <div @click="$router.push(`/packages/${packageObject.name}`)">
    <div class="card mt-3 mb-3">
      <div class="card-body">
        <h5 class="card-title">{{ packageObject.name }}</h5>
        <p class="card-text">
          {{ packageObject.description }}
        </p>
        <p class="text-muted">
          <i class="uil uil-new"></i>
          <span class="text-primary fw-bold">v{{ latestVersion }}</span>
          published on
          {{ latestPublicationDate }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Package",

  props: {
    packageObject: Object,
  },
  data() {
    return {
      latestVersion: "",
      latestPublicationDate: "",
    };
  },
  created() {
    try {
      const latestRelease = this.packageObject.releases.slice(-1)[0];
      this.latestVersion = latestRelease.version;
      this.latestPublicationDate = latestRelease.created_at.split("T")[0];
    } catch (e) {
      this.latestVersion = "-";
      this.latestPublicationDate = "-";
    }
  },
};
</script>
