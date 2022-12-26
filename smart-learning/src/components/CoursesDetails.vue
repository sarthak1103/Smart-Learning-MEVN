<template>
 
  <b-container fluid="md">
    <b-row>
        <b-col sm="4" v-for="course in courses" :key="course._id">
          <b-card >
           <b-img
           src="course.image.toString('base64')"
            class="card-img-top card-img-overlay"
            :alt="course.name"  
           />
            
                <b-card-title >
                   {{ course.name }}
                </b-card-title>
                <b-card-text>
                  {{ course.category }}
                </b-card-text>
              <div>
                 <b-button variant="primary">Enroll</b-button>
            </div>
          </b-card>
        </b-col>
    </b-row>
  </b-container>
   
</template>

<script>
import API from '@/api';
export default {
 name:'CoursesDetails',
 data(){
    return{
        courses:[],

    };
 },
   async created(){
    this.courses= await API.getAllCourse();
   }
};
 
</script>

<style scoped >

</style>