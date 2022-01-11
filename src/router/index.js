import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/index-developer"),
  },
  {
    path: "/packages",
    name: "Packages",
    component: () => import("../views/packages"),
  },
  {
    path: "*",
    component: () => import("../views/page-error"),
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
    path: "/page-pricing",
    name: "pricing",
    component: () => import("../views/page-pricing"),
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
    path: "/account-payments",
    name: "account-payments",
    component: () => import("../views/account-payments"),
  },
  {
    path: "/account-setting",
    name: "account-setting",
    component: () => import("../views/account-setting"),
  },
  {
    path: "/page-invoice",
    name: "page-invoice",
    component: () => import("../views/page-invoice"),
  },
  {
    path: "/shop-grids",
    name: "shop-grids",
    component: () => import("../views/shop-grids"),
  },
  {
    path: "/shop-product-detail",
    name: "shop-product-detail",
    component: () => import("../views/shop-product-detail"),
  },
  {
    path: "/shop-cart",
    name: "shop-cart",
    component: () => import("../views/shop-cart"),
  },
  {
    path: "/shop-lists",
    name: "shop-lists",
    component: () => import("../views/shop-lists"),
  },
  {
    path: "/shop-checkouts",
    name: "shop-checkouts",
    component: () => import("../views/shop-checkouts"),
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
    path: "/forums-topic",
    name: "forums-topic",
    component: () => import("../views/forums-topic"),
  },
  {
    path: "/forums-comments",
    name: "forums-comments",
    component: () => import("../views/forums-comments"),
  },
  {
    path: "/email-alert",
    name: "email-alert",
    component: () => import("../views/email-alert"),
  },
  {
    path: "/email-invoice",
    name: "email-invoice",
    component: () => import("../views/email-invoice"),
  },
  {
    path: "/email-confirmation",
    name: "email-confirmation",
    component: () => import("../views/email-confirmation"),
  },
  {
    path: "/email-password-reset",
    name: "email-password-reset",
    component: () => import("../views/email-password-reset"),
  },
  {
    path: "/page-jobs",
    name: "jobs",
    component: () => import("../views/page-jobs"),
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
    path: "/page-portfolio-detail",
    name: "portfolio-detail",
    component: () => import("../views/page-portfolio-detail"),
  },
  {
    path: "/page-portfolio-modern",
    name: "portfolio-modern",
    component: () => import("../views/page-portfolio-modern"),
  },
  {
    path: "/page-portfolio-classic",
    name: "portfolio-classic",
    component: () => import("../views/page-portfolio-classic"),
  },
  {
    path: "/page-portfolio-grid",
    name: "portfolio-grid",
    component: () => import("../views/page-portfolio-grid"),
  },
  {
    path: "/page-portfolio-masonry",
    name: "portfolio-masonry",
    component: () => import("../views/page-portfolio-masonry"),
  },
  {
    path: "/auth-login",
    name: "login",
    component: () => import("../views/auth-login"),
  },
  {
    path: "/auth-signup",
    name: "signup",
    component: () => import("../views/auth-signup"),
  },
  {
    path: "/auth-re-password",
    name: "reset-password",
    component: () => import("../views/auth-re-password"),
  },
  {
    path: "/auth-cover-login",
    name: "cover-login",
    component: () => import("../views/auth-cover-login"),
  },
  {
    path: "/auth-cover-signup",
    name: "cover-signup",
    component: () => import("../views/auth-cover-signup"),
  },
  {
    path: "/auth-cover-re-password",
    name: "cover-reset-password",
    component: () => import("../views/auth-cover-re-password"),
  },
  {
    path: "/auth-login-three",
    name: "login-three",
    component: () => import("../views/auth-login-three"),
  },
  {
    path: "/auth-signup-three",
    name: "signup-three",
    component: () => import("../views/auth-signup-three"),
  },
  {
    path: "/auth-re-password-three",
    name: "reset-password-three",
    component: () => import("../views/auth-re-password-three"),
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
    path: "/page-comingsoon",
    name: "comingsoon",
    component: () => import("../views/page-comingsoon"),
  },
  {
    path: "/page-comingsoon2",
    name: "comingsoon2",
    component: () => import("../views/page-comingsoon2"),
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
    path: "/page-contact-one",
    name: "contact-one",
    component: () => import("../views/page-contact-one"),
  },
  {
    path: "/page-contact-two",
    name: "contact-two",
    component: () => import("../views/page-contact-two"),
  },
  {
    path: "/page-contact-three",
    name: "contact-three",
    component: () => import("../views/page-contact-three"),
  },
  {
    path: "/documentation",
    name: "documentation",
    component: () => import("../views/documentation"),
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
