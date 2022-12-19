<template>
  <b-container fluid="md">
    <b-row>
        <b-col sm="4" v-for="course in courses" :key="course._id">
          <b-card >
            <b-img v-bind:src="course.image"></b-img>
            
                <b-card-title >
                   {{ course.name }}
                </b-card-title>
          </b-card>
        </b-col>
    </b-row>
  </b-container>
   
</template>

<script>
import API from '@/api';
export default {
 name:'HomePage',
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

<style>

</style>