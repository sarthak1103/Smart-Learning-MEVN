<template>
<div class="container mt-5 ">
  <h1 class="text-center">Happy to see you here </h1>
  <p class="lead text-center"> you  are just one step in the process
  </p>
  <b-row class="justify-content-center mt-5 ">
    <b-col cols="12" md="8" lg="6">
      <b-form @submit.prevent="login()">
        <b-form-group label="UserName:" label-for="username">
          <b-form-input id="username" v-model="username" type="text" required></b-form-input>
        </b-form-group>
        <b-form-group label="Password:" label-for="password">
          <b-form-input id="password" v-model="password" type="password" required></b-form-input>
        </b-form-group>
        <b-button variant="primary" @click="login()">Submit</b-button>
      </b-form>
    </b-col>
  </b-row>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name:'LoginPage',
  data(){
  
  return {
     username:'',
     password:'',
  }
},
methods:{
     login(){
     
      const credentials={
        username:this.username,
        password:this.password,
      }
      console.log(credentials.username);
    axios.post(`http://localhost:3000/users/login`, credentials)
    .then(response =>{
      //if succesfull
      if(response.status===200){
        localStorage.setItem('token',response.data.data.token);
        this.$router.push({name:'courses'});
      }
      console.log(response)
    }).catch(error =>{
      console.log(error.response.data.response );
    });
  }
}
}
</script>
<style scoped>

</style>
