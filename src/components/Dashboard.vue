<template>
  <SideNavBar/>
  <!-- <div class="home">
    <h4>Welcome User {{name}}</h4>
  </div> -->
  <Personlization/>
  <router-view/>
</template>

<script>
import {ref, onBeforeMount} from 'vue';
import {firebase} from "../firebase/firebaseInit.js"
import SideNavBar from "@/components/SideNavBar.vue";
import Personlization from "@/components/Personlization.vue";
export default {
  name: 'Dashboard',
  components:{
      SideNavBar,
      Personlization
  },
  setup(){
   const name = ref("")
   onBeforeMount(()=>{
     const user = firebase.auth().currentUser;
     if(user){
       name.value  = user.email.split("@")[0];
     }else{
       // Need to route to login page
       console.log("dashboard error "+user)
     }
   });
   return {
     name
   }
 }
}
</script>
