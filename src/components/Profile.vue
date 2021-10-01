<template>
    <div>
        Profile
        <br/>
        {{userName}}
    </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import {useStore} from 'vuex';
import {firebase} from "../firebase/firebaseInit.js"
import { onBeforeMount } from '@vue/runtime-core';
export default{
    name: 'Profile',
    setup() {
        const store = useStore();
        const userData = computed(()=>store.stae.userData)
        onBeforeMount(()=>{
            if(userData == null) {
                    firebase.auth().onAuthStateChanged((user) =>{
                        if(user){  
                            console.log(user);
                            store.dispatch('setUser', user.email);
                        }else{
                            console.log(user," error");
                            store.dispatch('setUser', null);
                        }
                    });
            }
        })
        return {
            userName : userData.userName
        }
    }
}

</script>

<style lang="css" scoped>

</style>