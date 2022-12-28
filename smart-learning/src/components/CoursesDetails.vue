<template>
  <b-container fluid="md">
    <b-row>
        <b-col sm="4" v-for="course in courses" :key="course._id">
          <b-card >
           <b-img
           :src="`/${course.image}`"
            height="250"></b-img>
           
            <p>{{ course.content }}</p>
                <b-card-title >
                   {{ course.name }}
                </b-card-title>
                <b-card-text>
                  {{ course.category }}
                </b-card-text>
              <div>
               <router-link >
                
                 <b-button variant="primary" to="/vueCourse">Go To Course</b-button> 
                </router-link>
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

    };
 },
   async created(){
    this.courses= await API.getAllCourse();
   }
};
 
</script>

<style scoped >

</style>