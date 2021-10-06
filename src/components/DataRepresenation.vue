<template>
  <div v-if="isApnaBank">
    <h1><u>Apna Bank</u></h1>
       <DepositViz v-if="depositsData!=null" :depositsData="depositsData"/>
       <TermDepositViz v-if="termDepositData!=null" :depositsData="termDepositData"/>
       <CrediCardViz v-if="creditsData!=null" :data="creditsData"/>
  </div>
  <div v-if="isApnaPension">
       <h1><u>Apna Pension</u></h1>
       <EpfViz v-if="epfData!=null" :data="epfData"/>
       <PpfViz v-if="ppfData!=null" :data="ppfData"/>
  </div>
  <div v-if="isApnaInsurance">
      <h1><u>Apna Insurance</u></h1>
      <InsuranceViz v-if="insureData!=null" :data="insureData"/>
  </div>
  <div v-if="isApnaInvestments">
      <h1><u>Apna Investments</u></h1>
      <MutualFundsViz v-if="mfData!=null" :data="mfData"/>
      <BondsViz v-if="bondsData!=null" :data="bondsData"/> 
      <SipVz v-if="sipData!=null" :data="sipData"/> 
      <EquitiesViz v-if="equitiesData!=null" :data="equitiesData"/> 
      
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import { getFiP } from "../utils/getFip.js";
import DepositViz from "../components/charts/DepositViz.vue"
import CrediCardViz from "../components/charts/CrediCardViz.vue"
import MutualFundsViz from "../components/charts/MutualFundsViz.vue"
import BondsViz from "../components/charts/BondsViz.vue"
import EpfViz from "./charts/EpfViz.vue"
import PpfViz from "./charts/PpfViz.vue"
import TermDepositViz from "./charts/TermDepositViz.vue"
import EquitiesViz from "./charts/EquitiesViz.vue"
import SipVz from "./charts/SipVz.vue"
import InsuranceViz from "./charts/InsuranceViz.vue"

export default {
  name: "DataRepresenation",
  components: {
    DepositViz,
    CrediCardViz,
    MutualFundsViz,
    BondsViz,
    EpfViz,
    PpfViz,
    TermDepositViz,
    EquitiesViz,
    SipVz,
    InsuranceViz
  },
  setup() {
    const store = useStore();
    const fiData = computed(() => store.state.fiData);
    const isApnaBank = ref(false);
    const isApnaPension = ref(false);
    const isApnaInsurance = ref(false);
    const isApnaInvestments = ref(false);
    const depositsData = ref(null);
    const termDepositData = ref(null);
    const creditsData = ref(null);
    const epfData = ref(null);
    const ppfData = ref(null);
    const bondsData = ref(null);
    const mfData = ref(null);
    const sipData = ref(null);
    const equitiesData = ref(null);
    const insureData = ref(null);
    console.log("Fidata", fiData.value);
    onMounted(() => {
      if (fiData.value != null) {
        fiData.value.forEach((data) => {
          var fip = getFiP(data["type"]);
          if (fip === "Apna Bank") {
            isApnaBank.value = true;
            if (data["type"] == "DEPOSIT") {
                    depositsData.value = data
            }else if (data["type"] == "TERM_DEPOSIT") {
                    termDepositData.value = data
            }
            else if (data["type"] == "CREDIT_CARD") {
                    creditsData.value = data
            }
          } else if (fip === "Apna Insurance") {
            isApnaInsurance.value = true;
            if (data["type"] == "INSURANCE_POLICIES") {
                    insureData.value = data
            }
          } else if (fip === "Apna Pension") {
            isApnaPension.value = true;
            if(data["type"] == "EPF"){
                    epfData.value = data
            }else if(data["type"] == "PPF"){
                    ppfData.value = data
            }
          } else if (fip === "Apna Investments") {
            isApnaInvestments.value = true;
            if(data["type"] == "BONDS"){
              bondsData.value = data
            }else if(data["type"] == "MUTUAL_FUNDS"){
              mfData.value = data
            }else if(data["type"] == "SIP"){
              sipData.value = data
            }else if(data["type"] == "EQUITIES"){
              equitiesData.value = data
            }

          }
        });
      }
    });

    return {
      fiData,
      isApnaBank,
      isApnaPension,
      isApnaInsurance,
      isApnaInvestments,
      depositsData,
      creditsData,
      epfData,
      ppfData,
      bondsData,
      mfData,
      insureData,
      termDepositData,
      sipData,
      equitiesData
    };
  },
};
</script>

<style lang="css">
</style>