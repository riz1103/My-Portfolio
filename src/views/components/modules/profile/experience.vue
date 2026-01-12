<template>
  <div class="experience-timeline">
    <div v-for="experience in exp" :key="experience.company_name" class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <div class="experience-header">
          <div class="position-info">
            <h3 class="position">{{ experience.position }}</h3>
            <div class="company-info">
              <i class="material-icons">business</i>
              <span>{{ `${experience.company_name}, ${experience.company_address}` }}</span>
            </div>
          </div>
          <div class="experience-meta">
            <span class="date">{{ experience.date }}</span>
            <div class="experience-duration">
              <i class="material-icons">schedule</i>
              <span>{{ getDuration(experience.date) }}</span>
            </div>
          </div>
        </div>

        <p class="job-description">{{ experience.job_description }}</p>

        <div v-if="experience.project" class="projects-section">
          <h4 class="projects-title">
            <i class="material-icons">rocket_launch</i>
            Key Projects
          </h4>
          <div v-if="!isCurrentJob(experience.date)" class="project-note">
            <i class="material-icons">info</i>
            <span>Note: Some project links may no longer be accessible as I no longer have control over these deployments.</span>
          </div>
          <div class="projects-grid">
            <div v-for="proj in experience.project" :key="proj.name" class="project-card">
              <div class="project-header">
                <h5 class="project-name">
                  <a v-if="!proj.note" :href="proj.urlString" target="_blank" class="project-link">
                    {{ proj.name }}
                    <i class="material-icons">open_in_new</i>
                  </a>
                  <span v-else class="project-name-text">{{ proj.name }}</span>
                </h5>
              </div>
              
              <p class="project-description">{{ proj.description }}</p>
              
              <div v-if="proj.note" class="project-specific-note">
                <i class="material-icons">info</i>
                <span>{{ proj.note }}</span>
              </div>
              
              <div v-if="proj.skill_used" class="skills-used">
                <div class="skills-label">
                  <i class="material-icons">code</i>
                  Technologies Used:
                </div>
                <div class="skill-tags">
                  <span v-for="skill in proj.skill_used.split(',')" 
                        :key="skill" 
                        class="skill-tag">
                    {{ skill.trim() }}
                  </span>
                </div>
              </div>
              
              <div v-if="proj.urlString && !proj.note" class="project-actions">
                <a :href="proj.urlString" target="_blank" class="project-link-btn">
                  <i class="material-icons">open_in_new</i>
                  View Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      exp: [
        {
          company_name: 'EMAPTA Philippines Incorporated',
          company_address: 'Makati City',
          date: '09/2023 – Current',
          position: 'Senior Front-end Developer',
          job_description: 'Lead development of Vue 3 + TypeScript frontend components for customer-facing and internal enterprise portals for an Australian Hospitality and Data Networking company. Designed and implemented reusable, scalable UI components to improve development speed and consistency. Improved performance, maintainability, and reliability of frontend applications. Collaborated closely with backend, UI/UX and product teams to deliver features aligned with business goals. Actively involved in code reviews, bug resolution, and architectural improvements.',
          project: [
            {
              name: 'Stella UAT Portal',
              urlString: 'https://dev.stellanetworks.io/',
              description: 'A customer portal for ordering, monitoring and testing network devices of customers.',
              skill_used: 'Vue 3, Typescript, MVC'
            },
            {
              name: 'Stella Config Portal',
              urlString: 'https://config-testing.stellaportal.dev',
              description: 'A portal used to implement deeper testing and configuration of network devices deployed in customers',
              skill_used: 'Vue 3, Typescript, Pinia, Quasar',
              note: 'This portal has been merged with the UAT Portal and is now part of it. The link is no longer accessible.'
            }
          ]
        },
        {
          company_name: 'Booth & Partners Philippines Inc',
          company_address: 'Makati City',
          date: '11/2021 – 09/2023',
          position: 'Frontend Developer',
          job_description: 'Developed customer portal and support platform for Australian telecommunications company, improving user engagement. Maintained and enhanced frontend systems to ensure stability and timely deployments, contributing to seamless user experience. Diagnosed and fixed UI bugs, performance issues, and edge cases. Supported continuous delivery while adhering to strict timelines and quality standards. Collaborated with cross-functional teams in agile environment to deliver responsive and user-centric solutions.',
          project: [
            {
              name: 'SpiritX Version 2',
              urlString: 'https://v2.spiritx.com.au/',
              description: 'A customer portal and a support management app for an Australian ISP Company.',
              skill_used: 'Vue js (Nuxt)'
            },
            {
              name: 'Microsoft Dynamics CRM Projects',
              description: 'Modification of existing components and creating my own custom controls for it to enhance the look and the flexibility.',
              skill_used: 'React js and MS Dynamics knowledge'
            }
          ]
        },
        {
          company_name: 'Yondy Inc',
          company_address: 'BGC Makati City',
          date: '11/2020 – 11/2021',
          position: 'Vue Developer',
          job_description: 'Developed frontend features for e-commerce applications and content management systems. Built reusable Vue components to improve team productivity and code consistency. Participated in Agile Scrum ceremonies, sprint planning, and reviews. Translated business requirements into clean, maintainable frontend solutions.',
          project: [
            {
              name: 'REX Content Management System',
              urlString: 'http://54.255.43.137:81/',
              description: 'A Content Management System web app to manage the contents in the Rex Storefront.',
              skill_used: 'Vue js (Nuxt js)'
            },
            {
              name: 'REX Storefront',
              urlString: 'https://estore.rex.com.ph/',
              description: 'An e-commerce web app for a bookstore.',
              skill_used: 'Vue js (Quasar)'
            },
            {
              name: 'WEE Content Management System',
              urlString: 'https://wee-trial.yondu.com/',
              description: 'A Content Management System web app to manage the contents in the WEE Storefront.',
              skill_used: 'Vue js (Nuxt js)'
            },
            {
              name: 'WEE Storefront',
              urlString: 'https://wee-trial.storefront.yondu.com/',
              description: 'An e-commerce web app.',
              skill_used: 'Vue js (Nuxt js)'
            }
          ]
        },
        {
          company_name: 'Fast Services Corporation',
          company_address: 'Alabang Muntinlupa City',
          date: '05/2012 – 10/2020',
          position: 'IT Programmer',
          job_description: 'Designed and developed business management and analytics systems. Worked across frontend and backend using C#.NET, MS SQL, and web technologies. Collaborated with QA and stakeholders to ensure scalable and reliable solutions. Contributed to long-term system maintenance and performance improvements.',
          project: [
            {
              name: 'FSC Website',
              urlString: 'https://apps.fastlogistics.com.ph/fscweb/#/',
              description: 'Company\'s official commercial website. Also act as an employee portal to access employees information and tasks including the status of those. This includes the "Ladderized Report" automation.',
              skill_used: 'Vue js frontend, C#.NET backend'
            },
            {
              name: 'Aquila Go',
              urlString: 'https://aquilago.fastlogistics.com.ph/',
              description: 'Warehouse Management System web app and mobile.',
              skill_used: 'Vue js frontend, C#.NET backend, Capacitor mobile compilation'
            },
            {
              name: 'Itsek Web',
              urlString: 'https://itsek.fastlogistics.com.ph/',
              description: 'A warehouse checklist web app.',
              skill_used: 'Vue js frontend, C#.NET backend, Capacitor mobile compilation'
            },
            {
              name: 'Itsek Mobile',
              urlString: 'https://play.google.com/store/apps/details?id=itsektwo.fastgroup.biz',
              description: 'A warehouse checklist app for mobile devices.',
              skill_used: 'Vue js frontend, C#.NET backend, Capacitor mobile compilation'
            },
            {
              name: 'Vendors Accreditation Systems Online (VASO)',
              urlString: 'https://apps.fastlogistics.com.ph/vaso/#/login',
              description: 'A portal for all vendors/suppliers that they are using to apply as an accredited vendor/supplier for the company.',
              skill_used: 'Vue js frontend, C#.NET backend'
            },
            {
              name: 'Quality Management System (QMS)',
              urlString: 'https://apps.fastlogistics.com.ph/qms/#/',
              description: 'A report automation web app focused on automatically generating reports with analysis attached pertaining to quality aspect of the workplace.',
              skill_used: 'Vue js frontend, C#.NET backend'
            },
          ]
        },
        {
          company_name: 'Enigma Technologies Inc.',
          company_address: 'Sta. Rosa, Laguna',
          date: '01/2010 – 02/2011',
          position: 'Computer Technician',
          job_description: 'Assembled, configured, and troubleshot laptops and desktops. Performed network cabling and CCTV installation. Provided on-site technical support and maintenance.'
        },
      ]
    };
  },
  methods: {
    isCurrentJob(dateRange) {
      return dateRange.includes('Current') || dateRange.includes('Present');
    },
    getDuration(dateRange) {
      const dates = dateRange.split(' – ');
      if (dates.length !== 2) return 'Duration not specified';
      
      // Handle MM/YYYY format
      const parseDate = (dateStr) => {
        if (dateStr === 'Current' || dateStr === 'Present') return new Date();
        const parts = dateStr.split('/');
        if (parts.length === 2) {
          return new Date(parseInt(parts[1]), parseInt(parts[0]) - 1, 1);
        }
        return new Date(dateStr);
      };
      
      const startDate = parseDate(dates[0]);
      const endDate = parseDate(dates[1]);
      
      const diffTime = Math.abs(endDate - startDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      const years = Math.floor(diffDays / 365);
      const months = Math.floor((diffDays % 365) / 30);
      
      if (years > 0) {
        return months > 0 ? `${years}y ${months}m` : `${years}y`;
      } else {
        return `${months}m`;
      }
    }
  }
};
</script>

<style scoped>
.experience-timeline {
  position: relative;
  padding: 20px 0;
}

.timeline-item {
  position: relative;
  padding-left: 40px;
  margin-bottom: 50px;
}

.timeline-marker {
  position: absolute;
  left: 0;
  top: 0;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #2196F3;
  border: 3px solid #fff;
  box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.2);
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 20px;
  bottom: -50px;
  width: 2px;
  background: rgba(33, 150, 243, 0.2);
}

.timeline-item:last-child::before {
  display: none;
}

.timeline-content {
  background: #fff;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.timeline-content:hover {
  transform: translateX(5px);
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  gap: 20px;
}

.position-info {
  flex: 1;
}

.position {
  font-size: 1.5em;
  color: #2196F3;
  margin: 0 0 8px 0;
  font-weight: 600;
}

.experience-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  flex-shrink: 0;
}

.date {
  color: #666;
  font-size: 0.95em;
  padding: 6px 14px;
  background: #f8f9fa;
  border-radius: 16px;
  font-weight: 500;
  border: 1px solid #e9ecef;
}

.experience-duration {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #666;
  font-size: 0.9em;
  
  i {
    font-size: 16px;
    color: #2196F3;
  }
}

.company-info {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #555;
  margin-bottom: 15px;
  
  i {
    color: #666;
    font-size: 20px;
  }
}

.job-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.projects-section {
  margin-top: 25px;
}

.projects-title {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #333;
  margin-bottom: 15px;
  
  i {
    color: #2196F3;
  }
}

.project-note {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: #fff3cd;
  border-left: 4px solid #ffc107;
  border-radius: 8px;
  margin-bottom: 20px;
  color: #856404;
  font-size: 0.85em;
  
  i {
    color: #ffc107;
    font-size: 18px;
    flex-shrink: 0;
  }
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.project-card {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  transition: transform 0.2s ease;
}

.project-card:hover {
  transform: translateY(-3px);
}

.project-header {
  margin-bottom: 12px;
}

.project-name {
  margin: 0;
  font-size: 1.1em;
}

.project-name-text {
  color: #333;
  font-weight: 600;
}

.project-link {
  color: #2196F3;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
  
  &:hover {
    text-decoration: underline;
  }
  
  i {
    font-size: 16px;
  }
}

.project-description {
  color: #666;
  font-size: 0.95em;
  line-height: 1.5;
  margin-bottom: 15px;
}

.project-specific-note {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 10px 12px;
  background: #e3f2fd;
  border-left: 3px solid #2196F3;
  border-radius: 6px;
  margin-bottom: 15px;
  color: #1565C0;
  font-size: 0.85em;
  line-height: 1.4;
  
  i {
    color: #2196F3;
    font-size: 18px;
    flex-shrink: 0;
    margin-top: 2px;
  }
}

.skills-used {
  margin-top: 15px;
}

.skills-label {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #555;
  margin-bottom: 8px;
  
  i {
    font-size: 18px;
    color: #2196F3;
  }
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-tag {
  background: #e3f2fd;
  color: #1976D2;
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.9em;
  transition: all 0.2s ease;
  
  &:hover {
    background: #2196F3;
    color: white;
    transform: translateY(-2px);
  }
}

.project-actions {
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #e9ecef;
}

.project-link-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  background: linear-gradient(45deg, #42A5F5, #2196F3);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-size: 0.95em;
  font-weight: 600;
  transition: all 0.3s ease;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  
  &:hover {
    background: linear-gradient(45deg, #2196F3, #1976D2);
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(33, 150, 243, 0.3);
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
  }
  
  i {
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  .timeline-item {
    padding-left: 30px;
  }
  
  .experience-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
  
  .experience-meta {
    align-items: flex-start;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .project-link-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>