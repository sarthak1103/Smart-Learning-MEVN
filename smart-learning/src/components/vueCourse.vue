<template>
  <div>
   <ul>
    <!-- <li v-for="course in courses" :key="course._id"> -->
          <button>{{ course.name }}</button>

      <course v-bind:courses="courses"></course>
    <!-- </li> -->
   </ul>
    
  </div>
</template>

<script>
export default {
    name:'vueCourse',
    props:['courses'],
}
</script>

<style>

</style>