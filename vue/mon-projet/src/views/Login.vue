<template>
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6 col-xl-5 mt-4">
        <div class="card">
          <div class="card-body p-4">
            <div class="text-center w-75 m-auto">
              <p class="text-muted mb-4 mt-3">
                Enter your email address and password.
              </p>
            </div>

            <form @submit.prevent="login" class="text-start">
              <label for="email">Enter your mail</label>
              <div class="form-group mb-3">
                
                <input
                  class="form-control mb-2"
                  type="email"
                  id="email"
                  v-model="email"
                  required
                  placeholder="Enter your email"
                />
                
              </div>

              <div class="form-group mb-3">
                <label for="password">Password</label>
                <div class="input-group input-group-merge">
                  <input
                    type="password"
                    v-model="password"
                    class="form-control"
                    required
                    placeholder="Enter your password"
                  />
                  <div class="input-group-append" data-password="false">
                    <div class="input-group-text">
                      <i class="bi bi-eye"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group mb-3 text-center">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input me-2"
                    id="checkbox-signin"
                    
                  />
                  <label class="custom-control-label" for="checkbox-signin"
                    >Remember me</label
                  >
                </div>
              </div>

              <div class="form-group mb-0 text-center">
                <button class="btn btn-primary btn-block mb-4" type="submit">
                  Log In
                </button>
              </div>

              <div class="text-center">
              
                <h5 class="mt-3 text-muted">Login in with</h5>
                <ul class="social-list list-inline mt-3 mb-0">
                  <li class="list-inline-item">
                    <a
                      href="javascript: void(0);"
                      class="social-list-item border-purple text-purple"
                      @click="FBlogin"
                    >
                      <i class="bi bi-facebook"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a
                      href="javascript: void(0);"
                      class="social-list-item border-danger text-danger"
                    >
                      <i class="bi bi-google"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a
                      href="javascript: void(0);"
                      class="social-list-item border-info text-info"
                    >
                      <i class="bi bi-twitter-x"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a
                      href="javascript: void(0);"
                      class="social-list-item border-secondary text-secondary"
                    >
                      <i class="bi bi-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </form>

            
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->

        <div class="row mt-3">
          <div class="col-12 text-center">
            <p>
              <router-link to="/recoverpwd" class="text-muted ml-1"
                >Forgot your password?</router-link
              >
            </p>
            <p class="text-muted">
              Don't have an account?
              <router-link
                to="/register"
                class="text-primary font-weight-medium ml-1"
                >Sign Up</router-link
              >
            </p>
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->
      </div>
      <!-- end col -->
    </div>
</template>
<script>
import AuthenticationService from '../services/AuthenticationService.js'
export default {
    data () {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
      async login () {
        try{
          const response = await AuthenticationService.login({
              email: this.email,
              password: this.password
          })
          if (response.status === 200) {
            this.$router.push({ path: response.data.redirect})
          }
        }catch (error){
          console.error(error)
        }
      },
      async FBlogin() {
        try {
          const response = await AuthenticationService.FBlogin()
          if (response.status === 200) {
            this.$router.push({ path: response.data.redirect })
          }
        } catch (error) {
          console.error(error)
        }
      }
  
    } 
}
</script>
