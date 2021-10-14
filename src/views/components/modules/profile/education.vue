<template>
    <div class="my-wrapper">
        <div v-for="edu in education" :key="edu.course" class="itemized">
            <div><b>{{edu.course}}</b></div>
            <div><b>{{edu.school_name}}</b></div>
            <div>{{edu.years}}</div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            education:[
                {
                    school_name: 'COLEGIO DE SAN JUAN DE LETRAN - CALAMBA',
                    course: 'BACHELOR OF SCIENCE IN COMPUTER ENGINEERING',
                    years: '2004 - 2009',
               }
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
</style>