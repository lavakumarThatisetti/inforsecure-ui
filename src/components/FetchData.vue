<template>
  <div class="container">
    <form @submit.prevent="getFiData">
      <div class="form-group form-card hadow-lg p-3 mb-5 bg-white rounded d-flex">
          <div class="card-body">
              <h5 class="card-title">Request recent consent provided data</h5>
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
                 <button type="Sumbit" name="next" class="btn btn-primary action-button">
                    Submit &nbsp;<i class="fas fa-paper-plane"></i>
                </button>
          </div>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import { firebase } from "../firebase/firebaseInit.js";
import { onBeforeMount } from "@vue/runtime-core";
export default {
  name: "FetchData",
  setup() {
    const store = useStore();
    const userData = computed(() => store.state.userData);
    const consentRespData = computed(() => store.getters.getConsentResponse);
    const fiData = computed(() => store.getters.fiData);
    const consentId = ref("");
    const fromDate = ref("");
    const toDate = ref("");
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
    consentId.value = consentRespData.value["url"].split("/")[3].split("?")[0];
    console.log(consentId.value)

    const getDateFormat = (fiDate) => {
      console.log(fiDate);  
      var date = new Date(fiDate);
      var strDate =
        [date.getFullYear(), date.getMonth() + 1, date.getDate()].join("-") +
        "T00:00:00.000Z";
      return strDate;
    };
    const getFiData = () => {
      const requestData = {
        consentId: consentId.value,
        fromDate: getDateFormat(fromDate.value),
        toDate: getDateFormat(toDate.value),
      };
      console.log(requestData);
      store.dispatch("getFiData", requestData);
      console.log(fiData);
    };
    return {
      getFiData,
      fromDate,
      toDate,
      fiData,
    };
  },
};
</script>

<style lang="css" scoped>
</style>