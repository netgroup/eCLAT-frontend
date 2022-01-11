<script>
import { ArrowUpIcon, ArrowRightIcon } from "vue-feather-icons";
import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";

export default {
  data() {
    return {
      companyList: [
        {
          logo: "images/job/Circleci.svg",
          title: "Internet Services",
          location: "San Francisco",
          company: "circleci.com",
          revenue: "$ 5M / Annual",
          employee: 200,
        },
        {
          logo: "images/job/Mg.svg",
          title: "Mg",
          location: "San Francisco",
          company: "circleci.com",
          revenue: "$ 5M / Annual",
          employee: 200,
        },
        {
          logo: "images/job/Twilio.svg",
          title: "Twilio",
          location: "San Francisco",
          company: "circleci.com",
          revenue: "$ 5M / Annual",
          employee: 200,
        },
        {
          logo: "images/job/Udemy.svg",
          title: "Udemy",
          location: "San Francisco",
          company: "circleci.com",
          revenue: "$ 5M / Annual",
          employee: 200,
        },
        {
          logo: "images/job/Webhooks.svg",
          title: "Webhooks",
          location: "San Francisco",
          company: "circleci.com",
          revenue: "$ 5M / Annual",
          employee: 200,
        },
        {
          logo: "images/job/Discord.svg",
          title: "Discord",
          location: "San Francisco",
          company: "circleci.com",
          revenue: "$ 5M / Annual",
          employee: 200,
        },
        {
          logo: "images/job/Eslint.svg",
          title: "Eslint",
          location: "San Francisco",
          company: "circleci.com",
          revenue: "$ 5M / Annual",
          employee: 200,
        },
        {
          logo: "images/job/Gitlab.svg",
          title: "Gitlab",
          location: "San Francisco",
          company: "circleci.com",
          revenue: "$ 5M / Annual",
          employee: 200,
        }
      ],
    };
  },
  components: {
    Navbar,
    Switcher,
    Footer,
    ArrowUpIcon,
    ArrowRightIcon
  },
};
</script>

<template>
  <div>
    <Navbar />
    <!-- Hero Start -->
    <section class="bg-half bg-light d-table w-100">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12 text-center">
            <div class="page-next-level">
              <h4 class="title">All Companies</h4>
              <div class="page-next">
                <nav aria-label="breadcrumb" class="d-inline-block">
                  <ul class="breadcrumb bg-white rounded shadow mb-0">
                    <li class="breadcrumb-item">
                      <router-link to="/" tag="a">Landrick</router-link>
                    </li>
                    <li class="breadcrumb-item"><a href="#">Page</a></li>
                    <li class="breadcrumb-item"><a href="#">Careers</a></li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Companies
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <div class="position-relative">
      <div class="shape overflow-hidden text-white">
        <svg
          viewBox="0 0 2880 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
    <!-- Hero End -->

    <section class="section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-9 col-md-8">
            <div class="section-title">
              <h6 class="mb-0">Showing 1 – 8 of 10 results</h6>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div class="form custom-form">
              <div class="form-group mb-0">
                <select class="form-control custom-select" id="Sortbylist-job">
                  <option>All Companies</option>
                  <option>Popular</option>
                  <option>Newest</option>
                </select>
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
        <div class="row">
          <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2" v-for="(data, index) of companyList" :key="index">
            <div class="company-list card border-0 rounded shadow bg-white">
              <div class="text-center py-5 border-bottom">
                <img
                  :src="data.logo"
                  class="avatar avatar-small mx-auto rounded-circle d-block mb-3"
                  alt=""
                />
                <router-link to="/page-job-company" class="text-dark h5 name"
                  >{{data.title}}</router-link
                >
                <p class="text-muted mt-1 mb-0">Internet Services</p>
              </div>

              <div class="p-4">
                <h5>Company Details :</h5>
                <ul class="list-unstyled mb-4">
                  <li class="h6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-map-pin fea icon-sm text-warning mr-2"
                    >
                      <path
                        d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                      ></path>
                      <circle cx="12" cy="10" r="3"></circle></svg
                    ><span class="text-muted">Location :</span> {{data.location}}
                  </li>
                  <li class="h6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-link fea icon-sm text-warning mr-2"
                    >
                      <path
                        d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
                      ></path>
                      <path
                        d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
                      ></path></svg
                    ><span class="text-muted">Comapny :</span> {{data.company}}
                  </li>
                  <li class="h6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-dollar-sign fea icon-sm text-warning mr-2"
                    >
                      <line x1="12" y1="1" x2="12" y2="23"></line>
                      <path
                        d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                      ></path></svg
                    ><span class="text-muted">Revenue :</span> {{data.revenue}}
                  </li>
                  <li class="h6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-users fea icon-sm text-warning mr-2"
                    >
                      <path
                        d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                      ></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg
                    ><span class="text-muted">No. of employees :</span> {{data.employee}}
                  </li>
                </ul>
                <router-link tag="a"
                  to="/page-job-company"
                  class="btn btn-block btn-soft-primary"
                  >View Detail
                  <arrow-right-icon class="fea icon-sm"></arrow-right-icon></router-link>
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <Footer />
    <!-- Footer End -->
    <Switcher />
    <!-- Back to top -->
    <a
      href="javascript: void(0);"
      class="btn btn-icon btn-primary back-to-top"
      id="back-to-top"
      v-scroll-to="'#topnav'"
    >
      <arrow-up-icon class="icons"></arrow-up-icon>
    </a>
    <!-- Back to top -->
  </div>
</template>