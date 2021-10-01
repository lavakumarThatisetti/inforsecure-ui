<template>
  <section class="ftco-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 text-center mb-5">
          <h2 class="heading-section">Few Steps Away for your Personal Wealth Managment</h2>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-12 col-lg-10">
          <div class="wrap d-md-flex">
            <div
              class="
                signBlock
                text-wrap
                p-4 p-lg-5
                text-center
                d-flex
                align-items-center
                order-md-last
              "
            >
              <div class="text w-100">
                <h2>Welcome to login</h2>
                <p>Don't have an account?</p>
                 <router-link class="btn btn-white btn-outline-white" to="/register">Register</router-link>
              </div>
            </div>
            <div class="login-wrap p-4 p-lg-5">
              <div class="d-flex">
                <div class="w-100">
                  <h3 class="mb-4">Sign In</h3>
                </div>
              </div>
              <form @submit.prevent="Login" class="signin-form">
                <div class="form-group mb-3">
                  <label class="label" for="name">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="email"
                    v-model="email"
                    required
                  />
                </div>
                <div class="form-group mb-3">
                  <label class="label" for="password">Password  &nbsp;</label>
                  <span :class="eye" @click="switchVisibility"></span>
                  <input
                    :type="passwordFieldType"
                    class="form-control"
                    placeholder="Password"
                    v-model="password"
                    required
                  />
                </div>
                <div class="form-group">
                  <button
                    type="submit"
                    class="form-control btn btn-primary submit px-3"
                  >
                    Sign In
                  </button>
                </div>
                <div class="form-group d-md-flex">
                  <div class="w-50 text-left">
                    <input type="checkbox" />
                    <label class="checkbox checkbox-primary mb-0"
                      >Remember Me
                    </label>
                  </div>
                  <div class="w-50 text-md-right">
                    <router-link to="/forgot-password" id="fp">Forgot Password</router-link>
                  </div>
                </div>
                <div v-if="invalidC" class="errorStyle">
                     Invalid Credentials
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { ref } from "vue";
import { firebase } from "../firebase/firebaseInit.js";
export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const passwordFieldType = ref("password");
    const eye = ref("fa fa-eye-slash");
    const invalidC = ref(false);
        
    const switchVisibility = () => {
      eye.value =  eye.value == 'fa fa-eye' ? "fa fa-eye-slash":'fa fa-eye';
      passwordFieldType.value = passwordFieldType.value === "password" ? "text" : "password"
    };
    const Login = () => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then((data) => {
          console.log(data);
          invalidC.value = false;
        })
        .catch((err) => {
           console.log(err);
           invalidC.value = true;
        });
    };
    return {
      email,
      password,
      switchVisibility,
      passwordFieldType,
      invalidC,
      eye,
      Login,
    };
  },
};
</script>
<style scoped>
@import "../assets/css/loginStyle.css";
.signBlock{
    background-color: #2521d8;
}
.errorStyle{
  color: red;
  border-radius: 2px;
  padding: 5px;
  outline: 1px solid red;
}
#fp{
  text-decoration-line: underline;
}
</style>