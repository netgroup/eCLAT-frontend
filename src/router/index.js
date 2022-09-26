import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    component: () => import("../views/page-error"),
  },
  {
    path: "/",
    name: "Home",
    component: () => import("../views/index-developer"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login-page.vue"),
  },
  {
    path: "/packages",
    name: "packages",
    component: () => import("../views/packages"),
  },
  {
    path: "/add-package",
    name: "AddPackage",
    component: () => import("../views/add-package"),
  },
  {
    path: "/packages/:name",
    component: () => import("../views/package-detail"),
  },
  {
    path: "/packages/:name/update-package",
    component: () => import("../views/update-package"),
  },
  {
    path: "/packages/:name/add-version",
    component: () => import("../views/add-version"),
  },
  {
    path: "/packages/:name/delete-package",
    component: () => import("../views/delete-package"),
  },
  {
    path: "/users/:username/packages",
    component: () => import("../views/user-packages"),
  },

  {
    path: "/page-aboutus",
    name: "aboutus",
    component: () => import("../views/page-aboutus"),
  },
  {
    path: "/page-services",
    name: "page-services",
    component: () => import("../views/page-services"),
  },
  {
    path: "/page-job-candidate-list",
    name: "page-job-candidate-list",
    component: () => import("../views/page-job-candidate-list"),
  },
  {
    path: "/page-history",
    name: "history",
    component: () => import("../views/page-history"),
  },
  {
    path: "/page-team",
    name: "team",
    component: () => import("../views/page-team"),
  },
  {
    path: "/account-profile",
    name: "account-profile",
    component: () => import("../views/account-profile"),
  },
  {
    path: "/account-members",
    name: "account-members",
    component: () => import("../views/account-members"),
  },
  {
    path: "/account-works",
    name: "account-works",
    component: () => import("../views/account-works"),
  },
  {
    path: "/account-messages",
    name: "account-messages",
    component: () => import("../views/account-messages"),
  },
  {
    path: "/account-setting",
    name: "account-setting",
    component: () => import("../views/account-setting"),
  },
  {
    path: "/shop-myaccount",
    name: "shop-myaccount",
    component: () => import("../views/shop-myaccount"),
  },
  {
    path: "/helpcenter-overview",
    name: "helpcenter-overview",
    component: () => import("../views/helpcenter-overview"),
  },
  {
    path: "/helpcenter-faqs",
    name: "helpcenter-faqs",
    component: () => import("../views/helpcenter-faqs"),
  },
  {
    path: "/helpcenter-guides",
    name: "helpcenter-guides",
    component: () => import("../views/helpcenter-guides"),
  },
  {
    path: "/helpcenter-support-request",
    name: "helpcenter-support-request",
    component: () => import("../views/helpcenter-support-request"),
  },
  {
    path: "/page-job-apply",
    name: "job-apply",
    component: () => import("../views/page-job-apply"),
  },
  {
    path: "/page-job-candidate",
    name: "job-candidate",
    component: () => import("../views/page-job-candidate"),
  },
  {
    path: "/page-job-company-list",
    name: "page-job-company-list",
    component: () => import("../views/page-job-company-list"),
  },
  {
    path: "/page-job-company",
    name: "job-company",
    component: () => import("../views/page-job-company"),
  },
  {
    path: "/page-job-detail",
    name: "job-detail",
    component: () => import("../views/page-job-detail"),
  },
  {
    path: "/page-jobs-sidebar",
    name: "jobs-sidebar",
    component: () => import("../views/page-jobs-sidebar"),
  },
  {
    path: "/page-blog-grid",
    name: "blog-grid",
    component: () => import("../views/page-blog-grid"),
  },
  {
    path: "/page-blog-sidebar",
    name: "blog-sidebar",
    component: () => import("../views/page-blog-sidebar"),
  },
  {
    path: "/page-blog-list",
    name: "blog-list",
    component: () => import("../views/page-blog-list"),
  },
  {
    path: "/page-blog-list-sidebar",
    name: "blog-list-sidebar",
    component: () => import("../views/page-blog-list-sidebar"),
  },
  {
    path: "/page-blog-detail",
    name: "blog-detail",
    component: () => import("../views/page-blog-detail"),
  },
  {
    path: "/page-blog-detail-two",
    name: "blog-detail-two",
    component: () => import("../views/page-blog-detail-two"),
  },
  {
    path: "/page-cases",
    name: "cases",
    component: () => import("../views/page-cases"),
  },
  {
    path: "/page-case-detail",
    name: "case-detail",
    component: () => import("../views/page-case-detail"),
  },
  {
    path: "/auth-re-password",
    name: "reset-password",
    component: () => import("../views/auth-re-password"),
  },
  {
    path: "/page-privacy",
    name: "privacy",
    component: () => import("../views/page-privacy"),
  },
  {
    path: "/page-terms",
    name: "terms",
    component: () => import("../views/page-terms"),
  },
  {
    path: "/page-maintenance",
    name: "maintenance",
    component: () => import("../views/page-maintenance"),
  },
  {
    path: "/page-error",
    name: "error",
    component: () => import("../views/page-error"),
  },
  {
    path: "/page-thankyou",
    name: "thankyou",
    component: () => import("../views/page-thankyou"),
  },
  {
    path: "/page-contact-detail",
    name: "contact-detail",
    component: () => import("../views/page-contact-detail"),
  },
  {
    path: "/page-contact",
    name: "contact",
    component: () => import("../views/page-contact"),
  },
  {
    path: "/changelog",
    name: "changelog",
    component: () => import("../views/changelog"),
  },
  {
    path: "/widget",
    name: "widget",
    component: () => import("../views/widget"),
  },
  {
    path: "/components",
    name: "components",
    component: () => import("../views/components"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
