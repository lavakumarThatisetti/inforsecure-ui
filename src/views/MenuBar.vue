<template>
  <div id="nav">
  <nav class="navbar shadow bg-white rounded fixed-top navbar-expand-lg navbar-light">
    <a class="navbar-brand" href="#">
    <img id="logo" src="../assets/images/Infor.png">
      &nbsp;&nbsp;&nbsp; Infor Secure</a> 
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto w-100 justify-content-end">
      <li class="nav-item active">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/about">About</router-link>
      </li>
      <li class="nav-item" v-if="!checkUser">
        <router-link class="nav-link" to="/products">Products</router-link>
      </li>
      <li class="nav-item" v-if="checkUser">
        <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
      </li>
      <li class="nav-item" v-if="!checkUser">
        <router-link class="btn btn-outline-primary" to="/login">Login / Register</router-link>
      </li>
      <li class="nav-item" v-if="checkUser">
        <button class="btn logout" @click="Logout">Logout</button>
      </li>
    </ul>
  </div>
</nav> 
 </div>
</template>
<script>
import {ref, onBeforeMount} from 'vue';
import {firebase} from "@/firebase/firebaseInit.js"
import {useRouter} from 'vue-router';
export default {
    name: 'MenuBar',
    props:{
        msg: String
    },
    setup(){
    const router = useRouter();
    const checkUser = ref(false)
    onBeforeMount(()=>{
        firebase.auth().onAuthStateChanged((user)=>{
          if(!user){
            checkUser.value = false;
          }else{
            checkUser.value = true;
          }
        })
    });
    const Logout = () =>{
     firebase
     .auth()
     .signOut()
     .then( () => {
          router.replace('/');
          localStorage.removeItem('infor_email');
     })
     .catch(err => alert(err.message))
   }
    return {
        checkUser,
        Logout
    }
  }
}
</script>
<style scoped>
#logo {
    width: 50px;
    height: 50px;
    border-radius: 4px
}
.navbar .nav-item {
  padding: 10px 20px;
}
.navbar .nav-link {
  font-size: 20px;
  margin-left: 10px;
}
.logout{
    background-color: rgb(9, 36, 109);
    border-radius: 20px;
    color: white;
    font-weight: bold;
}
</style>