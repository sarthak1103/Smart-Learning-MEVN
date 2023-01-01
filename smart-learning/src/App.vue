<template>
  <div class="body">
   <NavMenu/>
   <!-- <HomePage/> -->
   <div class="my-4 main">
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavMenu from '@/components/NavMenu.vue'
// import HomePage from '@/components/HomePage.vue'
export default {
  name: 'App',
  components: {
   NavMenu,
  //  HomePage
  }
}
</script>


<style scoped>
.main {
  margin: 30px;
}

</style>
