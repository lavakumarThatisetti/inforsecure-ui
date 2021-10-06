<template>
  <div class="container" id="insights">
    <h3><b>EQUITIES</b></h3>
    <div class="row">
      <div class="col-sm p-3 mb-2 bg-dark text-white">
        <div>SIP Story</div>
        <div
          class="col-sm p-3 mb-2"
          style="background: #ff4500; border-radius: 5px"
        >
          {{ datastory }}
        </div>
      </div>
      <div class="col-sm p-3 mb-2 bg-dark text-white shadow-lg">
        <div style="color: white"><b><u>Insights</u></b></div>
        <div class="row">
          <div
            class="col-sm p-3 mb-2 sources"
            v-for="source in insights['sourceOfInvestment']"
            :key="source"
          >
            Investment Source - {{ source }}
          </div>
        </div>
        Profit <b>{{ insights["profit/Loss"] }}%</b>
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
    </div>
    <div class="row">
      <div class="col-sm p-3 mb-2 bg-dark text-white">
        <h5 style="color: white">Equities Summary</h5>
        <div class="row">
          <div class="col-sm p-3 mb-2 bg-dark">
               <div class="page-header">
                    <div class="float-left">
                        <h2 id="text"><i class="fas fa-university"></i> {{summary['investment']["holdings"]["type"]}}</h2>
                    </div>
                    <div class="float-right">
                        <h3 id="text" class="text-right">{{summary["currentValue"]}}</h3>
                        <h6 id="text" class="text-right">Current Amount</h6>
                    </div>
                    <div class="clearfix"></div>
               </div>
               <hr/>
               <div class="page-header">
                    <div class="float-left">
                        <h6 id="text">Invested Amount <b>{{summary["investmentValue"]}}</b></h6>
                    </div>
                    <div class="float-right">
                        <h6 id="text" class="text-right">Holding Units: <b>{{summary['investment']['holdings']['holding']['units']}}</b></h6>
                    </div>
                    <div class="clearfix"></div>
               </div>
               <hr/>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
        <h3>Transaction History</h3>
    </div>
    <table class="table table-borderless" style="background-color:#2B2D2F;">
        <tr v-for="record in records" :key="record['isin']">
        <table class="table table-dark" style="background-color:#2B2D2F;">
        <tr>
            <th>Invested</th><td>Strike price {{record["strikePrice"]}}</td><th><i class="fas fa-rupee-sign"></i> {{record['totalCharge']}}</th>
        </tr>
        <tr>
            <th>{{record['transactionDateTime'].split("T")[0]}}</th><td>Trade value {{record["tradeValue"]}}</td><th style="color:#90ee90;">COMPLETED</th>
        </tr>
        </table>
    </tr>
    </table>
    <!-- </div> -->
  </div>
  <div id="wrapper">
     <h4>Analysis of Equities Charges </h4> 
    <div id="chart-line">
      <apexchart
        type="line"
        height="260"
        :options="chartOptions"
        :series="series"
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
    const eqData = computed(() => props.data);
    const dates = ref([]);
    const strikePrices = ref([]);
    const totalCharges = ref([]);
    const tradeValues = ref([]);
    const insights = ref({});
    const sources = ref([]);
    const datastory = ref(null);
    const estimation = ref(null);
    const summary = ref({});
    const profile = ref([]);
    const profit = ref(0);
    const records = ref([]);
    console.log("eqData", eqData.value);
    // Transactions
    records.value = eqData.value["records"];
    eqData.value["records"].forEach((record) => {
      const date = moment(
        record["transactionDateTime"].split("T")[0],
        "YYYY-MM-DD"
      ).format("DD/MM/YYYY");
      const strikePrice = record["strikePrice"];
      const totalCharge = record["totalCharge"];
      const tradeValue = record["tradeValue"];
      dates.value.push(date);
      strikePrices.value.push(strikePrice);
      totalCharges.value.push(totalCharge);
      tradeValues.value.push(tradeValue);
    });
    // Insights
    datastory.value = eqData.value["dataStory"];
    insights.value = eqData.value["insights"];
    summary.value = eqData.value["summary"];
    profile.value = eqData.value["profile"]['holder'][0];  
    var color = "";
    if(profit.value >0){
        color= "#90ee90"
    }else{
        color= "#D9381E"
    }
    return {
      records,
      insights,
      summary,
      sources,
      estimation,
      profile,
      datastory,
      profit,
      sipStyles:{
         color:color
      },
      series: [{
             name: "Equity Charges",
          data: totalCharges.value,
          }],
      chartOptions: {
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
          }  
    };
  },
};
</script>

<style lang="css" scoped>
#text{
    color: white;
}
.table-borderless > tbody > tr > td,
.table-borderless > tbody > tr > th,
.table-borderless > tfoot > tr > td,
.table-borderless > tfoot > tr > th,
.table-borderless > thead > tr > td,
.table-borderless > thead > tr > th {
    border: none;
}
</style>