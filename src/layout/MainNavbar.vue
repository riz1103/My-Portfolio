<template>
  <md-toolbar
    id="toolbar"
    md-elevation="0"
    class="md-transparent md-absolute"
    :class="extraNavClasses"
    :color-on-scroll="colorOnScroll"
  >
    <div class="md-toolbar-row md-collapse-lateral">
      <div class="md-toolbar-section-start">
        <h3 class="md-title"></h3>
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: toggledClass }"
          @click="toggleNavbarMobile()"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <div class="md-collapse-wrapper">
            <mobile-menu nav-mobile-section-start="false">
              <!-- Here you can add your items from the section-start of your toolbar -->
            </mobile-menu>
            <md-list>
              <md-list-item href="javascript:void(0)" class="nav-item" @click.prevent="scrollToTop">
                <i class="material-icons">home</i>
                <p>Home</p>
              </md-list-item>

              <md-list-item href="javascript:void(0)" class="nav-item" @click.prevent="scrollToSection('skills')">
                <i class="material-icons">psychology</i>
                <p>Skills</p>
              </md-list-item>

              <md-list-item href="javascript:void(0)" class="nav-item" @click.prevent="scrollToSection('projects')">
                <i class="material-icons">code</i>
                <p>Projects</p>
              </md-list-item>

              <md-list-item href="javascript:void(0)" class="nav-item" @click.prevent="scrollToSection('experience')">
                <i class="material-icons">work</i>
                <p>Experience</p>
              </md-list-item>

              <md-list-item href="javascript:void(0)" class="nav-item" @click.prevent="scrollToSection('education')">
                <i class="material-icons">school</i>
                <p>Education</p>
              </md-list-item>

              <md-list-item href="javascript:void(0)" class="nav-item" @click.prevent="scrollToSection('contact')">
                <i class="material-icons">contact_mail</i>
                <p>Contact</p>
              </md-list-item>

              <md-list-item
                v-if="showDownload"
                class="nav-item download-item"
              >
                <a
                  download="Resume (Joseriz Concepcion).pdf"
                  href="/file/Resume (Joseriz Concepcion).pdf"
                  class="download-link"
                >
                  <i class="material-icons">cloud_download</i>
                  <p>Download CV</p>
                </a>
              </md-list-item>

              <md-list-item
                href="https://www.linkedin.com/in/joseriz-concepcion-b74302b4/"
                target="_blank"
                class="nav-item social-item"
              >
                <i class="fab fa-linkedin"></i>
                <p class="hidden-lg">LinkedIn</p>
                <md-tooltip md-direction="bottom"
                  >Connect on LinkedIn</md-tooltip
                >
              </md-list-item>

              <md-list-item
                href="https://github.com/joseriz"
                target="_blank"
                class="nav-item social-item"
              >
                <i class="fab fa-github"></i>
                <p class="hidden-lg">GitHub</p>
                <md-tooltip md-direction="bottom"
                  >View GitHub Profile</md-tooltip
                >
              </md-list-item>
            </md-list>
          </div>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
var resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(function() {
      resizeTimeout = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}

import MobileMenu from "@/layout/MobileMenu";
export default {
  components: {
    MobileMenu
  },
  props: {
    type: {
      type: String,
      default: "white",
      validator: function(value) {
        var validTypes = ["white", "default", "primary", "danger", "success", "warning", "info"];
        for (var i = 0; i < validTypes.length; i++) {
          if (validTypes[i] === value) {
            return true;
          }
        }
        return false;
      }
    },
    colorOnScroll: {
      type: Number,
      default: 0
    }
  },
  data: function() {
    return {
      extraNavClasses: "",
      toggledClass: false
    };
  },
  computed: {
    showDownload: function() {
      var excludedRoutes = ["login", "landing", "profile"];
      var currentRoute = this.$route.name;
      for (var i = 0; i < excludedRoutes.length; i++) {
        if (excludedRoutes[i] === currentRoute) {
          return false;
        }
      }
      return true;
    }
  },
  methods: {
    smoothScrollTo: function(targetY, duration) {
      var startY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      var distance = targetY - startY;
      var startTime = null;

      function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      }

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var elapsed = timestamp - startTime;
        var progress = Math.min(elapsed / duration, 1);
        var ease = easeInOutQuad(progress);
        window.scrollTo(0, Math.round(startY + distance * ease));
        if (elapsed < duration) {
          window.requestAnimationFrame(step);
        }
      }

      window.requestAnimationFrame(step);
    },
    bodyClick: function() {
      var bodyClick = document.getElementById("bodyClick");

      if (bodyClick === null) {
        var body = document.querySelector("body");
        var elem = document.createElement("div");
        elem.setAttribute("id", "bodyClick");
        body.appendChild(elem);

        var bodyClick = document.getElementById("bodyClick");
        bodyClick.addEventListener("click", this.toggleNavbarMobile);
      } else {
        bodyClick.remove();
      }
    },
    toggleNavbarMobile: function() {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar;
      this.toggledClass = !this.toggledClass;
      this.bodyClick();
    },
    handleScroll: function() {
      var scrollValue =
        document.body.scrollTop || document.documentElement.scrollTop;
      var navbarColor = document.getElementById("toolbar");
      this.currentScrollValue = scrollValue;
      if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
        this.extraNavClasses = "md-" + this.type;
        navbarColor.classList.remove("md-transparent");
      } else {
        if (this.extraNavClasses) {
          this.extraNavClasses = "";
          navbarColor.classList.add("md-transparent");
        }
      }
    },
    scrollListener: function() {
      resizeThrottler(this.handleScroll);
    },
    scrollToElement: function() {
      var element = document.getElementById("downloadSection");
      if (element) {
        var toolbar = document.getElementById("toolbar");
        var toolbarHeight = toolbar ? toolbar.offsetHeight : 0;
        var wrapper = document.querySelector(".wrapper");
        var wrapperMarginTop = 0;
        if (wrapper) {
          var mt = window.getComputedStyle(wrapper).marginTop;
          wrapperMarginTop = parseInt(mt, 10) || 0;
        }
        var negativeMarginComp = wrapperMarginTop < 0 ? -wrapperMarginTop : 0;
        var adjust = toolbarHeight + negativeMarginComp + 16;
        var top = element.getBoundingClientRect().top + window.pageYOffset - adjust;
        this.smoothScrollTo(top, 600);
      }
    },
    scrollToSection: function(sectionId) {
      this.toggledClass = false;
      this.NavbarStore.showNavbar = false;
      
      if (this.$route.name !== 'index') {
        this.$router.push('/');
        var self = this;
        this.$nextTick(function() {
          setTimeout(function() {
            var element = document.getElementById(sectionId);
            if (element) {
              var toolbar = document.getElementById("toolbar");
              var toolbarHeight = toolbar ? toolbar.offsetHeight : 0;
              var wrapper = document.querySelector(".wrapper");
              var wrapperMarginTop = 0;
              if (wrapper) {
                var mt = window.getComputedStyle(wrapper).marginTop;
                wrapperMarginTop = parseInt(mt, 10) || 0;
              }
              var negativeMarginComp = wrapperMarginTop < 0 ? -wrapperMarginTop : 0;
              var adjust = toolbarHeight + negativeMarginComp + 16;
              var top = element.getBoundingClientRect().top + window.pageYOffset - adjust;
              self.smoothScrollTo(top, 600);
            }
          }, 100);
        });
      } else {
        var element = document.getElementById(sectionId);
        if (element) {
          var toolbar = document.getElementById("toolbar");
          var toolbarHeight = toolbar ? toolbar.offsetHeight : 0;
          var wrapper = document.querySelector(".wrapper");
          var wrapperMarginTop = 0;
          if (wrapper) {
            var mt = window.getComputedStyle(wrapper).marginTop;
            wrapperMarginTop = parseInt(mt, 10) || 0;
          }
          var negativeMarginComp = wrapperMarginTop < 0 ? -wrapperMarginTop : 0;
          var adjust = toolbarHeight + negativeMarginComp + 16;
          var top = element.getBoundingClientRect().top + window.pageYOffset - adjust;
          this.smoothScrollTo(top, 600);
        }
      }
    },
    scrollToTop: function() {
      this.toggledClass = false;
      this.NavbarStore.showNavbar = false;
      
      if (this.$route.name !== 'index') {
        this.$router.push('/');
      } else {
        this.smoothScrollTo(0, 600);
      }
    }
  },
  mounted: function() {
    document.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy: function() {
    document.removeEventListener("scroll", this.scrollListener);
  }
};
</script>

<style scoped>
.nav-item {
  transition: all 0.3s ease;
}

.nav-item:hover {
  background: rgba(33, 150, 243, 0.1);
  border-radius: 8px;
}

.download-item {
  background: linear-gradient(45deg, #2196F3, #3F51B5);
  border-radius: 8px;
  margin: 0 8px;
}

.download-link {
  color: white !important;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
}

.social-item {
  transition: all 0.3s ease;
}

.social-item:hover {
  background: rgba(33, 150, 243, 0.1);
  border-radius: 8px;
}

.social-item:hover i {
  color: #2196F3;
}

@media (max-width: 768px) {
  .nav-item {
    margin: 4px 0;
  }
  
  .download-item {
    margin: 8px 0;
  }
}
</style>