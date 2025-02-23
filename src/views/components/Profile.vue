<template>
  <div class="wrapper" style="margin-top:-100px">
    <div class="profile-container">
      <!-- Hero Section -->
      <div class="hero-section">
        <div class="profile-header">
          <img :src="avatar" alt="Profile Image" class="profile-image" />
          <div class="profile-text">
            <h1 class="name-title">Joseriz Concepcion</h1>
            <h2 class="profession-title">Software Engineer</h2>
            <div class="social-links">
              <a href="https://www.linkedin.com/in/joseriz-concepcion-b74302b4/" target="_blank" class="social-btn">
                <i class="fab fa-linkedin"></i>
              </a>
              <a 
                href="/file/Resume (Joseriz Concepcion).pdf" 
                download="Resume (Joseriz Concepcion).pdf"
                class="social-btn download-btn"
              >
                <i class="fas fa-download"></i> Download CV
              </a>
            </div>
          </div>
        </div>
        
        <div class="intro-section">
          <p class="tagline">Transforming ideas into elegant solutions</p>
          <p class="intro-text">
            With 9 years of development expertise, I specialize in creating robust full-stack solutions 
            that drive business growth and user engagement.
          </p>
          <div class="specialty-cards">
            <div class="specialty-card">
              <i class="fas fa-chart-line card-icon"></i>
              <h3>Business Analytics</h3>
              <p>Enterprise-grade management solutions</p>
            </div>
            <div class="specialty-card">
              <i class="fas fa-shopping-cart card-icon"></i>
              <h3>E-Commerce</h3>
              <p>Scalable online shopping platforms</p>
            </div>
            <div class="specialty-card">
              <i class="fas fa-mobile-alt card-icon"></i>
              <h3>Mobile Apps</h3>
              <p>Cross-platform mobile solutions</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Skills Section -->
      <div class="skills-section">
        <h2 class="section-title">Technical Expertise</h2>
        <div class="skills-grid">
          <div v-for="skill in skills" :key="skill.label" class="skill-card">
            <div class="skill-header">
              <span class="skill-name">{{ skill.label }}</span>
              <span class="skill-level">{{ skill.rate }}%</span>
            </div>
            <div class="skill-bar-container">
              <div class="skill-bar" :style="`width: ${skill.rate}%`"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Experience Section -->
      <div class="experience-section">
        <h2 class="section-title">Work Experience</h2>
        <div class="md-layout">
          <Experience class="md-layout-item md-size-100" />
        </div>
      </div>

      <!-- Education Section -->
      <div class="education-section">
        <h2 class="section-title">Education</h2>
        <Education class="md-layout-item md-size-50 md-xsmall-size-100" />
      </div>
    </div>
  </div>
</template>

<script>
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
.profile-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.hero-section {
  background: linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%);
  border-radius: 20px;
  padding: 40px;
  margin-bottom: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 40px;
}

.profile-image {
  width: 180px;
  height: 180px;
  border-radius: 20px;
  object-fit: cover;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
}

.profile-text {
  flex: 1;
}

.name-title {
  font-size: 2.8em;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(45deg, #2196F3, #3F51B5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.profession-title {
  font-size: 1.4em;
  color: #666;
  margin: 10px 0 20px;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-btn {
  padding: 10px 20px;
  border-radius: 8px;
  background: #fff;
  color: #2196F3;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(33, 150, 243, 0.2);
  }
}

.download-btn {
  background: #2196F3;
  color: white;
}

.tagline {
  font-size: 1.8em;
  color: #333;
  margin-bottom: 20px;
  font-weight: 600;
}

.specialty-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.specialty-card {
  background: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  .card-icon {
    font-size: 2em;
    color: #2196F3;
    margin-bottom: 15px;
  }

  h3 {
    margin: 10px 0;
    color: #333;
  }

  p {
    color: #666;
    margin: 0;
  }
}

.skills-section {
  background: white;
  padding: 40px;
  border-radius: 20px;
  margin-bottom: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.section-title {
  font-size: 2em;
  color: #333;
  margin-bottom: 30px;
  text-align: center;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.skill-card {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  
  .skill-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .skill-name {
    font-weight: 500;
    color: #333;
  }

  .skill-level {
    color: #2196F3;
    font-weight: 600;
  }
}

.skill-bar-container {
  height: 8px;
  background: #e9ecef;
  border-radius: 4px;
  overflow: hidden;
}

.skill-bar {
  height: 100%;
  background: linear-gradient(90deg, #2196F3, #3F51B5);
  border-radius: 4px;
  transition: width 1s ease-in-out;
}

.experience-section, .education-section {
  background: white;
  padding: 40px;
  border-radius: 20px;
  margin-bottom: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.experience-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.pro-img {
  max-width: 100%;
  height: auto;
  border-radius: 15px;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
}

@media (max-width: 768px) {
  .profile-header {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }

  .social-links {
    justify-content: center;
  }

  .specialty-cards {
    grid-template-columns: 1fr;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
