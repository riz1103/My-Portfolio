<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
          <!-- <li>
            <a href="javascript:void(0)" @click="showContacts=true">
              Contact Me
            </a>
          </li> -->
          <!-- <li>
            <a href="https:///presentation.creative-tim.com">
              About Us
            </a>
          </li>
          <li>
            <a href="https:///blog.creative-tim.com">
              Blog
            </a>
          </li>
          <li>
            <a href="https://www.creative-tim.com/license">
              Licenses
            </a>
          </li> -->
        </ul>
      </nav>
      <!-- <div class="copyright">
        &copy; {{ year }}, made with <md-icon>favorite</md-icon> by
        <a href="https://www.creative-tim.com/" target="_blank">Creative Tim</a>
        for a better web.
      </div> -->
    </div>
    <modal v-if="showContacts" @close="$emit('hideContacts')">
          <template slot="header">
            <h4 class="modal-title">Contact Information</h4>
            <md-button class="md-simple md-just-icon md-round modal-default-button" @click="$emit('hideContacts')">
              <md-icon>clear</md-icon>
            </md-button>
          </template>

          <template slot="body">
            <p>Mobile Number: 09394006408</p>
            <p>Landline Number: (049) 85239504</p>
            <p>Email Address: joserizc@gmail.com</p>
          </template>

          <template slot="footer">
            <md-button class="md-simple">I will Contact You!</md-button>
            <md-button class="md-danger md-simple" @click="$emit('hideContacts')">Close</md-button>
          </template>
        </modal>
  </footer>
</template>
<script>
import {Modal} from '@/components'
export default {
  name:'footer',
  components:[Modal],
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear(),
      showContacts:false
    };
  },
};
</script>
<style></style>
