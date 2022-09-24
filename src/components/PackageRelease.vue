<script>
import {
  CheckCircleIcon,
  SettingsIcon,
  XCircleIcon,
  PauseIcon,
} from "vue-feather-icons";

export default {
  name: "PackageRelease",
  components: { CheckCircleIcon, XCircleIcon, SettingsIcon, PauseIcon },
  props: {
    release: Object,
    showOptions: Boolean,
    git_url: String,
  },
  emits: ["delete-version"],
  methods: {},
};
</script>

<template>
  <div style="position: relative">
    <div
      class="dropdown "
      v-show="showOptions"
      style="position: absolute; right:0"
    >
      <button
        class="btn btn-sm btn-link dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <settings-icon size="1.5x" class="custom-class"></settings-icon>
      </button>
      <ul class="dropdown-menu">
        <li>
          <a
            class="dropdown-item"
            @click="$emit('open-confirmation-form', release._id)"
            v-scroll-to="'#topnav'"
            >Delete</a
          >
        </li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
      </ul>
    </div>

    <h4>
      <!-- X icon if version is not verified or suspended, arrow icon otherwise -->
      <x-circle-icon
        v-show="release.status === 'error'"
        class="fea icon-sm text-danger  mr-2"
        v-b-tooltip.hover.v-danger
        title="Version didn't pass the verification phase!"
      ></x-circle-icon>
      <check-circle-icon
        v-show="release.status === 'verified'"
        class="fea icon-sm text-success mr-2"
        v-b-tooltip.hover="{ variant: 'info' }"
        title="Version verified succesfully!"
      ></check-circle-icon>
      <pause-icon
        v-show="release.status === 'queue'"
        class="fea icon-sm text-warning mr-2"
        v-b-tooltip.hover
        title="Version waiting to be verified."
      ></pause-icon>
      {{ release.version }}
    </h4>
    <p>
      GitHub commit:
      <a :href="`${git_url}/tree/${release.commit}`" target="_blank">{{
        release.commit
      }}</a>
    </p>
    <p>
      Release:
      <span style="color: black">{{ release.created_at.split("T")[0] }}</span>
    </p>
    <p>
      Notes: <span style="color: black">{{ release.note }}</span>
    </p>

    <hr />
  </div>
</template>

<style scoped></style>
