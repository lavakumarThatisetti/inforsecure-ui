<template>
  <div class="container" id="insights">
    <h3><b>SIP ( SYSTEMATIC INVESTMENT PLAN)</b></h3>
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
        <h5 style="color: white">Profile {{type}}</h5>
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
        <h5 style="color: white">SIP Summary</h5>
        <div class="row">
          <div class="col-sm p-3 mb-2 bg-dark">
               <div class="page-header">
                    <div class="float-left">
                        <h2 id="text"><i class="fas fa-university"></i> {{summary["holdings"]["holding"]["amc"]}}</h2>
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
                        <h6 id="text">Invested Amount <b>{{summary["investementValue"]}}</b></h6>
                    </div>
                    <div class="float-right">
                        <h6 id="text" class="text-right">Balanced Units <b>{{balancedUnits}}</b></h6>
                    </div>
                    <div class="clearfix"></div>
               </div>
               <div class="page-header">
                    <div class="float-left">
                        <h6 id="text">Returns <i class="fas fa-rupee-sign" :style="sipStyles"></i><p style="display:inline;" :style="sipStyles">{{profit}} ({{insights["profit/Loss"]}}%)</p></h6>
                    </div>
                    <div class="float-right">
                        <h6 id="text" class="text-right">Current NAV {{curNav}}</h6>
                    </div>
                    <div class="clearfix"></div>
               </div>
               <div class="page-header">
                    <div class="float-left">
                        <h6 id="text">Folio Number {{summary['folioNo']}}</h6>
                    </div>
                    <div class="float-right">
                        <h6 id="text" class="text-right">Average NAV {{avgNav}}</h6>
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
            <th>Invested</th><td>Units {{record["units"]}}</td><th><i class="fas fa-rupee-sign"></i> {{record['amount']}}</th>
        </tr>
        <tr>
            <th>{{record['txnDate'].split("T")[0]}}</th><td>Nav {{record["nav"]}}</td><th style="color:#90ee90;">COMPLETED</th>
        </tr>
        </table>
    </tr>
    </table>
    <!-- </div> -->
  </div>
  <div id="wrapper">
     <h4>Analysis of SIP Net Asset Value</h4> 
    <div id="chart-line">
      <apexchart
        type="line"
        height="260"
        :options="chartOptionsNav"
        :series="seriesNav"
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
    const sipData = computed(() => props.data);
    const dates = ref([]);
    const navs = ref([]);
    const units = ref([]);
    const insights = ref({});
    const sources = ref([]);
    const datastory = ref(null);
    const estimation = ref(null);
    const summary = ref({});
    const profile = ref([]);
    const type = ref(null);
    const balancedUnits = ref(0);
    const profit = ref(0);
    const avgNav  =ref(0);
    const curNav = ref(0);
    const records = ref([]);
    console.log("sipData", sipData.value);
    // Transactions
    records.value = sipData.value["records"];
    sipData.value["records"].forEach((record) => {
      const date = moment(
        record["txnDate"].split("T")[0],
        "YYYY-MM-DD"
      ).format("DD/MM/YYYY");
      const unit = record["units"];
      balancedUnits.value = balancedUnits.value + unit/1;
      const nav = record["nav"];
      dates.value.push(date);
      navs.value.push(nav);
      units.value.push(units);
    });
    avgNav.value = navs.value.reduce((partial_sum, a) => partial_sum + a,0)/navs.value.length;
    avgNav.value = Math.round(avgNav.value*100)/100
    curNav.value = navs.value.slice(-1)[0];
    // Insights
    datastory.value = sipData.value["dataStory"];
    insights.value = sipData.value["insights"];
    summary.value = sipData.value["summary"];
    profile.value = sipData.value["profile"]['holder'][0];
    type.value =  sipData.value["profile"]['type'];    
    profit.value = ((summary.value["currentValue"]/1) - (summary.value["investmentValue"]/1));
    var color = "";
    if(profit.value >0){
        color= "#90ee90"
    }else{
        color= "#D9381E"
    }
    return {
      records,
      insights,
      balancedUnits,
      summary,
      sources,
      estimation,
      profile,
      curNav,
      avgNav,
      type,
      datastory,
      profit,
      sipStyles:{
         color:color
      },
      seriesNav: [{
             name: "Nav",
          data: navs.value,
          }],
      chartOptionsNav: {
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