<template>
  <main>
  <header>
    <div class="content">
      <div className="left-content">
        <div className="left-text-container">
          <h1>
            Welcome to Smart Learning Platform
          </h1>
          <p className="white">
            if you already have account please login
          </p>
          <div class="container mt-5 mb-0 ml-3 border rounded-sm border-transparent p-0 pl-0  shadow-lg p-3 ">
            <b-row class="justify-content-center mt-5  ml-2 mr-15 ">
              <b-col cols="12" md="4" sm="0">
                <b-form @submit.prevent="signUp()">
                  <h3 class="text-center text-{variant}"> SignUp</h3>
                  <b-form-group label="UserName:" label-for="username" class="mt-3">
                    <b-form-input id="username" v-model="username" type="text" required></b-form-input>
                  </b-form-group>
                  <b-form-group label="Email:" label-for="email">
                    <b-form-input id="email" v-model="email" type="email" required></b-form-input>
                  </b-form-group>
                  <b-form-group label="Password:" label-for="password">
                    <b-form-input id="password" v-model="password" type="password" required></b-form-input>
                  </b-form-group>
                  <!-- <b-button size="lg" class="pb-2" name="signup" @click="signUp()">SignUp</b-button>
                  <b-button size="lg" class="pb-2" name="login" >LogIn</b-button> -->

                  <b-row>
                    <b-col lg="4" ><b-button class="pl-3 pr-3" name="signup" @click="signUp()">SignUp</b-button></b-col>
                    <b-col lg="4" class="pr-9 pl-5" ><b-button class="pl-3 pr-3" name="login">LogIn</b-button></b-col>
                  </b-row>
                </b-form>
              </b-col>
            </b-row>
          </div>
        </div>
      </div>
    </div>
  </header>
    <!-- <section>
    <div class="container mt-5 " >
      <h1 class="text-center">Welcome to Smart Learning Platform</h1>
      <p class="lead text-center">if you already have account please login  
      </p>
    </div>
    </section>
    <section class="form">
    <div class="container mt-5 mb-0 ml-3 border rounded-sm border-transparent p-0 pl-0  shadow-lg p-3 ">
    <b-row class="justify-content-center mt-5  ml-2 mr-15 ">
      <b-col cols="12" md="4" sm="0">
        <b-form @submit.prevent="signUp()"  >
          <h3 class="text-center text-{variant}"> SignUp</h3>
          <b-form-group label="UserName:" label-for="username"  class="mt-3">
            <b-form-input id="username" v-model="username" type="text" required></b-form-input>
          </b-form-group>
          <b-form-group label="Email:" label-for="email">
            <b-form-input id="email" v-model="email" type="email" required></b-form-input>
          </b-form-group>
          <b-form-group label="Password:" label-for="password">
            <b-form-input id="password" v-model="password" type="password" required></b-form-input>
          </b-form-group>
          <b-button class="mb-5" variant="primary" @click="signUp()">Submit</b-button>
        </b-form>
      </b-col>
    </b-row>
  </div>

  </section> -->
    </main>


</template>


<script>
//  import Register from '@/api';
import axios from 'axios';
import image from '@/components/bg-image.jpeg';

export default {
name:'RegisterPage',
data(){
 
return  {
 username:'',
 email:'',
 password:'',
 image:image
}
},
methods:{
  async signUp() {
    const newUser={
    username:this.username,
    email:this.email,
    password:this.password,
   
  }
     axios.post(`http://localhost:3000/users/register`,newUser)
      .then(res=>{
        console.log(res)
        this.$router.push({ name: 'login' }) 
      }).catch(err=>{
        console.log(err.response);
      });
 
}
}
}


</script>

<style scoped>
.form{
      display: flex;
        align-items: center;
        padding-right: 2rem;
    }

    h2 {
      font-family: 'Cookie', cursive;
      color: var(--accent-pink);
    }
  
    h1 {
      font-size: 2.4rem;
      font-weight: 600;
      color: black;
      margin: 10px 0px 0px 0px;
    }
  
    .white {
      padding: 1.4rem 0;
      line-height: 1.8rem;
      color: black;
    }
  
    .left-content .Store img {
      width: 30%;
      height: auto;
      cursor: pointer;
      margin: 0px 10px 0px 0px;
    }
    .content{
      display:grid;
      grid-template-columns: repeat(2, 1fr);
      padding: 2rem 0px;}

    .left-content {
      display: flex;
      align-items: center;
      padding-right: 2rem;

    }
    #signup{
        padding: .7rem 2rem;
        font-family: inherit;
        font-size: inherit;
        color: inherit;
        border-radius: 20px;
        outline: none;
        border: none;
        cursor: pointer;
    }
</style>


    