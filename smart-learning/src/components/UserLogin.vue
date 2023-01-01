<template>
  <div>
    <b-button @click="logout()">
     Logout
    </b-button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
 name:'UserLogin',
 data(){
    return{

    }
 },
 mounted(){
   axios.get(`http://localhost:3000/users`,{headers:{token:localStorage.getItem('token')}})
   .then(res=>{
    console.log(res)
 })
 },
 created(){
    //user is not authenticated
  if(localStorage.getItem('token')===null){
    this.$router.push({name:'login'});
  }
 },
 methods:{
  logout(){
    localStorage.clear();
    this.$router.push({name:'login'});
  }
 }
}
</script>

<style scoped>

</style>