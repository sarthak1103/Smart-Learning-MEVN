<template>
  <b-navbar class="navbar navbar-dark bg-dark variant=info">
  
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
  
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="nav-item active">
        <!-- We are building Single Page Application (SPA) -->
        <!-- if we use "to" instead of "href" internally Vue Bootstrap uses <router-link> instead of <a> -> This will avoid page refresh -->
        <b-nav-item to="/">Home</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/Login">Student Login</b-nav-item>
        <b-nav-item to="/register">Register</b-nav-item>
        
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
 name:'NavMenu',
}
</script>

<style>

</style>