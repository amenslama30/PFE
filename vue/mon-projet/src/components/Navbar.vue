<script>

export default {
  name: 'Navbar',
}
</script>

<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    
    
      <div class="navbar-nav ">
        <router-link class="nav-link active" to="/">Home</router-link>
        <router-link class="nav-link" to="/features">Features</router-link>
        <router-link class="nav-link" to="/about">About</router-link>
      </div>
      
      <button type="button" class="btn btn-outline-light">
        <router-link class="nav-link" to="/login">Login</router-link>
      </button>

  </div>
</nav>

</template>


