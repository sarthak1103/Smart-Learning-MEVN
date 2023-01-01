<template>
  <b-container fluid="md">
    <b-row>
        <b-col sm="4" v-for="course in courses" :key="course._id">
            
          <b-card >
           <b-card-img
           :src="`${course.image}`"
            height="250"></b-card-img>
           
            <p>{{ course.content }}</p>
                <b-card-title >
                   {{ course.name }}
                </b-card-title>
                <b-card-text>
                  {{ course.category }}
                </b-card-text>
              <div>
             
                <a :href="course.youtubeUrl" alt="link" class="active-link" target="_blank">
                 <b-button variant="primary" >Watch Now</b-button> 
                </a>
            </div>
          </b-card>
        </b-col>
          
    </b-row>
    
  
  </b-container> 
  
</template>

<script>
import API from '@/api';
//  import vueCourse from '@/components/vueCourse.vue'
export default {
 name:'CoursesDetails',
//  components:{
//   vueCourse
//  }
 
 data(){
    return{
        courses:[],
        url: 'google.com'

    };
 },
   async created(){
  
    this.courses= await API.getAllCourse();
    console.log('token');
  }
};
 
</script>

<style scoped >

</style>