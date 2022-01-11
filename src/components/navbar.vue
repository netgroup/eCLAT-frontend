<script>
/**
 * Navbar component
 */
export default {
  data() {
    return {
      isCondensed: false,
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
            <img src="images/logo-dark.png" height="50" alt="" />
          </router-link>
        </div>
        <div class="buy-button" v-if="isIcons !== true">
          <a
            href="https://1.envato.market/4n73n"
            target="_blank"
            class="btn"
            :class="{
              'btn-light': navLight === true,
              'btn-primary': navLight !== true,
            }"
            >Buy Now</a
          >
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
            <a href="https://github.com/netgroup/eclat-daemon" class="btn btn-icon btn-soft-primary"
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
              <router-link to="/" class="side-nav-link-ref">Getting started</router-link>
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
                  <router-link to="/changelog" class="side-nav-link-ref"
                    >Create your module <span class="badge badge-danger badge-success"
                      >Tutorial</span
                    ></router-link
                  >
                </li>
                <li>
                  <router-link to="/changelog" class="side-nav-link-ref"
                    >Submit your module</router-link
                  >
                </li>
              </ul>
            </li>

            <li class="has-submenu">
              <a href="javascript:void(0)" @click="onMenuClick">Docs</a
              ><span class="menu-arrow"></span>
              <ul class="submenu">
                <li>
                  <a href="https://hike-eclat.readthedocs.io/" 
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
                  <router-link to="/helpcenter-overview" class="side-nav-link-ref"
                    >Support</router-link
                  >
                </li>
                <li>
                  <router-link to="/page-aboutus" class="side-nav-link-ref"
                    >Development team</router-link
                  >
                </li>
                <li>
                  <a href="https://github.com/netgroup/eclat-daemon" 
                    target="_blank" 
                    class="side-nav-link-ref"
                    >Github</a
                  >
                </li>
              </ul>
            </li>
          </ul>
          <!--end navigation menu-->
          <div class="buy-menu-btn d-none">
            <a
              href="https://1.envato.market/4n73n"
              target="_blank"
              class="btn btn-primary"
              >Buy Now</a
            >
          </div>
          <!--end login button-->
        </div>
        <!--end navigation-->
      </div>
      <!--end container-->
    </header>
    <!--end header-->
    <!-- Navbar End -->
  </div>
</template>
