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
                p-4 p-lg-5
                text-center
                d-flex
                align-items-center
                order-md-last
              "
            >
              <div class="text w-100">
                <h2 style="color:white;">Welcome to Registration</h2>
                <p>Already have an account ?</p>
                 <router-link class="btn btn-white btn-outline-white" to="/login">Login</router-link>
              </div>
            </div>
            <div  class="login-wrap p-4 p-lg-5">
              <div class="d-flex">
                <div class="w-100">
                  <h3 class="mb-4">Register</h3>
                </div>
              </div>
              <form @submit.prevent="Register" class="signin-form">
                <div class="form-group mb-3">
                  <label class="label" for="name">Username</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="username"
                    v-model="username"
                    required
                  />
                </div>
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
                  <label class="label" for="password">Password &nbsp;</label>
                  <span :class="eye" @click="switchVisibility"></span>
                  <input
                    :type="passwordFieldType"
                    class="form-control"
                    placeholder="Password"
                    v-model="password"
                    required
                  />
                </div>
                 <div class="form-group mb-3">
                  <label class="label" for="cpassword">Confirm Password</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Confirm Password"
                    v-model="cpassword"
                    required
                  />
                </div>
                <div class="form-group registerbtn">
                  <button
                    type="submit"
                    class="form-control btn submit px-3"
                  >
                    Sign Up
                  </button>
                </div>
                <div class="form-group d-md-flex">
                  <div class="w-50 text-left">
                    <input type="checkbox" checked />
                    <label class="checkbox checkbox-color mb-0"
                      >Remember Me
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </div>
                <div v-if="!passwordCheck" class="errorStyle">
                  Passowrd Miss Match
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
import {ref} from 'vue';
import {firebase} from "../firebase/firebaseInit.js"
import {useStore} from 'vuex';
export default {
    setup(){
        const store = useStore(); 
        // const userData = computed(()=>store.stae.userData)
        const username = ref("");
        const email = ref("");
        const password = ref("");
        const cpassword = ref("")
        const passwordCheck = ref(true);
        const passwordFieldType = ref("password");
        const eye = ref("fa fa-eye-slash");
        
        const switchVisibility = () => {
          eye.value =  eye.value == 'fa fa-eye' ? "fa fa-eye-slash":'fa fa-eye';
          passwordFieldType.value = passwordFieldType.value === "password" ? "text" : "password"
        };
        
        const Register =()=>{
          if(cpassword.value === password.value){
            passwordCheck.value = true;
            firebase
            .auth()
            .createUserWithEmailAndPassword(email.value,password.value)
            .then(data => {
              console.log("data",data);
              console.log(process.env.VUE_APP_ROOT_API)
              localStorage.setItem('infor_email', email.value)
              store.dispatch('addUser',
                  { 
                    "userName":username.value,
                    "email": data.user.email
                  });
            })
            .catch(err => alert(err.message));
          }else{
              passwordCheck.value = false  
          }
          
        }
        return{
            username,
            email,
            password,
            cpassword,
            passwordCheck,
            passwordFieldType,
            switchVisibility,
            Register,
            eye
        }
    }
}
</script>
<style scoped>
@import "../assets/css/loginStyle.css";
.registerbtn{
    background-color: rgb(9, 36, 109);
    border-radius: 20px;
    color: white;
}
.registerbtn button{
    color: white;
    font-weight: bold;
}
.checkbox-color {
 color: rgb(35, 78, 194);
}
.checkbox-color input{
    color: rgb(35, 78, 194);
}
.signBlock{
     background-color: rgb(9, 36, 109);
     color: white;
}
.errorStyle{
  color: red;
  border-radius: 2px;
  padding: 5px;
  outline: 1px solid red;
}
</style>