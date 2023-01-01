<template>
<main>
   <!-- <nav class="navbar navbar-expand-sm navbar-light bg-light">
    <a class="navbar-brand" href="/">Smart Learning</a>
    <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId"
      aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavId">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="#aboutUs">About Us</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="#contactUs">Contact Us</a>
        </li>
      </ul>
      <router-link to="/login" >
      <button  v-if="token===null"  class="btn" type="submit">Login</button>
      <button @click="logout()"  v-else class="btn" type="submit">Logout</button>
      </router-link>
      
    </div>
  </nav>  -->

    <nav style="background-color: rgb(97, 190, 117);">
      <b-navbar toggleable="lg">
        <b-navbar-brand href="/">Smart Learning</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-navbar-nav>
              <b-nav-item href="/" active>Home</b-nav-item>
              <b-nav-item href="#aboutUs" active>About Us</b-nav-item>
              <b-nav-item href="#contactUs" active>Contact Us</b-nav-item>
              <router-link to="/login">
                <button v-if="token === null" class="btn" type="submit">Login</button>
                <button @click="logout()" v-else class="btn" type="submit">Logout</button>
              </router-link>
            </b-navbar-nav>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </nav>



</main>

</template>

<script>
export default {
 name:'NavMenu',
 data(){
  return{
    token:localStorage.getItem('token')
  }
 },

  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: 'login' });
    }
  }
}
</script>

<style scoped>
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

.btn:hover,
.nav-item:hover {
  transform: translateY(-5px) scale(1.005) translateZ(0);
  box-shadow: 0 24px 36px rgba(0, 0, 0, 0.11),
    0 24px 46px var(--box-shadow-color);
}
</style>
