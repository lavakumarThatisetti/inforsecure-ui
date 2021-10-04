<template>
  <div v-if="isApnaBank">
    <h1>Apna Banks</h1>
    {{ depoistsChartData }}
    <apexchart
      type="line"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
  <div v-if="isApnaPension"></div>
  <div v-if="isApnaInsurance"></div>
  <div v-if="isApnaInvestments"></div>
</template>

<script>
import { onMounted, ref } from "vue";
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import { getFiP } from "../utils/getFip.js";
import moment from "moment";

export default {
  name: "DataRepresenation",
  components: {},
  setup() {
    const store = useStore();
    const fiData = computed(() => store.state.fiData);
    const isApnaBank = ref(false);
    const isApnaPension = ref(false);
    const isApnaInsurance = ref(false);
    const isApnaInvestments = ref(false);
    const depoistsChartData = ref([]);
    const dates = ref([]);
    const amount = ref([]);
    console.log("Fidata", fiData.value);
    onMounted(() => {
      if (fiData.value != null) {
        fiData.value.forEach((data) => {
          var fip = getFiP(data["type"]);
          if (fip === "Apna Bank") {
            isApnaBank.value = true;
            if (data["type"] == "DEPOSIT") {
              data["records"].forEach((record) => {
                const date = moment(record["transactionTimestamp"].split("T")[0],"YYYY-MM-DD").format("DD/MM/YYYY");
                const currentBalance = record["currentBalance"];
                dates.value.push(date);
                amount.value.push(currentBalance);

                // const mode = record['mode'];
                // const type = record['type'];
                // const narration = record['narration'];
                depoistsChartData.value.push({date,currentBalance});
              });
              console.log(depoistsChartData.value);
            }
          } else if (fip === "Apna Insurance") {
            isApnaInsurance.value = true;
          } else if (fip === "Apna Pension") {
            isApnaPension.value = true;
          } else if (fip === "Apna Investments") {
            isApnaInvestments.value = true;
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
      depoistsChartData,
     
      depositsChartColor: {
        borderColor: "#077187",
        pointBorderColor: "#0E1428",
        pointBackgroundColor: "#AFD6AC",
        backgroundColor: "#74A57F",
      },
       chartOptions: {
        chart: {
          id: "Balanced Deposits",
        },
        xaxis: {
          categories: dates.value,
        },
      },
      series: [
        {
          name: "Balance",
          data: amount.value,
        },
      ],
    };
  },
};
</script>

<style lang="css">
</style>