<template>
    <div class="container">
        <h1> All Your Trnsactions Can be seen Here </h1>
        <div v-for="(data, index) in top10Consents" :key="data">
            <h1> Transaction {{index+1}}</h1>
            <DataRepresenation :data="data"/>
        </div>    
    </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { onBeforeMount } from '@vue/runtime-core';
import DataRepresenation from '../components/DataRepresenation.vue';
export default{
    name: 'Transactions',
    components:{
       DataRepresenation
     }, 
    setup(){
        const store = useStore();
        const allFiData = computed(()=>store.state.allFiData);
        const top10Consents = ref(null);
        onBeforeMount(()=>{
            top10Consents.value = allFiData.value
            console.log(top10Consents.value)
        })
        return {
               top10Consents
        }
    }
}

</script>

<style lang="css" scoped>

</style>