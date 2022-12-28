<template>
<main>
  <nav class="navbar navbar-expand-sm navbar-light bg-light">
    <a class="navbar-brand" href="#">Smart Learning</a>
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
          <router-link class="nav-link" href="#">About Us</router-link>
        </li>
        <li class="nav-item active">
          <router-link class="nav-link" to="#">Contact Us</router-link>
        </li>
      </ul>
      <router-link></router-link>
      <button  class="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
    </div>
  </nav>
</main>

</template>

<script>
export default {
 name:'NavMenu',
}
</script>

<style>

</style>