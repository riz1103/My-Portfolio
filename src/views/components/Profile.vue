<template>
  <div class="wrapper" style="margin-top:-100px">
    <div>
      <div class="title">
        <img :src="avatar" alt="Raised Image" class="img-raised rounded" style="float:right;margin: 2px;" />
        <h3>
          <br />
          <small>I’m a full-stack (Front-end and Back-end) developer for 4 years and
            Front-end developer for 4 years. I developed applications for
            business management and analytics and as well as an ecommerce app. I
            also created mobile app version of some.</small>
        </h3>
      </div>
      <!-- <div class="md-layout">
        <div class="md-layout-item md-size-66 mx-auto">
          <md-button class="md-primary">Default</md-button>
          <md-button class="md-primary md-round">Round</md-button>
          <md-button class="md-primary"
            ><md-icon>favorite</md-icon> With Icon</md-button
          >
          <md-button class="md-primary md-just-icon md-round"
            ><md-icon>favorite</md-icon></md-button
          >
          <md-button class="md-primary md-simple">Simple</md-button>
        </div>
      </div> -->
      <div class="md-layout" style="text-align: -webkit-center;">
        <div class="md-layout-item md-size-50 md-xsmall-size-100">
          <div class="title">
            <h3>Skills</h3>
          </div>
          <tr v-for="skill in skills" :key="skill.label">
            <td cols="6">{{skill.label}}</td>
            <td cols="6">
              <input readonly type="range" :value="skill.rate" />
            </td>
            <td>{{ skill.rate }}%</td>
          </tr>
        </div>
      </div>
      <div class="title">
        <h3>Work Experience</h3>
      </div>
      <div class="md-layout">
        <Experience class="md-layout-item md-size-50 md-xsmall-size-100" />
        <img :src="ProfessionalImg" class="pro-img" />
      </div>
      <div class="title">
        <h3>Education</h3>
      </div>
      <div class="md-layout">
        <Education class="md-layout-item md-size-50 md-xsmall-size-100" />
      </div>
    </div>
    <!-- end sliders -->
  </div>
</template>

<script>
import { Pagination } from "@/components";
import { Slider } from "@/components";
import { Badge } from "@/components";
import idPic from "../../assets/img/idPic.png";
import Experience from "./modules/profile/experience";
import Education from "./modules/profile/education";
import ProfessionalImg from "../../assets/img/professional.png";

export default {
  components: {
    Experience,
    Education,
  },
  data() {
    return {
      avatar: idPic,
      ProfessionalImg: ProfessionalImg,
      defaultPagination: 3,
      infoPagination: 3,
      initial: null,
      floatingLabel: null,
      success: null,
      error: null,
      withMIcon: null,
      withFaIcon: null,
      checkbox1: true,
      checkbox2: null,
      checkbox3: true,
      checkbox4: null,
      radio1: true,
      radio2: false,
      switch1: true,
      switch2: null,
      amount: 30,
      amount2: 60,
      buffer: 40,
      sliders: {
        simple: 40,
        rangeSlider: [20, 60],
      },
      skills: [
        { label: 'HTML', rate: 100 },
        { label: 'Javascript', rate: 90 },
        { label: 'CSS3', rate: 80 },
        { label: 'Vuejs', rate: 90 },
        { label: 'C#.NET', rate: 70 },
        { label: 'MS SQL', rate: 70 },
        { label: 'Reactjs', rate: 50 },
        { label: 'Typescript', rate: 80 },
        { label: 'MS Dynamics CRM', rate: 70 },
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
.vertical-center {
  display: flex;
  align-items: center;
}

.flex-column {
  display: flex;
  flex-direction: column;
}

.md-checkbox,
.md-radio {
  display: flex;
  margin: 0;
  margin-bottom: 0.5rem;
}

.pro-img {
  align-self: center;
  transition: width 2s, height 2s, transform 2s;
}

.pro-img:hover {
  transform: rotate(360deg);
}
</style>
