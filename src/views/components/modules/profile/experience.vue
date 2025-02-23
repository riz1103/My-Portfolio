<template>
  <div class="experience-timeline">
    <div v-for="experience in exp" :key="experience.company_name" class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <div class="experience-header">
          <h3 class="position">{{ experience.position }}</h3>
          <span class="date">{{ experience.date }}</span>
        </div>
        
        <div class="company-info">
          <i class="material-icons">business</i>
          <span>{{ `${experience.company_name}, ${experience.company_address}` }}</span>
        </div>

        <p class="job-description">{{ experience.job_description }}</p>

        <div v-if="experience.project" class="projects-section">
          <h4 class="projects-title">
            <i class="material-icons">rocket_launch</i>
            Key Projects
          </h4>
          
          <div class="projects-grid">
            <div v-for="proj in experience.project" :key="proj.name" class="project-card">
              <div class="project-header">
                <h5 class="project-name">
                  <a :href="proj.urlString" target="_blank" class="project-link">
                    {{ proj.name }}
                    <i class="material-icons">open_in_new</i>
                  </a>
                </h5>
              </div>
              
              <p class="project-description">{{ proj.description }}</p>
              
              <div v-if="proj.skill_used" class="skills-used">
                <div class="skills-label">
                  <i class="material-icons">code</i>
                  Technologies:
                </div>
                <div class="skill-tags">
                  <span v-for="skill in proj.skill_used.split(',')" 
                        :key="skill" 
                        class="skill-tag">
                    {{ skill.trim() }}
                  </span>
                </div>
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
          company_name: 'EMAPTA Philippines Inc',
          company_address: 'Makati City',
          date: 'September 2023 – Present',
          position: 'Senior Frontend Developer',
          job_description: 'Working with Australian client that is providing network management solutions for Hotels. I am assigned to customer and in-house portal apps to cater ordering, monitoring and testing of network devices deployed in the customer.',
          project: [
            {
              name: 'Stella UAT Portal',
              urlString: 'https://star-dev.stellanetworks.io/',
              description: 'A customer portal for ordering, monitoring and testing network devices of customers.',
              skill_used: 'Vue 3, Typescript, MVC'
            },
            {
              name: 'Stella Config Portal',
              urlString: 'https://config-testing.stellaportal.dev',
              description: 'A portal used to implement deeper testing and configuration of network devices deployed in customers',
              skill_used: 'Vue 3, Typescript, Pinia, Quasar'
            }
          ]
        },
        {
          company_name: 'Booth & Partners Philippines Inc',
          company_address: 'Makati City',
          date: 'November 2021 – September 2023',
          position: 'Frontend Developer',
          job_description: 'Working as a front-end developer for an Australian client (Australian ISP) customer and internal portal for managing customer accounts and payments. Also doing some modifications and development in Microsoft Dynamics CRM as well as creating my own custom components in it using React js.',
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
          company_name: 'Yondu Inc',
          company_address: 'BGC Makati City',
          date: 'October 2020 – November 2021',
          position: 'Senior Software Engineer',
          job_description: 'Working as a front-end developer in ecommerce app and content management systems through agile scrum. Creates and implements reusable components for more effective and faster development for the team depending on the requirements of the client.',
          project: [
            {
              name: 'REX Content Management System',
              urlString: 'http://54.255.43.137:81/',
              description: 'A Content Management System web app to manage the contents in the Rex Storefront.',
              skill_used: 'Vue js (Nuxt js)'
            },
            {
              name: 'REX Storefront',
              urlString: 'https://stg-estore-sf.yondu.net/',
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
          date: 'May 2012 – October 2020',
          position: 'IT Programmer',
          job_description: 'Worked closely with software development and testing team members to design and develop robust solutions to meet client requirements for functionality, scalability and performance. Built, tested and deployed scalable, highly available and modular software products. Built databases and table structures. Modified existing software to correct errors, adapt to new hardware and improve performance. Maintained existing applications and designed and delivered new applications.',
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
          company_name: 'Enigma Technologies Inc. ',
          company_address: 'Sta. Rosa, Laguna',
          date: 'January 2010 – February 2011',
          position: 'Computer Technician',
          job_description: 'Assembles, configure and troubleshoot computers both laptop and desktop. Network cabling and CCTV installation.'
        },
      ]
    };
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
  align-items: center;
  margin-bottom: 15px;
}

.position {
  font-size: 1.4em;
  color: #2196F3;
  margin: 0;
}

.date {
  color: #666;
  font-size: 0.9em;
  padding: 5px 12px;
  background: #f5f5f5;
  border-radius: 15px;
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
  margin-bottom: 20px;
  
  i {
    color: #2196F3;
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

@media (max-width: 768px) {
  .timeline-item {
    padding-left: 30px;
  }
  
  .experience-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>