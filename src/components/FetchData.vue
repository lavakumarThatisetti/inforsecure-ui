<template>
    <div class="container">
        <div class="shadow-lg p-3 mb-3 bg-white rounded" v-if="showpopup">
          We got your recent consent data. Its time to know your wealth health &nbsp;
          <i class="fas fa-times" style="color: red; cursor: pointer;" @click="showpopup=!showpopup"></i>
        </div>
    <form @submit.prevent="getFiData">
      <div
        class="form-group form-card shadow-lg p-3 mb-5 bg-white rounded d-flex"
      >
        <div class="card-body">
          <h5 class="card-title">
            Single click away to give life to your data
            <i class="far fa-hand-point-down"></i>
          </h5>
          <div class="form-group mb-3">
            <label class="label" for="name">Start Date</label>
            <input
              type="date"
              class="form-control"
              placeholder="from date"
              v-model="fromDate"
              required
            />
          </div>
          <div class="form-group mb-3">
            <label class="label" for="name">End Date</label>
            <input
              type="date"
              class="form-control"
              placeholder="End date"
              v-model="toDate"
              required
            />
          </div>
          <button
            type="Sumbit"
            name="next"
            class="btn btn-primary action-button"
          >
            Send &nbsp;<i class="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </form>
    <div v-if="showFiData">
      <DataRepresenation :data="fiData"/>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import { firebase } from "../firebase/firebaseInit.js";
import { onBeforeMount } from "@vue/runtime-core";
import DataRepresenation from '../components/DataRepresenation.vue';
export default {
  name: "FetchData",
  components:{
       DataRepresenation
  },
  setup() {
    const store = useStore();
    const userData = computed(() => store.state.userData);
    const consentRespData = computed(() => store.getters.getConsentResponse);
    const fiData = ref(null);
    const consentId = ref("");
    const fromDate = ref("");
    const toDate = ref("");
    const showpopup =ref(true);
    const showFiData = ref(false);
    onBeforeMount(() => {
      if (userData == null) {
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            console.log(user);
            store.dispatch("setUser", user.email);
          } else {
            console.log(user, " error");
            store.dispatch("setUser", null);
          }
        });
      }
    });

    const getDateFormat = (fiDate) => {
      console.log(fiDate);
      return fiDate+"T00:00:00.000Z";
    };
    const getConsntId = (url) =>{
      consentId.value = url
      if(url.includes("/")){
        return consentRespData.value["url"].split("/")[3].split("?")[0];
      }
      else{
        return url
      }
    }
    const getFiData = () => {
      const requestData = {
        userId: userData.value.id,
        consentId: getConsntId(consentRespData.value["url"]),
        fromDate: getDateFormat(fromDate.value),
        toDate: getDateFormat(toDate.value),
      };
      console.log(requestData);
      store.dispatch("getFiData", requestData).then((response)=>{
        fiData.value = response.data
        showFiData.value = !showFiData.value;
      });
    };

    return {
      getFiData,
      fromDate,
      toDate,
      fiData,
      showpopup,
      showFiData
    };
  },
};
</script>

<style lang="css" scoped>
</style>