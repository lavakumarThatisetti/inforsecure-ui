<template>
    <div class="container">
        <h3 class="shadow-lg p-3 mb-3" id="header">Your Previous Financial Informations can check here</h3>
        <div v-for="(data, index) in top10Consents" :key="data">
               <div class="page-header">
                    <div class="float-left">
                        <h3 id="note"> Financial Information #{{index+1}}</h3>
                    </div>
                    <div class="float-right">
                        <h3 @click="showData(index)" id="right" class="text-right"><i class="fa fa-arrow-circle-down"></i></h3>
                    </div>
                    <div class="clearfix"></div>
               </div>
                <!-- <h3 class="shadow" id="transactionStyle" @click="showData(index)"> Financial Information #{{index+1}}</h3> -->
                <DataRepresenation :data="data" v-if="keyForShow == index"/>  
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
        const keyForShow = ref(null);
        onBeforeMount(()=>{
            top10Consents.value = allFiData.value
            console.log(top10Consents.value)
        })
        const showData = (index) =>{
            if(keyForShow.value == index){
                keyForShow.value=-1
            }else{
                keyForShow.value = index
            }
            console.log(keyForShow.value)
        }
        return {
               top10Consents,
               showData,
               keyForShow
        }
    }
}

</script>
<style lang="css" scoped>
#header {
    color:white;
    background-color: rgb(9, 36, 109);
    word-spacing: 5px;
    border-radius: 50px;
    font-weight: bold;
}
.page-header{
    text-align: left;
    cursor: pointer;
    background-color: white;
    color:rgb(9, 36, 109);
    padding: 12px;
    border-radius: 50px;
    margin-top: 10px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    box-shadow:1px 1px 1px 1px tomato;
}
#note{
     color:rgb(9, 36, 109);
     font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
#right {
    color:rgb(9, 36, 109);
}
</style>