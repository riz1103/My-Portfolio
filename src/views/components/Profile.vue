<template>
  <div class="wrapper" style="margin-top:-100px">
    <div class="profile-container">
      <!-- Hero Section -->
      <div id="about" class="hero-section">
        <div class="profile-header">
          <div class="profile-image-container">
            <img :src="avatar" alt="Joseriz Concepcion - Software Engineer" class="profile-image" />
            <div class="status-indicator">
              <span class="status-dot"></span>
              <span class="status-text">Available for opportunities</span>
            </div>
          </div>
          <div class="profile-text">
            <div class="greeting">Hello, I'm</div>
            <h1 class="name-title">Joseriz Concepcion</h1>
            <h2 class="profession-title">
              <span class="role-highlight">Senior Frontend Developer</span>
              <span class="experience-badge">9+ Years Experience</span>
              <span class="certification-badge">
                <i class="fab fa-aws"></i>
                AWS Certified Cloud Practitioner
              </span>
            </h2>
            <p class="intro-summary">
              Senior Frontend Developer with 9+ years of professional experience, including 5+ years specializing in frontend development and 4 years in full-stack roles. Expert in building scalable, high-performance web applications using Vue 3, TypeScript, and modern frontend architectures. Proven track record of delivering business-critical systems for analytics, customer portals, e-commerce, and internal platforms. Strong focus on performance optimization, reusable component architecture, code quality, and reliability. Experienced working with international clients, agile teams, and fast-paced environments. Currently expanding expertise into cloud platforms (AWS) and system scalability to complement frontend leadership skills.
            </p>
            <div class="social-links">
              <a href="https://www.linkedin.com/in/joseriz-concepcion-b74302b4/" target="_blank" class="social-btn linkedin-btn">
                <i class="fab fa-linkedin"></i>
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/joseriz" target="_blank" class="social-btn github-btn">
                <i class="fab fa-github"></i>
                <span>GitHub</span>
              </a>
              <a 
                href="/file/Resume (Joseriz Concepcion).pdf" 
                download="Resume (Joseriz Concepcion).pdf"
                class="social-btn download-btn"
              >
                <i class="fas fa-download"></i>
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
        
        <div class="intro-section">
          <div class="section-header">
            <h2 class="section-title">What I Do</h2>
            <p class="section-subtitle">Delivering excellence through technology</p>
          </div>
          <div class="specialty-cards">
            <div class="specialty-card">
              <div class="card-icon-container">
                <i class="fas fa-code card-icon"></i>
              </div>
              <h3>Frontend Development</h3>
              <p>Building responsive, interactive web applications with Vue.js, React, and modern JavaScript frameworks</p>
              <div class="card-skills">
                <span class="skill-tag">Vue.js</span>
                <span class="skill-tag">React</span>
                <span class="skill-tag">TypeScript</span>
              </div>
            </div>
            <div class="specialty-card">
              <div class="card-icon-container">
                <i class="fas fa-shopping-cart card-icon"></i>
              </div>
              <h3>E-Commerce Solutions</h3>
              <p>Creating scalable online platforms with seamless user experiences and robust payment integrations</p>
              <div class="card-skills">
                <span class="skill-tag">E-commerce</span>
                <span class="skill-tag">Payment APIs</span>
                <span class="skill-tag">CMS</span>
              </div>
            </div>
            <div class="specialty-card">
              <div class="card-icon-container">
                <i class="fas fa-mobile-alt card-icon"></i>
              </div>
              <h3>Mobile Development</h3>
              <p>Developing cross-platform mobile applications using Capacitor and hybrid technologies</p>
              <div class="card-skills">
                <span class="skill-tag">Capacitor</span>
                <span class="skill-tag">PWA</span>
                <span class="skill-tag">Mobile UX</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Skills Section -->
      <div id="skills" class="skills-section">
        <div class="section-header">
          <h2 class="section-title">Technical Expertise</h2>
          <p class="section-subtitle">Technologies I work with daily</p>
        </div>
        
        <div class="skills-categories">
          <div class="skill-category">
            <h3 class="category-title">
              <i class="fas fa-code"></i>
              Frontend Technologies
            </h3>
            <div class="skills-grid">
              <div v-for="skill in frontendSkills" :key="skill.label" class="skill-card">
                <div class="skill-icon">
                  <i :class="skill.icon"></i>
                </div>
                <div class="skill-info">
                  <span class="skill-name">{{ skill.label }}</span>
                  <div class="skill-bar-container">
                    <div class="skill-bar" :style="`width: ${skill.rate}%`"></div>
                  </div>
                  <span class="skill-level">{{ skill.rate }}%</span>
                </div>
              </div>
            </div>
          </div>

          <div class="skill-category">
            <h3 class="category-title">
              <i class="fas fa-server"></i>
              Backend & Database
            </h3>
            <div class="skills-grid">
              <div v-for="skill in backendSkills" :key="skill.label" class="skill-card">
                <div class="skill-icon">
                  <i :class="skill.icon"></i>
                </div>
                <div class="skill-info">
                  <span class="skill-name">{{ skill.label }}</span>
                  <div class="skill-bar-container">
                    <div class="skill-bar" :style="`width: ${skill.rate}%`"></div>
                  </div>
                  <span class="skill-level">{{ skill.rate }}%</span>
                </div>
              </div>
            </div>
          </div>

          <div class="skill-category">
            <h3 class="category-title">
              <i class="fas fa-tools"></i>
              Tools & Platforms
            </h3>
            <div class="skills-grid">
              <div v-for="skill in toolSkills" :key="skill.label" class="skill-card">
                <div class="skill-icon">
                  <i :class="skill.icon"></i>
                </div>
                <div class="skill-info">
                  <span class="skill-name">{{ skill.label }}</span>
                  <div class="skill-bar-container">
                    <div class="skill-bar" :style="`width: ${skill.rate}%`"></div>
                  </div>
                  <span class="skill-level">{{ skill.rate }}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Featured Projects Section -->
      <div id="projects" class="projects-section">
        <div class="section-header">
          <h2 class="section-title">Featured Projects</h2>
          <p class="section-subtitle">Showcasing my best work and technical achievements</p>
        </div>
        <div class="project-note">
          <i class="fas fa-info-circle"></i>
          <span>Note: Some project links may no longer be accessible as I no longer have control over these deployments.</span>
        </div>
        <div class="featured-projects">
          <div v-for="project in featuredProjects" :key="project.id" class="project-card">
            <div class="project-image">
              <img :src="project.image" :alt="project.title" />
              <div class="project-overlay">
                <a :href="project.demoUrl" target="_blank" class="project-link">
                  <i class="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
            <div class="project-content">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              <div class="project-tech">
                <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
                  {{ tech }}
                </span>
              </div>
              <div class="project-stats">
                <div class="stat">
                  <i class="fas fa-users"></i>
                  <span>{{ project.users }}</span>
                </div>
                <div class="stat">
                  <i class="fas fa-chart-line"></i>
                  <span>{{ project.impact }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Experience Section -->
      <div id="experience" class="experience-section">
        <div class="section-header">
          <h2 class="section-title">Professional Experience</h2>
          <p class="section-subtitle">Building digital solutions that make a difference</p>
        </div>
        <div class="md-layout">
          <Experience class="md-layout-item md-size-100" />
        </div>
      </div>

      <!-- Education Section -->
      <div id="education" class="education-section">
        <div class="section-header">
          <h2 class="section-title">Education</h2>
          <p class="section-subtitle">Academic background and continuous learning</p>
        </div>
        <Education class="md-layout-item md-size-50 md-xsmall-size-100" />
      </div>

      <!-- Certifications Section -->
      <div id="certifications" class="certifications-section">
        <div class="section-header">
          <h2 class="section-title">Certifications</h2>
          <p class="section-subtitle">Professional credentials and achievements</p>
        </div>
        <div class="certifications-grid">
          <div class="certification-card">
            <div class="certification-badge-embed">
              <div 
                data-iframe-width="150" 
                data-iframe-height="270" 
                data-share-badge-id="a840c602-eac6-43d4-b5ef-c1e634890353" 
                data-share-badge-host="https://www.credly.com"
              ></div>
            </div>
            <div class="certification-content">
              <h3 class="certification-title">AWS Certified Cloud Practitioner</h3>
              <p class="certification-level">Foundational</p>
              <p class="certification-description">Validated knowledge of AWS Cloud concepts, services, and architectural best practices.</p>
              <div class="certification-dates">
                <div class="certification-date">
                  <i class="fas fa-calendar-check"></i>
                  <span><strong>Issued:</strong> January 11, 2026</span>
                </div>
                <div class="certification-date">
                  <i class="fas fa-calendar-times"></i>
                  <span><strong>Expires:</strong> January 11, 2029</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Section -->
      <div id="contact" class="contact-section">
        <div class="section-header">
          <h2 class="section-title">Let's Work Together</h2>
          <p class="section-subtitle">Ready to bring your ideas to life? Let's discuss your next project</p>
        </div>
        <div class="contact-content">
          <div class="contact-info">
            <div class="contact-item">
              <div class="contact-icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div class="contact-details">
                <h4>Email</h4>
                <p>joserizc@gmail.com</p>
                <a href="mailto:joserizc@gmail.com" class="contact-link">Send Email</a>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">
                <i class="fas fa-phone"></i>
              </div>
              <div class="contact-details">
                <h4>Phone</h4>
                <p>(639) 394006408</p>
                <a href="tel:+639394006408" class="contact-link">Call</a>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">
                <i class="fab fa-linkedin"></i>
              </div>
              <div class="contact-details">
                <h4>LinkedIn</h4>
                <p>Professional Network</p>
                <a href="https://www.linkedin.com/in/joseriz-concepcion-b74302b4/" target="_blank" class="contact-link">Connect</a>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div class="contact-details">
                <h4>Location</h4>
                <p>Victoria, Laguna, Philippines 4011</p>
                <span class="contact-link">Available for Remote Work</span>
              </div>
            </div>
          </div>
          
          <div class="cta-section">
            <h3>Ready to Start Your Project?</h3>
            <p>I'm always excited to work on new challenges and help bring innovative ideas to life. Whether you need a full-stack application, mobile app, or consultation on your tech stack, I'm here to help.</p>
            <div class="cta-buttons">
              <a href="https://www.linkedin.com/in/joseriz-concepcion-b74302b4/" target="_blank" class="cta-btn primary">
                <i class="fab fa-linkedin"></i>
                Start a Conversation
              </a>
              <a href="/file/Resume (Joseriz Concepcion).pdf" download="Resume (Joseriz Concepcion).pdf" class="cta-btn secondary">
                <i class="fas fa-download"></i>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import idPic from "../../assets/img/idPic.jpg";
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
      frontendSkills: [
        { label: 'Vue.js (Vue 2 & Vue 3)', rate: 95, icon: 'fab fa-vuejs' },
        { label: 'React', rate: 85, icon: 'fab fa-react' },
        { label: 'Next.js', rate: 80, icon: 'fas fa-forward' },
        { label: 'TypeScript', rate: 90, icon: 'fas fa-code' },
        { label: 'JavaScript (ES6+)', rate: 90, icon: 'fab fa-js-square' },
        { label: 'HTML5', rate: 95, icon: 'fab fa-html5' },
        { label: 'CSS3', rate: 90, icon: 'fab fa-css3-alt' },
        { label: 'SCSS/Sass', rate: 85, icon: 'fab fa-sass' },
        { label: 'Pinia', rate: 85, icon: 'fas fa-database' },
        { label: 'Quasar', rate: 80, icon: 'fas fa-cube' },
      ],
      backendSkills: [
        { label: 'C#.NET', rate: 75, icon: 'fab fa-microsoft' },
        { label: 'Node.js', rate: 75, icon: 'fab fa-node-js' },
        { label: 'Firebase', rate: 80, icon: 'fas fa-fire' },
        { label: 'MS SQL', rate: 70, icon: 'fas fa-database' },
        { label: 'Microsoft Dynamics CRM', rate: 70, icon: 'fas fa-cogs' },
        { label: 'REST API Integration', rate: 80, icon: 'fas fa-cloud' },
      ],
      toolSkills: [
        { label: 'AWS Cloud Services (Certified)', rate: 80, icon: 'fab fa-aws' },
        { label: 'Google Maps API', rate: 75, icon: 'fas fa-map' },
        { label: 'Agile / Scrum', rate: 85, icon: 'fas fa-users' },
        { label: 'Code Refactoring', rate: 90, icon: 'fas fa-code-branch' },
        { label: 'Reusable UI Libraries', rate: 88, icon: 'fas fa-puzzle-piece' },
        { label: 'CI/CD Collaboration', rate: 80, icon: 'fas fa-sync-alt' },
        { label: 'Git', rate: 85, icon: 'fab fa-git' },
        { label: 'VS Code', rate: 90, icon: 'fas fa-code' },
        { label: 'Cursor AI', rate: 85, icon: 'fas fa-magic' },
      ],
      featuredProjects: [
        {
          id: 1,
          title: 'Stella UAT Portal',
          description: 'A comprehensive customer portal for ordering, monitoring and testing network devices. Built with Vue 3 and TypeScript for optimal performance and maintainability.',
          technologies: ['Vue 3', 'TypeScript', 'MVC', 'REST APIs'],
          demoUrl: 'https://dev.stellanetworks.io/',
          githubUrl: '#',
          image: require('@/assets/img/stella-logo.png'),
          users: '500+ Active Users',
          impact: '40% Efficiency Gain'
        },
        {
          id: 2,
          title: 'SpiritX Version 2',
          description: 'Customer portal and support management app for an Australian ISP company. Features real-time monitoring, customer account management, and payment processing.',
          technologies: ['Vue.js', 'Nuxt.js', 'Node.js', 'MySQL'],
          demoUrl: 'https://v2.spiritx.com.au/',
          githubUrl: '#',
          image: require('@/assets/img/spirit-logo.png'),
          users: '10K+ Customers',
          impact: '60% Faster Support'
        },
        {
          id: 3,
          title: 'FSC Website',
          description: 'Corporate website for FSC featuring modern design, responsive layout, and integrated contact forms. Built with Vue.js and optimized for performance.',
          technologies: ['Vue.js', 'HTML5', 'CSS3', 'JavaScript'],
          demoUrl: 'https://apps.fastlogistics.com.ph/fscweb/#/',
          githubUrl: '#',
          image: require('@/assets/img/fsc-logo.png'),
          users: 'Corporate Visitors',
          impact: 'Professional Branding'
        },
        {
          id: 4,
          title: 'Rex Storefront',
          description: 'E-commerce platform for Rex featuring product catalog, shopping cart, and secure payment processing. Mobile-responsive design with modern UI/UX.',
          technologies: ['Vue.js', 'Node.js', 'MySQL', 'Payment Gateway'],
          demoUrl: 'https://estore.rex.com.ph/',
          githubUrl: '#',
          image: require('@/assets/img/rex-logo.png'),
          users: 'Online Customers',
          impact: 'Digital Sales Growth'
        },
        {
          id: 5,
          title: 'Address Cleaner',
          description: 'A powerful address validation and cleaning tool built with Vue 3 and TypeScript. Features Google Maps integration for accurate geocoding, real-time address suggestions, and Firebase for data persistence. Built with Pinia for state management.',
          technologies: ['Vue 3', 'TypeScript', 'Pinia', 'Firebase', 'Google Maps'],
          demoUrl: 'https://address-cleaner.coretexai.com/',
          githubUrl: '#',
          image: require('@/assets/img/address-cleaner-logo.png'),
          users: 'Freelance Project',
          impact: 'Address Validation Tool'
        },
        {
          id: 6,
          title: 'Xevra - Examination Platform',
          description: 'A comprehensive examination platform where proctors create and manage exams, invite examinees, and analyze results. Features smart exam creation, secure proctoring, instant results with analytics, and group management capabilities.',
          technologies: ['React', 'Next.js', 'Node.js', 'Firebase'],
          demoUrl: 'https://xevra-exam.netlify.app/',
          githubUrl: '#',
          image: require('@/assets/img/xevra-logo.png'),
          users: 'Personal Project',
          impact: 'Exam Management System'
        }
      ]
    };
  },
  mounted() {
    // Load Credly badge embed script
    if (!document.querySelector('script[src*="credly.com"]')) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = '//cdn.credly.com/assets/utilities/embed.js';
      document.body.appendChild(script);
    }
  },
};
</script>

<style lang="scss" scoped>
.profile-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* Smooth scrolling for anchor links */
html {
  scroll-behavior: smooth;
}

/* Add padding to sections to account for fixed navbar */
#about, #skills, #projects, #experience, #education, #certifications, #contact {
  scroll-margin-top: 80px;
}

.hero-section {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 24px;
  padding: 50px;
  margin-bottom: 50px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #2196F3, #3F51B5, #9C27B0);
  }
}

.profile-header {
  display: flex;
  align-items: flex-start;
  gap: 50px;
  margin-bottom: 50px;
}

.profile-image-container {
  position: relative;
  flex-shrink: 0;
}

.profile-image {
  width: 200px;
  height: 200px;
  border-radius: 24px;
  object-fit: cover;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  border: 4px solid #fff;

  &:hover {
    transform: translateY(-8px) scale(1.02);
  }
}

.status-indicator {
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  padding: 8px 16px;
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9em;
  color: #666;
  white-space: nowrap;
  z-index: 10;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #4CAF50;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.profile-text {
  flex: 1;
}

.greeting {
  font-size: 1.2em;
  color: #666;
  margin-bottom: 10px;
  font-weight: 500;
}

.name-title {
  font-size: 3.2em;
  font-weight: 800;
  margin: 0 0 15px 0;
  background: linear-gradient(45deg, #2196F3, #3F51B5, #9C27B0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
}

.profession-title {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.role-highlight {
  font-size: 1.6em;
  color: #333;
  font-weight: 600;
}

.experience-badge {
  background: linear-gradient(45deg, #2196F3, #3F51B5);
  color: white;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.9em;
  font-weight: 500;
}

.certification-badge {
  background: linear-gradient(45deg, #FF9900, #FF6600);
  color: white;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.9em;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;
  
  i {
    font-size: 1.1em;
  }
}

.intro-summary {
  font-size: 1.1em;
  color: #666;
  line-height: 1.6;
  margin-bottom: 30px;
  max-width: 600px;
}

.social-links {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.social-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 12px;
  background: #fff;
  color: #2196F3;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  font-weight: 500;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(33, 150, 243, 0.2);
    border-color: #2196F3;
  }

  i {
    font-size: 1.1em;
  }
}

.linkedin-btn:hover {
  background: #0077B5;
  color: white;
  border-color: #0077B5;
}

.github-btn:hover {
  background: #333;
  color: white;
  border-color: #333;
}

.portfolio-btn:hover {
  background: #2196F3;
  color: white;
  border-color: #2196F3;
}

.download-btn {
  background: linear-gradient(45deg, #2196F3, #3F51B5);
  color: white;
  border-color: #2196F3;

  &:hover {
    background: linear-gradient(45deg, #1976D2, #303F9F);
    color: white;
  }
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-title {
  font-size: 2.4em;
  color: #333;
  margin-bottom: 10px;
  font-weight: 700;
}

.section-subtitle {
  font-size: 1.1em;
  color: #666;
  margin: 0;
}

.specialty-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.specialty-card {
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  }

  .card-icon-container {
    width: 60px;
    height: 60px;
    background: linear-gradient(45deg, #2196F3, #3F51B5);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }

  .card-icon {
    font-size: 1.8em;
    color: white;
  }

  h3 {
    margin: 0 0 15px 0;
    color: #333;
    font-size: 1.3em;
    font-weight: 600;
  }

  p {
    color: #666;
    margin: 0 0 20px 0;
    line-height: 1.6;
  }
}

.card-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-tag {
  background: #e3f2fd;
  color: #1976D2;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.85em;
  font-weight: 500;
}

.skills-section {
  background: white;
  padding: 50px;
  border-radius: 24px;
  margin-bottom: 50px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
}

.skills-categories {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.skill-category {
  .category-title {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 1.4em;
    color: #333;
    margin-bottom: 25px;
    font-weight: 600;

    i {
      color: #2196F3;
      font-size: 1.2em;
    }
  }
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.skill-card {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 15px;
  transition: all 0.3s ease;
  border: 1px solid #e9ecef;

  &:hover {
    background: #fff;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
  }
}

.skill-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(45deg, #2196F3, #3F51B5);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  i {
    color: white;
    font-size: 1.2em;
  }
}

.skill-info {
  flex: 1;
  min-width: 0;
}

.skill-name {
  font-weight: 600;
  color: #333;
  display: block;
  margin-bottom: 8px;
}

.skill-bar-container {
  height: 6px;
  background: #e9ecef;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 5px;
}

.skill-bar {
  height: 100%;
  background: linear-gradient(90deg, #2196F3, #3F51B5);
  border-radius: 3px;
  transition: width 1.5s ease-in-out;
}

.skill-level {
  color: #2196F3;
  font-weight: 600;
  font-size: 0.9em;
}

.projects-section, .experience-section, .education-section, .certifications-section, .contact-section {
  background: white;
  padding: 50px;
  border-radius: 24px;
  margin-bottom: 50px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
}

.contact-section {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border: 1px solid #e9ecef;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-top: 40px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 25px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
}

.contact-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(45deg, #2196F3, #3F51B5);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  i {
    color: white;
    font-size: 1.3em;
  }
}

.contact-details {
  flex: 1;

  h4 {
    margin: 0 0 8px 0;
    color: #333;
    font-size: 1.2em;
    font-weight: 600;
  }

  p {
    margin: 0 0 12px 0;
    color: #666;
    font-size: 1em;
  }
}

.contact-link {
  color: #2196F3;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #1976D2;
    text-decoration: underline;
  }
}

.cta-section {
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
  text-align: center;

  h3 {
    margin: 0 0 15px 0;
    color: #333;
    font-size: 1.6em;
    font-weight: 600;
  }

  p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 30px;
  }
}

.cta-buttons {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &.primary {
    background: linear-gradient(45deg, #2196F3, #3F51B5);
    color: white;

    &:hover {
      background: linear-gradient(45deg, #1976D2, #303F9F);
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(33, 150, 243, 0.3);
    }
  }

  &.secondary {
    background: white;
    color: #2196F3;
    border-color: #2196F3;

    &:hover {
      background: #2196F3;
      color: white;
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(33, 150, 243, 0.2);
    }
  }

  i {
    font-size: 1.1em;
  }
}

.project-note {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  background: #fff3cd;
  border-left: 4px solid #ffc107;
  border-radius: 8px;
  margin-bottom: 30px;
  color: #856404;
  font-size: 0.9em;
  
  i {
    color: #ffc107;
    font-size: 1.1em;
    flex-shrink: 0;
  }
}

.featured-projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.project-card {
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  }
}

.project-image {
  position: relative;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;

  .project-card:hover & {
    opacity: 1;
  }
}

.project-link {
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: #2196F3;
    transform: scale(1.1);
  }

  i {
    font-size: 1.2em;
  }
}

.project-content {
  padding: 25px;
}

.project-title {
  font-size: 1.4em;
  color: #333;
  margin: 0 0 12px 0;
  font-weight: 600;
}

.project-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.tech-tag {
  background: linear-gradient(45deg, #2196F3, #3F51B5);
  color: white;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.85em;
  font-weight: 500;
}

.project-stats {
  display: flex;
  gap: 20px;
  padding-top: 15px;
  border-top: 1px solid #f0f0f0;
}

.stat {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #666;
  font-size: 0.9em;

  i {
    color: #2196F3;
    font-size: 1em;
  }
}

.certifications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.certification-card {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;
  display: flex;
  gap: 20px;
  align-items: flex-start;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  }
}

.certification-badge-embed {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 150px;
}

.certification-content {
  flex: 1;
}

.certification-title {
  font-size: 1.4em;
  color: #333;
  margin: 0 0 8px 0;
  font-weight: 600;
}

.certification-level {
  display: inline-block;
  background: linear-gradient(45deg, #FF9900, #FF6600);
  color: white;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.85em;
  font-weight: 500;
  margin: 0 0 15px 0;
}

.certification-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 15px;
}

.certification-dates {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
}

.certification-date {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #2196F3;
  font-size: 0.9em;
  font-weight: 500;

  i {
    font-size: 1em;
  }

  strong {
    color: #333;
    margin-right: 4px;
  }
}

.experience-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.pro-img {
  max-width: 100%;
  height: auto;
  border-radius: 20px;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
}

@media (max-width: 768px) {
  .profile-header {
    flex-direction: column;
    text-align: center;
    gap: 30px;
  }

  .profile-image {
    width: 160px;
    height: 160px;
  }

  .name-title {
    font-size: 2.4em;
  }

  .profession-title {
    justify-content: center;
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

  .hero-section, .skills-section, .projects-section, .experience-section, .education-section, .certifications-section, .contact-section {
    padding: 30px 20px;
  }

  .certifications-grid {
    grid-template-columns: 1fr;
  }

  .certification-card {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }

  .featured-projects {
    grid-template-columns: 1fr;
  }

  .project-stats {
    flex-direction: column;
    gap: 10px;
  }

  .contact-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .cta-btn {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
}
</style>
