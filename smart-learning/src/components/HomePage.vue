<template>
  <main>
    <header>
      <div class="content">
        <div class="left-content" style="margin-top: 0px;">
          <div class="left-text-container">
            <div class="container" style="margin-right:-30px">
              <b-form @submit.prevent="login()">
                <h2 class="text-{variant}">Welcome to Smart Learning Platform</h2>
                <p class="white">If you already have a Smart Learning Platform account, please sign in
                  below</p>

                <div class="card-deck">
                  <div class="card">
                    <div class="card-body">
                      <b-form-group label="UserName:" label-for="username" class="mt-4">
                        <b-form-input id="username" class="inpt" v-model="username" type="text" required size="sm">
                        </b-form-input>
                      </b-form-group>
                      <b-form-group label="Password:" label-for="password" class="mt-4">
                        <b-form-input id="password" v-model="password" type="password" required></b-form-input>
                      </b-form-group>
                    </div>
                    <div class="text-left">
                      <center>
                        <button name="login" class="btn btn-outline-success my-2 my-sm-0" @click="login()" style="margin-right: auto">LogIn</button>
                <router-link to="/SignUp">
                          <button class="btn btn-outline-success my-2 my-sm-0" name="signup" to="{name:SignUp}" style="margin-left: 25%">SignUp</button>
                        </router-link>
                      </center>
                      <br />
                    </div>
                  </div>
                </div>
              </b-form>
            </div>
          </div>
        </div>

        <div class="right-content">
          <div class="row">
            <div class="card">
              <div class="card-body girl">
                <img :src="image" alt="" style="height:auto; max-width:100%;" />
              </div>
            </div>
          </div>
        </div>
<!-- 
        <div class="right-content girl">
          <img :src="image" alt="" style="height:150%;" />
        </div> -->
      </div>
      <div class="card" id="aboutUs">
        <div class="card-header">
        </div>
        <div class="card-body">
          <h5 class="card-title">About</h5>
          <hr>
          <div class="row"></div>
          <div class="cols-12  ">
            <img :src="aboutUs" style="height:120px" />
          </div><br>
          <div class="col">
            <div class="container-fluid">
              <p> smart learning platform is open and free for each and
                everyone who are willing to learn the new skills and upgrade themselves
                according to the industry fit its a free learning platform
                you do not need to spends thousands of rupees on learning </p>
            </div>
          </div>
        </div>
      </div>
      <form method="post" @submit.prevent="contactUs()">
        <div class="card" id="contactUs">
          <div class="card-header"></div>
          <div class="card-body">
            <h5 class="card-title">Contact Us</h5>
            <div class="row py-3">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Name</label>
                  <input type="text" name="Name" class="form-control" v-model="name">
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>E-mail</label>
                  <input type="email" name="Email" class="form-control" v-model="contactemail">
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Mobile no.</label>
                  <input type="number" name="Mobile_No" class="form-control" v-model="mobile">
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Subject</label>
                  <input type="text" name="Subject" class="form-control" v-model="subject">
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Message</label>
                  <textarea name="Message" type="text" class="form-control" maxlength="100" v-model="message"></textarea>
                  <small>In between 100 characters only</small>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <b-button class="pl-4 pr-4" id="signup" name="signup" @click="contactUs()"><i class="fas fa-paper-plane"></i>Sent
                  it !</b-button>
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
    </header>
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
 name: '',
 contactemail: '',
 mobile: '',
 subject: '',
 message: ''
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
  },
  contactUs(){
    const details={
      name: this.name,
      email: this.contactemail,
      mobile: this.mobile,
      subject: this.subject,
      message: this.message
    }
    axios.post(`http://localhost:3000/contact`, details)
      .then(res => {
        console.log(res)
        alert('thanks for contacting we will get back to you soon ');
      }).catch(err => {
        console.log(err.response);
      });


  }

}
}
</script>


<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: 0;
  margin-left: 0;
}

.row .card {
  border: rgb(255, 255, 255);
  max-width: 90%;
}

.card-deck .card {
  max-width: 75%;
  height: auto;
  box-shadow: inset 0 -2em 2em rgba(0, 0, 0, 0.1),
    0.2em 0.2em 0.5em rgba(0, 0, 0, 0.3);
  box-shadow: rgb(175, 175, 177);
  border: rgb(175, 175, 177);
}

#contactUs,
#aboutUs {
  margin-bottom: 20px;
  height: auto;
  box-shadow: inset 0 -2em 2em rgba(0, 0, 0, 0.1),
    0.2em 0.2em 0.5em rgba(0, 0, 0, 0.3);
  box-shadow: rgb(175, 175, 177);
  border: rgb(175, 175, 177);
}

.card-header {
  background-color: rgb(97, 190, 117);
}

.form {
  display: flex;
  align-items: center;
}

.white {
  line-height: 1.8rem;
  color: black;
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

.btn {
  color: rgb(97, 190, 117);
  border-color: rgb(97, 190, 117);
  background-color: white;
}

.btn:hover {
  color: white;
  border-color: rgb(97, 190, 117);
  background-color: rgb(97, 190, 117);
}

.btn:hover {
  transform: translateY(-5px) scale(1.005) translateZ(0);
  box-shadow: 0 24px 36px rgba(0, 0, 0, 0.11),
    0 24px 46px var(--box-shadow-color);
}

.btn:hover .overlay {
  transform: scale(4) translateZ(0);
}
</style>


