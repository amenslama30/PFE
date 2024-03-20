<script>
export default {
  data() {
    return {
    };
  },
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand " href="#">Navbar</a>
    
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link link-light" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link link-light" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link link-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" >
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>

      <div class="dropdown me-2">
          <img src="@/assets/amen.jpg" class="rounded-circle " type="button" data-bs-toggle="dropdown" width="30" height="30" aria-expanded="false">
          <ul class="dropdown-menu dropdown-menu-end  text-start" >
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Logout</a></li>
        </ul>
      </div>

      
      <!-- <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search..." aria-label="Search">
        <button class="btn btn-outline-dark" type="submit">Search</button>
      </form>     -->

  </div>
</nav>
</template>




