<template>
    <div class="my-wrapper">
        <div v-for="experience in exp" :key="experience.company_name" class="itemized">
            <div><b>{{experience.position}}</b></div>
            <div><b>{{`${experience.company_name}, ${experience.company_address}`}}</b></div>
            <div>{{experience.date}}</div>
            <div>{{experience.job_description}}</div>
            <div class="projects" v-if="experience.project">Projects:</div> 
            <li v-for="proj in experience.project" :key="proj.name">
                <a :href="proj.urlString">{{proj.name}}</a> 
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
                    company_name: 'Yondu Inc',
                    company_address: 'BGC Makati City',
                    date: 'October 2020 – Present',
                    position: 'Vue Developer',
                    job_description: 'Working as a front-end developer in ecommerce app and content management systems through agile scrum. Creates and implements reusable components for more effective and faster development for the team depending on the requirements of the client.',
                    project:[
                        {
                            name:'REX Content Management System',
                            urlString:'http://54.255.43.137:81/'
                        },
                        {
                            name:'REX Storefront',
                            urlString:'https://stg-estore-sf.yondu.net/'
                        },
                        {
                            name:'WEE Content Management System',
                            urlString:'https://wee-trial.yondu.com/'
                        },
                        {
                            name:'WEE Storefront',
                            urlString:'https://wee-trial.storefront.yondu.com/'
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
                            urlString:'https://apps.fastlogistics.com.ph/fscweb/#/'
                        },
                        {
                            name:'Aquila Go',
                            urlString:'https://aquilago.fastlogistics.com.ph/'
                        },
                        {
                            name:'Itsek Web',
                            urlString:'https://itsek.fastlogistics.com.ph/'
                        },
                        {
                            name:'Itsek Mobile',
                            urlString:'https://play.google.com/store/apps/details?id=itsektwo.fastgroup.biz'
                        },
                        {
                            name:'Vendors Accreditation Systems Online (VASO)',
                            urlString:'https://apps.fastlogistics.com.ph/vaso/#/login'
                        },
                        {
                            name:'Quality Management System (QMS)',
                            urlString:'https://apps.fastlogistics.com.ph/qms/#/'
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
/* .itemized{
    margin:20px;
} */
.my-wrapper{
    margin-top:-30px;
}
.projects{
    font-weight: bold;
}
</style>