<template >

    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6 col-xl-5 mt-4">
        <div class="card">
          <div class="card-body p-4">
            <div class="text-center w-75 m-auto">
              <p class="text-muted mb-4 mt-3">
                Don't have an account? Create your own account, it takes less
                than a minute
              </p>
            </div>

            <form @submit.prevent="register" >
              <div class="form-group">
                <label for="fullname">Username</label>
                <input
                  class="form-control"
                  type="text"
                  v-model="username"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div class="form-group mt-3">
                <label for="emailaddress">Email address</label>
                <input
                  class="form-control"
                  type="email"
                  v-model="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div class="form-group mt-3">
                <label for="password">Password</label>
                <div class="input-group input-group-merge">
                  <input
                    type="password"
                    v-model="password"
                    class="form-control"
                    placeholder="Enter your password"
                    required
                  />
                  <div class="input-group-append" data-password="false">
                    <div class="input-group-text">
                      <i class="bi bi-eye"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group mt-3">
                <label for="password">Confirm Password</label>
                <div class="input-group input-group-merge">
                  <input
                    type="password"
                    v-model="cpassword"
                    class="form-control"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>
              
              <div class="form-group mt-4 mb-2 text-center">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input me-2"
                    id="checkbox-signup"
                    required
                  />
                  <label class="custom-control-label" for="checkbox-signup">
                    I accept
                    <a href="javascript: void(0);" class="text-dark"
                      >Terms and Conditions</a
                    >
                  </label>
                </div>
              </div>
              <div class="form-group mb-0 text-center">
                <button class="btn btn-primary mb-4" type="submit">
                  Sign Up
                </button>
              </div>

                <div class="text-center">
                
                  <h5 class="mt-3 text-muted">Sign up with</h5>
                  <ul class="social-list list-inline mt-3 mb-0">
                    <li class="list-inline-item">
                      <a
                        href="javascript: void(0);"
                        class="social-list-item border-purple text-purple"
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
        </div>
       

        <div class="row mt-3">
          <div class="col-12 text-center">
            <p class="text-muted">
              Already have account?
              <router-link
                to="/login"
                class="text-primary font-weight-medium ml-1"
                >Sign In</router-link
              >
            </p>
          </div>
    
        </div>
      </div>
    </div>

</template>

<script>
import AuthenticationService from '../services/AuthenticationService.js'
export default {
    data () {
        return {
            username: '',
            email: '',
            password: '',
            cpassword: '',
            
        }
    },
    methods: {
        async register () {
          try{
            const response = await AuthenticationService.register({
                username: this.username,
                email: this.email,
                password: this.password
            })
            if (response.status === 200) {
              this.$router.push({ path: response.data.redirect})
            }
          }catch (erro){
            console.error(error)
          }
            
        },
        
    }    
}
</script>
