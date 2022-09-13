<script>
import { ArrowRightIcon, SettingsIcon, XIcon } from "vue-feather-icons";

export default {
  name: "PackageRelease",
  components: { ArrowRightIcon, XIcon, SettingsIcon },
  props: {
    release: Object,
    showOptions: Boolean,
  },
  emits: ["delete-version"],
  methods: {
    decodeEntity(inputStr) {
      var textarea = document.createElement("textarea");
      textarea.innerHTML = inputStr;
      return textarea.value;
    },
  },
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
      <x-icon
        v-show="release.stato !== 'verified'"
        class="fea icon-sm  mr-2"
        style="color: red"
      ></x-icon>
      <arrow-right-icon
        v-show="release.stato === 'verified'"
        class="fea icon-sm text-success mr-2"
      ></arrow-right-icon>
      {{ release.version }}
    </h4>
    <p>
      GitHub:
      <a :href="decodeEntity(release.url)" target="_blank">{{
        decodeEntity(release.url)
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
