<script>
import { ArrowUpIcon, ArrowRightIcon } from "vue-feather-icons";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

/**
 * Index-developer component
 */
export default {
  components: {
    Navbar,
    Footer,
    ArrowUpIcon,
    ArrowRightIcon,
  },
};
</script>

<template>
  <div>
    <Navbar :isIcons="true" />

    <!-- Hero Start -->
    <section class="bg-half bg-light d-table w-100">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 col-12">
            <div class="title-heading">
              <span class="badge badge-pill badge-soft-primary"
                >eBPF Chains Language And Toolset</span
              >
              <h1 class="font-weight-bold mt-2 mb-3">
                Build eBPF programs <br />
                in seconds
              </h1>
              <p class="para-desc text-muted">
                eCLAT simplifies the writing of custom application in eBPF
                re-using modules. Write your code in Python and deploy the
                bytecode.
              </p>

              <div class="mt-4 pt-2">
                <a href="#quickstart" class="btn btn-primary me-2"
                  >Quickstart</a
                >
                <a
                  href="https://hike-eclat.readthedocs.io/"
                  class="btn btn-outline-primary"
                  >Documentation</a
                >
              </div>
              <p class="text-muted mb-0 mt-3">Current Version: v2.6.0</p>
            </div>
          </div>
          <!--end col-->

          <div class="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <img
              src="images/digital/about.png"
              class="img-fluid d-block mx-auto"
              alt=""
            />
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->

    <!-- Partners start -->
    <section class="py-4 border-top bg-light">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-2 col-md-2 col-6 text-center py-4">
            <img
              src="images/client/amazon.svg"
              class="avatar avatar-ex-sm"
              alt=""
            />
          </div>
          <!--end col-->

          <div class="col-lg-2 col-md-2 col-6 text-center py-4">
            <img
              src="images/client/google.svg"
              class="avatar avatar-ex-sm"
              alt=""
            />
          </div>
          <!--end col-->

          <div class="col-lg-2 col-md-2 col-6 text-center py-4">
            <img
              src="images/client/lenovo.svg"
              class="avatar avatar-ex-sm"
              alt=""
            />
          </div>
          <!--end col-->

          <div class="col-lg-2 col-md-2 col-6 text-center py-4">
            <img
              src="images/client/paypal.svg"
              class="avatar avatar-ex-sm"
              alt=""
            />
          </div>
          <!--end col-->

          <div class="col-lg-2 col-md-2 col-6 text-center py-4">
            <img
              src="images/client/shopify.svg"
              class="avatar avatar-ex-sm"
              alt=""
            />
          </div>
          <!--end col-->

          <div class="col-lg-2 col-md-2 col-6 text-center py-4">
            <img
              src="images/client/spotify.svg"
              class="avatar avatar-ex-sm"
              alt=""
            />
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- Partners End -->

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

    <!-- Start -->
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">Programmable eBPF application</h4>
              <p class="para-desc text-muted mb-0">
                <span class="text-primary font-weight-bold">eCLAT</span> allows
                you to build almost any kind of networking application using
                eBPF. You can type your application logic in a python-like
                syntax and import packages with many pre-made functions you can
                directly use as they were functions.
              </p>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <div class="row align-items-center">
          <div class="col-lg-3 col-md-6 mt-4 pt-2">
            <div
              class="card border-0 features feature-clean course-feature p-4 overflow-hidden shadow"
            >
              <div class="icons text-primary text-center">
                <i class="uil uil-layer-group d-block rounded h3 mb-0"></i>
              </div>
              <div class="card-body p-0 mt-4">
                <a href="javascript:void(0)" class="title h5 text-dark"
                  >Modular</a
                >
                <p class="text-muted mt-2">
                  You have access to a large set of modules to build your own
                  application
                </p>
                <a href="javascript:void(0)" class="text-primary read-more"
                  >View all modules <i class="mdi mdi-chevron-right"></i
                ></a>
                <i
                  class="uil uil-layer-group text-primary full-img"
                  style="text-align: center"
                ></i>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-6 mt-4 pt-2">
            <div
              class="card border-0 features feature-clean course-feature p-4 overflow-hidden shadow"
            >
              <div class="icons text-primary text-center">
                <i class="uil uil-scaling-right d-block rounded h3 mb-0"></i>
              </div>
              <div class="card-body p-0 mt-4">
                <a href="javascript:void(0)" class="title h5 text-dark"
                  >Extensible</a
                >
                <p class="text-muted mt-2">
                  Thanks to the
                  <span class="text-primary font-weight-bold">
                    HIKe technology</span
                  >
                  you can write your module, publish it and reuse many time.
                </p>
                <a href="javascript:void(0)" class="text-primary read-more"
                  >Read More <i class="mdi mdi-chevron-right"></i
                ></a>
                <i
                  class="uil uil-airplay text-primary full-img"
                  style="text-align: center"
                ></i>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-6 mt-4 pt-2">
            <div
              class="card border-0 features feature-clean course-feature p-4 overflow-hidden shadow"
            >
              <div class="icons text-primary text-center">
                <i class="uil uil-focus-target d-block rounded h3 mb-0"></i>
              </div>
              <div class="card-body p-0 mt-4">
                <a href="javascript:void(0)" class="title h5 text-dark"
                  >Customizable</a
                >
                <p class="text-muted mt-2">
                  You can easily program different logic, as programming is more
                  flexibile than configuring
                </p>
                <a href="javascript:void(0)" class="text-primary read-more"
                  >Read More <i class="mdi mdi-chevron-right"></i
                ></a>
                <i
                  class="uil uil-focus-target text-primary full-img"
                  style="text-align: center"
                ></i>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-6 mt-4 pt-2">
            <div
              class="card border-0 features feature-clean course-feature p-4 overflow-hidden shadow"
            >
              <div class="icons text-primary text-center">
                <i class="uil uil-bolt d-block rounded h3 mb-0"></i>
              </div>
              <div class="card-body p-0 mt-4">
                <a href="javascript:void(0)" class="title h5 text-dark">Fast</a>
                <p class="text-muted mt-2">
                  eBPF allows light-speed execution of your code in the XDP hook
                </p>
                <a href="javascript:void(0)" class="text-primary read-more"
                  >Read More <i class="mdi mdi-chevron-right"></i
                ></a>
                <i
                  class="uil uil-expand-arrows text-primary full-img"
                  style="text-align: center"
                ></i>
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->

      <div class="container mt-100 mt-60">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="section-title text-center mb-4 pb-2">
              <h6 class="text-primary" id="quickstart">Quickstart</h6>
              <h4 class="title mb-4">Awesome isn't it? Let's dive in!</h4>
              <p class="para-desc mx-auto text-muted mb-0">
                Start working with
                <span class="text-primary font-weight-bold">Landrick</span> that
                can provide everything you need to generate awareness, drive
                traffic, connect.
              </p>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <div class="row justify-content-center">
          <div class="col-lg-8 col-mg-10 mt-4 pt-2">
            <div class="bg-dark bg-white-dark p-4 rounded shadow">
              <div class="row">
                <div class="col-lg-12">
                  <b-tabs
                    pills
                    justified
                    content-class="pt-2"
                    active-nav-item-class="nav-link-alt"
                    nav-class="flex-column flex-sm-row rounded bg-soft-light"
                  >
                    <b-tab>
                      <template v-slot:title>
                        <div class="text-center text-white">
                          <h5 class="title font-weight-normal mb-0">Docker</h5>
                        </div>
                      </template>

                      <p class="text-muted font-weight-bold mb-0">
                        git clone https://github.com/netgroup/eclat-docker/
                      </p>
                      <p class="text-muted font-weight-bold mb-0">
                        cd eclat-docker && scripts/setup.sh
                      </p>
                      <p class="text-muted font-weight-bold mb-0">
                        docker build -t eclat:latest .
                      </p>
                      <p class="text-muted font-weight-bold mb-0">
                        docker run --rm -t -i --privileged --name eclat -v
                        $(pwd)/eclat-daemon:/opt/eclat-daemon eclat:latest
                        /sbin/my_init -- bash -l
                      </p>
                    </b-tab>
                    <b-tab>
                      <template v-slot:title>
                        <div class="text-center text-white">
                          <h5 class="title font-weight-normal mb-0">Install</h5>
                        </div>
                      </template>
                      <p class="text-muted font-weight-bold mb-0">git clone</p>
                    </b-tab>
                  </b-tabs>
                  <!--end nav pills-->
                </div>
                <!--end col-->
              </div>
              <!--end row-->
            </div>

            <ul class="list-unstyled text-muted mb-0 mt-3">
              <li class="list-inline-item ms-lg-5 me-4">
                <span class="text-success h5 me-2"
                  ><i class="uil uil-check-circle align-middle"></i></span
                >Organize your data
              </li>
              <li class="list-inline-item ms-lg-5 me-4">
                <span class="text-success h5 me-2"
                  ><i class="uil uil-check-circle align-middle"></i></span
                >Work with any team
              </li>
            </ul>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->

      <div class="container mt-100 mt-60">
        <div class="row align-items-center">
          <div class="col-lg-5 col-md-6 order-1 order-md-2">
            <img src="images/integration/1.png" class="img-fluid" alt="" />
          </div>
          <!--end col-->

          <div
            class="col-lg-7 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0"
          >
            <div class="section-title me-lg-5">
              <h4 class="title mb-4">
                Build tools and <br />
                extensive documention
              </h4>
              <p class="text-muted">
                You can combine all the Landrick templates into a single one,
                you can take a component from the Application theme and use it
                in the Website.
              </p>
              <ul class="list-unstyled text-muted">
                <li class="mb-0">
                  <span class="text-primary h5 me-2"
                    ><i class="uil uil-check-circle align-middle"></i></span
                  >Digital Marketing Solutions for Tomorrow
                </li>
                <li class="mb-0">
                  <span class="text-primary h5 me-2"
                    ><i class="uil uil-check-circle align-middle"></i></span
                  >Our Talented & Experienced Marketing Agency
                </li>
                <li class="mb-0">
                  <span class="text-primary h5 me-2"
                    ><i class="uil uil-check-circle align-middle"></i></span
                  >Create your own skin to match your brand
                </li>
              </ul>
              <div class="mt-4">
                <a href="javascript:void(0)" class="btn btn-primary"
                  >Read More
                  <arrow-right-icon class="fea icon-sm"></arrow-right-icon
                ></a>
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->

      <div class="container mt-100 mt-60">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title">
              <h4 class="title mb-4">
                Want to be among the first to find out?
              </h4>
              <p class="text-muted para-desc mx-auto">
                Start working with
                <span class="text-primary font-weight-bold">Landrick</span> that
                can provide everything you need to generate awareness, drive
                traffic, connect.
              </p>

              <div class="subcribe-form mt-4 pt-2">
                <form>
                  <div class="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      class="border bg-white rounded-pill"
                      required
                      placeholder="Email Address"
                    />
                    <button type="submit" class="btn btn-pills btn-primary">
                      Get Started
                    </button>
                  </div>
                </form>
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
    <!-- End -->
    <!-- Section End -->
    <Footer />
    <!-- Footer End -->
    <!-- Back to top -->
    <a
      href="javascript: void(0);"
      class="btn btn-icon btn-primary back-to-top"
      id="back-to-top"
      v-scroll-to="{ element: '#topnav', duration: 500 }"
    >
      <arrow-up-icon class="icons"></arrow-up-icon>
    </a>
    <!-- Back to top -->
  </div>
</template>
