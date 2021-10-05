<template>
  <div class="container" id="insights">
    <h3><b>MUTUAL FUNDS</b></h3>
    <div class="row">
      <div class="col-sm p-4 mb-2 bg-dark text-white">
        <div>Performance Of Bond</div>
        <div
          class="col-sm p-4 mb-2"
          style="background: #ff4500; border-radius: 5px"
        >
          {{ datastory }}
        </div>
      </div>
      <div class="col-sm p-3 mb-2 bg-dark text-white shadow-lg">
        <div style="color: white">Insights</div>
        <div class="row">
          <div
            class="col-sm p-3 mb-2 sources"
            v-for="source in insights['sourceOfInvestment']"
            :key="source"
          >
            Investment Source - {{ source }}
          </div>
          <div
            class="col-sm p-3 mb-2 sources"
            v-for="source in insights['typesOfInvestment']"
            :key="source"
          >
            Investment Types - {{ source }}
          </div>
        </div>
        <div class="row">
          <div class="col-sm p-3 mb-2 sources">
            Profit - <b>{{ insights["profit"] }}%</b>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm p-3 mb-2 bg-dark text-white">
        <h5 style="color: white">Profile</h5>
        <div class="row">
          <div class="col-sm p-2 mb-2 bg-dark">
            <div class="card">
              <h1>{{ profile["name"] }}</h1>
              <p class="title" style="color: black">
                <i class="fas fa-envelope"></i> {{ profile["email"] }}
              </p>
              <p class="card-subtitle" style="color: black">
                <i class="fas fa-phone"></i> {{ profile["mobile"] }}
              </p>
              <p class="card-text" style="color: black">
                <b>Dob: </b>{{ profile["dob"] }}
              </p>
              <p class="card-text" style="color: black">
                <b>Pan: </b>{{ profile["pan"] }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm p-3 mb-2 bg-dark text-white">
        <h5 style="color: white">Fund Summary</h5>
        <div class="row">
          <div class="col-sm p-2 mb-2 bg-dark">
            <div class="card">
              <h1>
                Fund Source:
                {{ summary["investment"]["holdings"]["holding"][0]["amc"] }}
              </h1>
              <p class="title" style="color: black">
                <b>Fund Mode</b> :
                {{ summary["investment"]["holdings"]["holding"][0]["mode"] }}
              </p>
              <p class="card-subtitle" style="color: black">
                <b>Fund Rate</b>:<i class="fas fa-rupee-sign"></i>
                {{ summary["investment"]["holdings"]["holding"][0]["rate"] }}
              </p>

              <p class="card-text" style="color: black">
                <b>Dividend Type</b>:
                {{
                  summary["investment"]["holdings"]["holding"][0][
                    "dividendType"
                  ]
                }}
              </p>
              <p class="card-text" style="color: black">
                <b>Fund Units </b
                >{{ summary["investment"]["holdings"]["holding"][0]["units"] }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="wrapper">
     <h4>Analysis of Fund buy price and current price and profit/loss incurred</h4> 
    <div id="chart-line">
      <apexchart
        type="line"
        height="160"
        :options="chartOptionsBuy"
        :series="seriesB"
      ></apexchart>
    </div>
    <div id="chart-line2">
      <apexchart
        type="line"
        height="160"
        :options="chartOptionsCurrent"
        :series="seriesC"
      ></apexchart>
    </div>
    <div id="chart-area">
      <apexchart
        type="area"
        height="160"
        :options="chartOptionsProfit"
        :series="seriesP"
      ></apexchart>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import moment from "moment";
export default {
  name: "MutualFundsViz",
  props: {
    data: {
      type: Object,
    },
  },
  setup(props) {
    const mfData = computed(() => props.data);
    const dates = ref([]);
    const cAmounts = ref([]);
    const bAmounts = ref([]);
    const totalProfits = ref([]);
    const insights = ref({});
    const sources = ref([]);
    const datastory = ref(null);
    const estimation = ref(null);
    const summary = ref({});
    const profile = ref([]);
    console.log("mfData", mfData.value);
    // Transactions
    mfData.value["records"].forEach((record) => {
      const date = moment(
        record["executionDate"].split("T")[0],
        "YYYY-MM-DD"
      ).format("DD/MM/YYYY");
      const BuyAmmount = record["BuyAmount"];
      const CurrentAmount = record["CurrentAmount"];
      const profitLoss = record["profit_loss"];
      dates.value.push(date);
      cAmounts.value.push(CurrentAmount);
      bAmounts.value.push(BuyAmmount);
      totalProfits.value.push(profitLoss);
    });
    //  const shuffleArray  = (array)  => {
    //         for (var i = array.length - 1; i > 0; i--) {
    //             var j = Math.floor(Math.random() * (i + 1));
    //             var temp = array[i];
    //             array[i] = array[j];
    //             array[j] = temp;
    //         }
    //         return array;
    //     }
    // cAmounts.value = shuffleArray(cAmounts.value);
    // bAmounts.value = shuffleArray(bAmounts.value);
    // totalProfits.value = shuffleArray(totalProfits.value);

    // Insights
    datastory.value = mfData.value["dataStory"];
    insights.value = mfData.value["insights"];
    summary.value = mfData.value["summary"];
    profile.value = mfData.value["profile"];

    return {
      insights,
      summary,
      sources,
      estimation,
      profile,
      datastory,
      seriesB: [{
             name: "Buy Amount",
          data: bAmounts.value,
          }],
      chartOptionsBuy: {
            chart: {
              id: 'fb',
              group: 'social',
              type: 'line',
              height: 160
            },
             xaxis: {
          categories: dates.value,
          axisTicks: {
            show: false,
          },
        },
            colors: ['#008FFB'],
            yaxis: {
              labels: {
                minWidth: 40
              }
            }
          },
          
          seriesC: [{
            name: "Current Amount",
          data: cAmounts.value,
          }],
          chartOptionsCurrent: {
            chart: {
              id: 'tw',
              group: 'social',
              type: 'line',
              height: 160
            },
            colors: ['#546E7A'],
             xaxis: {
          categories: dates.value,
          axisTicks: {
            show: false,
          },
        },
            yaxis: {
              labels: {
                minWidth: 40
              }
            }
          },
          
          seriesP: [{
             name: "Profit/Loss",
          data: totalProfits.value,
          }],
          chartOptionsProfit: {
            chart: {
              id: 'yt',
              group: 'social',
              type: 'area',
              height: 160
            },
            colors: ['#00E396'],
             xaxis: {
          categories: dates.value,
          axisTicks: {
            show: false,
          },
        },
            yaxis: {
              labels: {
                minWidth: 40
              }
            }
          },
          
          
    };
  },
};
</script>

<style lang="css" scoped>
.emptyTag {
  width: 2px;
  content: "";
  background-color: #d1c094;
}
.sources {
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
  font-weight: bold;
  background: rgb(236, 192, 47);
}
</style>