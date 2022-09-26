<script>
/**
 * Navbar component
 */
import jwt_decode from "jwt-decode";

export default {
  data() {
    return {
      isCondensed: false,
      isLoggedIn: false,
      username: null,
    };
  },
  props: {
    isWhiteNavbar: {
      type: Boolean,
    },
    navLight: {
      type: Boolean,
    },
    isIcons: {
      type: Boolean,
    },
  },

  mounted: () => {
    window.onscroll = function () {
      onwindowScroll();
    };

    function onwindowScroll() {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        document.getElementById("topnav").classList.add("nav-sticky");
      } else {
        document.getElementById("topnav").classList.remove("nav-sticky");
      }

      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        document.getElementById("back-to-top").style.display = "inline";
      } else {
        document.getElementById("back-to-top").style.display = "none";
      }
    }

    var links = document.getElementsByClassName("side-nav-link-ref");
    var matchingMenuItem = null;
    for (var i = 0; i < links.length; i++) {
      if (window.location.pathname === links[i].pathname) {
        matchingMenuItem = links[i];
        break;
      }
    }

    if (matchingMenuItem) {
      matchingMenuItem.classList.add("active");
      var parent = matchingMenuItem.parentElement;

      /**
       * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
       * We should come up with non hard coded approach
       */
      if (parent) {
        parent.classList.add("active");
        const parent2 = parent.parentElement;
        if (parent2) {
          parent2.classList.add("active");
          const parent3 = parent2.parentElement;
          if (parent3) {
            parent3.classList.add("active");
            const parent4 = parent3.parentElement;
            if (parent4) {
              const parent5 = parent4.parentElement;
              parent5.classList.add("active");
            }
          }
        }
      }
    }
  },
  created() {
    if ($cookies.get("jwt") !== null) {
      this.username = jwt_decode($cookies.get("jwt")).login;
      this.isLoggedIn = true;
    }
  },
  methods: {
    /**
     * Toggle menu
     */
    toggleMenu() {
      this.isCondensed = !this.isCondensed;
      if (this.isCondensed) {
        document.getElementById("navigation").style.display = "block";
      } else document.getElementById("navigation").style.display = "none";
    },

    /**
     * Menu clicked show the submenu
     */
    onMenuClick(event) {
      event.preventDefault();
      const nextEl = event.target.nextSibling.nextSibling;

      if (nextEl && !nextEl.classList.contains("open")) {
        const parentEl = event.target.parentNode;
        if (parentEl) {
          parentEl.classList.remove("open");
        }
        nextEl.classList.add("open");
      } else if (nextEl) {
        nextEl.classList.remove("open");
      }
      return false;
    },
    logOut() {
      $cookies.remove("jwt");
      this.isLoggedIn = false;
    },
  },
};
</script>

<template>
  <div>
    <!-- Navbar STart -->
    <header
      id="topnav"
      class="defaultscroll sticky"
      :class="{ 'bg-white': isWhiteNavbar === true }"
    >
      <div class="container">
        <!-- Logo container-->
        <div>
          <router-link class="logo" to="/">
            <img src="@/assets/images/logo-dark.png" height="50" alt="logo" />
          </router-link>
        </div>
        <div class="buy-button" v-if="isIcons !== true">
          <router-link
            v-show="!isLoggedIn"
            to="/login"
            class="btn"
            :class="{
              'btn-light': navLight === true,
              'btn-primary': navLight !== true,
            }"
            >Sign In</router-link
          >
          <a
            v-show="isLoggedIn"
            @click="logOut"
            class="btn"
            :class="{
              'btn-light': navLight === true,
              'btn-outline-danger': navLight !== true,
            }"
            >Log out</a
          >
          <!-- <a
            href="https://github.com/login/oauth/authorize?client_id=1c281240a2b1ff021d88"
            class="btn"
            :class="{
              'btn-light': navLight === true,
              'btn-primary': navLight !== true,
            }"
          >
            Sign In</a
          > -->
        </div>
        <ul class="buy-button list-inline mb-0" v-if="isIcons === true">
          <li class="list-inline-item mb-0 developer-icon">
            <b-dropdown
              right
              variant="link"
              toggle-class="text-decoration-none p-0 pr-2"
              menu-class="dd-menu dropdown-menu-right bg-white shadow rounded border-0 mt-3 py-0"
            >
              <template #button-content>
                <i class="mdi mdi-magnify h4 text-muted"></i>
              </template>
              <div style="width: 300px">
                <form>
                  <input
                    type="text"
                    id="text"
                    name="name"
                    class="form-control border bg-white"
                    placeholder="Search..."
                  />
                </form>
              </div>
            </b-dropdown>
          </li>
          <li class="list-inline-item mb-0 pr-2">
            <a
              href="https://github.com/netgroup/eclat-daemon"
              class="btn btn-icon btn-soft-primary"
              ><i class="mdi mdi-github mdi-18px icons"></i
            ></a>
          </li>
        </ul>
        <!--end login button-->
        <!--end login button-->
        <!-- End Logo container-->
        <div class="menu-extras">
          <div class="menu-item">
            <!-- Mobile menu toggle-->
            <a
              class="navbar-toggle"
              @click="toggleMenu()"
              :class="{ open: isCondensed === true }"
            >
              <div class="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
            <!-- End mobile menu toggle-->
          </div>
        </div>

        <div id="navigation">
          <!-- Navigation Menu-->
          <ul
            class="navigation-menu"
            :class="{ 'nav-light': navLight === true }"
          >
            <li>
              <router-link to="/" class="side-nav-link-ref">Home</router-link>
            </li>
            <li>
              <router-link to="/" class="side-nav-link-ref"
                >Getting started</router-link
              >
            </li>

            <li class="has-submenu">
              <a href="javascript:void(0)" @click="onMenuClick">Packages</a
              ><span class="menu-arrow"></span>
              <ul class="submenu">
                <li>
                  <router-link to="/packages" class="side-nav-link-ref"
                    >Available packages</router-link
                  >
                </li>
                <li>
                  <router-link to="/add-package" class="side-nav-link-ref"
                    >Publish your own package
                    <!-- <span class="badge badge-danger badge-success"
                      >Tutorial</span> -->
                  </router-link>
                </li>

                <li>
                  <router-link
                    :to="`/users/` + this.username + `/packages`"
                    class="side-nav-link-ref"
                  >
                    My packages
                  </router-link>
                </li>
              </ul>
            </li>

            <li class="has-submenu">
              <a href="javascript:void(0)" @click="onMenuClick">Docs</a
              ><span class="menu-arrow"></span>
              <ul class="submenu">
                <li>
                  <a
                    href="https://hike-eclat.readthedocs.io/"
                    target="_blank"
                    class="side-nav-link-ref"
                    >Documentation</a
                  >
                </li>
                <li>
                  <router-link to="/changelog" class="side-nav-link-ref"
                    >Technology</router-link
                  >
                </li>
                <li>
                  <router-link to="/changelog" class="side-nav-link-ref"
                    >Publications</router-link
                  >
                </li>
              </ul>
            </li>

            <li class="has-submenu">
              <a href="javascript:void(0)" @click="onMenuClick">Support</a
              ><span class="menu-arrow"></span>
              <ul class="submenu">
                <li>
                  <router-link
                    to="/helpcenter-overview"
                    class="side-nav-link-ref"
                    >Support</router-link
                  >
                </li>
                <li>
                  <router-link to="/page-aboutus" class="side-nav-link-ref"
                    >Development team</router-link
                  >
                </li>
                <li>
                  <a
                    href="https://github.com/netgroup/eclat-daemon"
                    target="_blank"
                    class="side-nav-link-ref"
                    >Github</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <!--end navigation-->
      </div>
      <!--end container-->
    </header>
    <!--end header-->
    <!-- Navbar End -->
  </div>
</template>
