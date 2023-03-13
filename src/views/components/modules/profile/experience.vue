<template>
    <div class="my-wrapper">
        <div v-for="experience in exp" :key="experience.company_name" class="itemized">
            <div><b>{{experience.position}}</b></div>
            <div><b>{{`${experience.company_name}, ${experience.company_address}`}}</b></div>
            <div>{{experience.date}}</div>
            <div>{{experience.job_description}}</div>
            <div class="projects" style="margin-left:20px" v-if="experience.project">Projects:</div> 
            <li v-for="proj in experience.project" :key="proj.name" style="margin-left:20px">
                <a :href="proj.urlString"><b>{{proj.name}}</b></a><p style="margin-left:20px">{{proj.description}}</p>
                <p v-if="proj.skill_used" style="margin-left:20px"><b>Skills Applied: <span class="blink">{{proj.skill_used}}</span></b></p>
            </li>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            exp:[
                {
                    company_name: 'Booth & Partners Philippines Inc',
                    company_address: 'Makati City',
                    date: 'November 2021 – Present',
                    position: 'Frontend Developer',
                    job_description: 'Working as a front-end developer for an Australian client (Australian ISP) customer and internal portal for managing customer accounts and payments. Also doing some modifications and development in Microsoft Dynamics CRM as well as creating my own custom components in it using React js.',
                    project:[
                        {
                            name:'SpiritX Version 2',
                            urlString:'https://v2.spiritx.com.au/',
                            description:'A customer portal and a support management app for an Australian ISP Company.',
                            skill_used:'Vue js (Nuxt)'
                        },
                        {
                            name:'Microsoft Dynamics CRM Projects',
                            description: 'Modification of existing components and creating my own custom controls for it to enhance the look and the flexibility.',
                            skill_used:'React js and MS Dynamics knowledge'
                        }                     
                    ]
                },
                {
                    company_name: 'Yondu Inc',
                    company_address: 'BGC Makati City',
                    date: 'October 2020 – November 2021',
                    position: 'Senior Software Engineer',
                    job_description: 'Working as a front-end developer in ecommerce app and content management systems through agile scrum. Creates and implements reusable components for more effective and faster development for the team depending on the requirements of the client.',
                    project:[
                        {
                            name:'REX Content Management System',
                            urlString:'http://54.255.43.137:81/',
                            description:'A Content Management System web app to manage the contents in the Rex Storefront.',
                            skill_used:'Vue js (Nuxt js)'
                        },
                        {
                            name:'REX Storefront',
                            urlString:'https://stg-estore-sf.yondu.net/',
                            description:'An e-commerce web app for a bookstore.',
                            skill_used:'Vue js (Quasar)'
                        },
                        {
                            name:'WEE Content Management System',
                            urlString:'https://wee-trial.yondu.com/',
                            description:'A Content Management System web app to manage the contents in the WEE Storefront.',
                            skill_used:'Vue js (Nuxt js)'
                        },
                        {
                            name:'WEE Storefront',
                            urlString:'https://wee-trial.storefront.yondu.com/',
                            description:'An e-commerce web app.',
                            skill_used:'Vue js (Nuxt js)'
                        }
                        
                    ]
                },
                {
                    company_name: 'Fast Services Corporation',
                    company_address: 'Alabang Muntinlupa City',
                    date: 'May 2012 – October 2020',
                    position: 'IT Programmer',
                    job_description: 'Worked closely with software development and testing team members to design and develop robust solutions to meet client requirements for functionality, scalability and performance. Built, tested and deployed scalable, highly available and modular software products. Built databases and table structures. Modified existing software to correct errors, adapt to new hardware and improve performance. Maintained existing applications and designed and delivered new applications.',
                    project:[
                        {
                            name:'FSC Website',
                            urlString:'https://apps.fastlogistics.com.ph/fscweb/#/',
                            description:'Company\'s official commercial website. Also act as an employee portal to access employees information and tasks including the status of those. This includes the "Ladderized Report" automation.',
                            skill_used: 'Vue js for frontend, and C#.NET for the backend.'
                        },
                        {
                            name:'Aquila Go',
                            urlString:'https://aquilago.fastlogistics.com.ph/',
                            description:'Warehouse Management System web app and mobile.',
                            skill_used: 'Vue js for frontend, C#.NET for the backend, and Capacitor for compilation into mobile.'
                        },
                        {
                            name:'Itsek Web',
                            urlString:'https://itsek.fastlogistics.com.ph/',
                            description:'A warehouse checklist web app.',
                            skill_used: 'Vue js for frontend, C#.NET for the backend, and Capacitor for compilation into mobile.'
                        },
                        {
                            name:'Itsek Mobile',
                            urlString:'https://play.google.com/store/apps/details?id=itsektwo.fastgroup.biz',
                            description:'A warehouse checklist app for mobile devices.',
                            skill_used: 'Vue js for frontend, C#.NET for the backend, and Capacitor for compilation into mobile.'
                        },
                        {
                            name:'Vendors Accreditation Systems Online (VASO)',
                            urlString:'https://apps.fastlogistics.com.ph/vaso/#/login',
                            description:'A portal for all vendors/suppliers that they are using to apply as an accredited vendor/supplier for the company.',
                            skill_used: 'Vue js for frontend, and C#.NET for the backend.'
                        },
                        {
                            name:'Quality Management System (QMS)',
                            urlString:'https://apps.fastlogistics.com.ph/qms/#/',
                            description:'A report automation web app focused on automatically generating reports with analysis attached pertaining to quality aspect of the workplace.',
                            skill_used: 'Vue js for frontend, and C#.NET for the backend.'
                        },
                    ]
                },
                {
                    company_name: 'Enigma Technologies Inc. ',
                    company_address: 'Sta. Rosa, Laguna',
                    date: 'October 2020 – Present',
                    position: 'Computer Technician',
                    job_description: 'Assembles, configure and troubleshoot computers both laptop and desktop. Network cabling and CCTV installation.'
                },
            ]
        }
    }
}
</script>
<style scoped>
.itemized{
    margin:20px;
}
.my-wrapper{
    margin-top:-30px;
}
.projects{
    font-weight: bold;
    margin-top:10px;
    margin-bottom: 5px;
}
.blink{
  animation: blink 5s infinite;
}
@keyframes blink{
  0% {
    color: red;
  }
  20% {
    color: green;
  }
  40% {
    color: yellow;
  }
  60% {
    color: blue;
  }
  80% {
    color: orange;
  }
  100% {
    color: red;
  }
}
@-webkit-keyframes blink{
  0% {
    color: red;
  }
  20% {
    color: green;
  }
  40% {
    color: yellow;
  }
  60% {
    color: blue;
  }
  80% {
    color: orange;
  }
  100% {
    color: red;
  }
}
</style>