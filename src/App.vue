<template>
  <MenuBar/>
  <router-view/>
</template>
<script>
import {onBeforeMount} from 'vue';
import {useRouter, useRoute} from 'vue-router';
import {firebase} from "../src/firebase/firebaseInit.js"
import MenuBar from "@/views/MenuBar.vue";
export default {
  name: 'app',
   components:{
      MenuBar,
  },
  setup(){
    const router = useRouter();
    const route = useRoute();
    onBeforeMount(()=>{
        firebase.auth().onAuthStateChanged((user)=>{
          if(!user){
            router.replace('/');
          }else if(route.path == '/login'|| route.path =='/register') {
            router.replace('/dashboard');
          }
        })
    })
    return {

    }
  }
}
</script>

<style>
@import "assets/css/loginStyle.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body { padding-top: 50px; }
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
