<template>
    <div class="container">
        <table class="table table-borderless">
            <thead class="thead-dark">
                <th>UserName</th><th @click="sort" id="sort"> Wealth Score</th>
            </thead>
            <tbody v-if="top10Users!=null" style="background-color:white;">
                <tr v-for="user in top10Users" :key="user">
                    <td><h4>{{user['userName']}}</h4></td>
                    <td align="center">
                         <radial-progress-bar :diameter="100"
                                            :completed-steps="user['wealthScore']"
                                            :total-steps="1000"
                                            :strokeWidth="10"
                                            :innerStrokeWidth="10"
                                             startColor="#1E90FF"
                                             stopColor="#1E90FF">
                        <p>{{user['wealthScore']}}</p>
                        </radial-progress-bar>
                    </td>
                </tr>    
            </tbody>    
        </table>
    </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { onBeforeMount } from '@vue/runtime-core';
import RadialProgressBar from 'vue-radial-progress'
export default{
    name: 'Stats',
    components:{
      RadialProgressBar
  },
    setup(){
        const store = useStore();
        const top10Users_store = computed(() => store.state.top10Users);
        const top10Users = ref(null);
        top10Users.value =  top10Users_store
        onBeforeMount (() => {
            store.dispatch('getTop10Users').then(
                 response =>{
                       top10Users.value = response.data
                       console.log(top10Users.value)
                 }
            )
        })
        const sort =() =>{
                top10Users.value.sort(function (a, b) {return b.wealthScore - a.wealthScore});
        }
        return {
            top10Users,
            sort
        }
    }
}

</script>

<style lang="css" scoped>
#sort {
    cursor: pointer;
}
</style>