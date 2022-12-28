<template>
  <main>
    <header>
      <div class="content">
        <div class="left-content" style="margin-top: 0px;">
          <div class="left-text-container">
            <div class="container" style="margin-right:-30px">
              <b-form @submit.prevent="login()">
                <h1 class="text-{variant}">Welcome to Smart Learning Platform</h1>
                <p class="white">If you already have a Smart Learning Platform account, please sign in
                  below</p>
                <div class="formContent border-transparent shadow-lg p-3" style="width:60%; height:250px;">
                  <b-form-group label="UserName:" label-for="username" class="mt-4">
                    <b-form-input id="username" class="inpt" v-model="username" type="text" required size="sm">
                    </b-form-input>
                  </b-form-group>
                  <b-form-group label="Password:" label-for="password" class="mt-4">
                    <b-form-input id="password" v-model="password" type="password" required></b-form-input>
                  </b-form-group>
                </div>
                <div class="text-left" style="padding:20px; width:60%; height:250px; margin-left:9%;">
                  <b-button id="login" name="login" class="pl-4 pr-4" @click="login()">LogIn</b-button>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <b-button class="pl-4 pr-4" id="signup" name="signup" to="{name:SignUp}">SignUp</b-button>
                </div>
              </b-form>
            </div>
          </div>
        </div>
        <div class="right-content girl">
          <img :src="image" alt="" style="height:150%;" />
        </div>
      </div>
    </header>
  
  
    <aboutUs>
      <div class="card bg-success" >
        <div class="card-header">
        </div>
        <div class="card-body">
          <h5 class="card-title">About</h5>
          <hr>
          <div class="row"></div>
          <div  class="cols-12  " >
            <img :src="aboutUs" style="height:120px" />
          </div><br>
          <div class="col">
            <div class="container-fluid">
              <p> smart learning platform is open and free for each and everyone who are willing to learn the new skills and upgrade themselves according to the industry fit its a free learning platform you do not need to spends thousands of rupees on learning </p>
              
              <p>
                This website is created by Abhinav Verma , Sai jeevan , Snehashish Samanta and Satyam
                Deepu in
                Industrial Summer Training 20ITB-22 Website Development and Database Management System
                organized by
                Chandigarh University.
              </p>
              <p></p>
            </div>
          </div>
          <div class="card-deck">
            
            </div>
            <div class="card">
              
            <div class="card">
              
            </div>
            <div class="card">
              
            </div>
          </div>
        </div>
      </div><br>
    </aboutUs>
  
  
    <contactUs>
      <!--Form For contact-->
      <form method="post">
        <div class="card">
          <div class="card-header"></div>
          <div class="card-body">
            <h5 class="card-title">Contact Us</h5>
            <div class="row py-3">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Name</label>
                  <input type="text" name="Name" class="form-control">
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>E-mail</label>
                  <input type="email" name="Email" class="form-control">
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Mobile no.</label>
                  <input type="number" name="Mobile_No" class="form-control">
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Subject</label>
                  <input type="text" name="Subject" class="form-control">
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Message</label>
                  <textarea name="Message" type="text" class="form-control" maxlength="100"></textarea>
                  <small>In between 100 characters only</small>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <b-button class="pl-4 pr-4" id="signup" name="signup" @click="signUp()"><i
                    class="fas fa-paper-plane"></i>Sent it !</b-button>
              </div>
            </div>
            <div class="container-fluid" style="margin-left: 5%;">
              <h5> NOTE :</h5>
              <ul>
                <li class="text-muted">For any refund related queries, please visit RSDP.com</li>
                <li class="text-muted">For any other queries, please write to us at care@rsdp.in or call
                  us at
                  8010500300 (8AM - 9PM, 7 days a week) </li>
              </ul>
            </div>
          </div>
        </div>
      </form>
    </contactUs>
  </main>


</template>


<script>
//  import Register from '@/api';
import axios from 'axios';
import image from '@/assets/home.jpeg';
import aboutUs from '@/assets/aboutUs.jpg';

export default {
name:'RegisterPage',
data(){
 
return  {
 username:'',
 email:'',
 password:'',
 image:image,
 aboutUs:aboutUs,
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
 
},
  login() {

    const credentials = {
      username: this.username,
      password: this.password,
    }
    console.log(credentials.username);
    axios.post(`http://localhost:3000/users/login`, credentials)
      .then(response => {
        //if succesfull
        if (response.status === 200) {
          localStorage.setItem('token', response.data.data.token);
          this.$router.push({ name: 'courses' });
        }
        console.log(response)
      }).catch(error => {
        console.log(error.response.data.response);
      });
  }
}
}
</script>

<style scoped>
.girl {
    padding-left: 4rem;
    width: 50%;
    height: 50%
}

.form {
    display: flex;
    align-items: center;
}

h1 {
    font-size: 3.0rem;
    font-weight: 600;
    color: black;
}

.white {
    line-height: 1.8rem;
    color: black;
}

.formContent {
    margin-bottom: 0;
    margin-left: 3px;
    border: rounded;
    border-radius: 4px;
    border-color: 1px solid red;
}

.content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 2rem 0px;
}

.left-content {
    display: flex;
    align-items: center;
    padding-right: 2rem;
}

</style>
