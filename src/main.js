import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

import "../public/css/materialdesignicons.min.css";
import "swiper/swiper-bundle.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import { BootstrapVue } from "bootstrap-vue";
var VueScrollTo = require("vue-scrollto");
import Scrollspy from "vue2-scrollspy";
import VueYoutube from "vue-youtube";
import vueVimeoPlayer from "vue-vimeo-player";
import VueMasonry from "vue-masonry-css";
import VueCookies from "vue-cookies";

Vue.use(VueScrollTo, {
  duration: 3000,
  easing: "ease",
});

Vue.use(BootstrapVue);
Vue.use(Scrollspy);
Vue.use(VueYoutube);
Vue.use(vueVimeoPlayer);
Vue.use(VueMasonry);
Vue.use(VueCookies);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
