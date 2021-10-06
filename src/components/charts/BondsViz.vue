<template>
<div class="container" id="insights">
    <h3><b>BONDS</b></h3>
    <div class="row">
      <div class="col-sm p-4 mb-2 bg-dark text-white">
        <div>Performance Of Bond</div>
        <div class="col-sm p-4 mb-2" style="background:#ff4500; border-radius:5px;">{{datastory}}</div>
      </div>
      <div class="col-sm p-3 mb-2 bg-dark text-white shadow-lg">
        <div style="color: white">Insights</div>
        <div class="row">
          <div
            class="col-sm p-3 mb-2 sources"
            v-for="source in insights['investedCurrencies']"
            :key="source"
          >
            Invested Currency - {{ source }}
          </div>
        <div class="col-sm p-3 mb-2 sources">
            Returns Of Bond - {{ insights["creditStatus"] }}
        </div>
        </div>
        <div class="row">
                   <div class="col-sm p-3 mb-2 sources">
            Profit <b>{{ insights["profit"] }}%</b>
        </div>
        </div>
      </div>
    </div>
        <div class="row">
            <div class="col-sm p-3 mb-2 bg-dark text-white">
                <h5 style="color:white;">Profile</h5>
                <div class="row">
                    <div class="col-sm p-2 mb-2 bg-dark">
                        <div class="card">
                            <h1>{{profile['name']}}</h1>
                            <p class="title" style="color:black;"><i class="fas fa-envelope"></i> {{profile['email']}}</p>
                            <p class="card-subtitle" style="color:black;"><i class="fas fa-phone"></i> {{profile['mobile']}}</p>
                            <p class="card-text" style="color:black;"><b>DematId: </b>{{profile['dematId']}}</p>
                            <p class="card-text" style="color:black;"><b>Dob: </b>{{profile['dob']}}</p>
                            <p class="card-text" style="color:black;"><b>Pan: </b>{{profile['pan']}}</p>
                        </div>
                    </div>
                </div>   
            </div>
            <div class="col-sm p-3 mb-2 bg-dark text-white">
                <h5 style="color:white;">Bond Summary</h5>
                 <div class="row">
                    <div class="col-sm p-2 mb-2 bg-dark">
                                <div class="card">
                                    <h1>Issuer Name: {{summary['holdings']['holding']['issuerName']}}</h1>
                                    <p class="title" style="color:black;"><b>Prinicpal Amount</b> : {{summary['holdings']['holding']['principleAmount']}}</p>
                                    <p class="card-subtitle" style="color:black;"><b>Face Value</b>:<i class="fas fa-rupee-sign"></i> {{summary['holdings']['holding']['faceValue']}}</p>
                                    <p class="card-text" style="color:black;"><b>Credit Agency: </b>{{summary['holdings']['holding']['creditRatingAgency']}} - {{summary['holdings']['holding']['creditRating']}}</p>
                                
                                    <p class="card-text" style="color:black;"><b>Tenure Years</b>: {{summary['holdings']['holding']['tenureYears']}}</p>
                                    <p class="card-text" style="color:black;"><b>Maturity Date: </b>{{summary['holdings']['holding']['maturityDate']}}</p>
                                </div>
                    </div>
                </div>   
            </div>
        </div>    
  </div>  
  <apexchart
    v-if="chartSeries != null"
    type="bar"
    :options="chartOptions"
    :series="chartSeries"
  ></apexchart>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import moment from "moment";
export default {
  name: "BondsViz",
  props: {
    data: {
      type: Object,
    },
  },
  setup(props) {
    const bondsData = computed(() => props.data);
    const dates = ref([]);
    const bondRates = ref([]);
    const tradedValues = ref([]);
    const totalCharges = ref([]);
    const insights = ref({});
    const datastory = ref(null);
    const summary = ref({});
    const profile = ref([]);
    var colorPalette = ['#00D8B6','#008FFB', '#ff531f', '#FF4560', '#775DD0']
    console.log("bondsData", bondsData.value);
    // Transactions
    bondsData.value["records"].forEach((record) => {
      const date = moment(record["transactionDateTime"].split("T")[0], "YYYY-MM-DD").format(
        "DD/MM/YYYY"
      );
      const bondRate = record["rate"];
      const tradedValue = record["tradeValue"];
      const totalCharge = record["totalCharge"];
      dates.value.push(date);
      bondRates.value.push(bondRate);
      tradedValues.value.push(tradedValue);
      totalCharges.value.push(totalCharge);
    });

    // Insights
    datastory.value = bondsData.value['dataStory'];
    insights.value = bondsData.value["insights"];
    summary.value = bondsData.value["summary"];
    profile.value = bondsData.value["profile"];

    return {
      insights,
      summary,
      profile,
      datastory,
    chartOptions:{
      chart: {
        type: "bar",
        stacked: true,
      },
      plotOptions: {
        bar: {
          columnWidth: "70%",
        },
      },
      colors: colorPalette,
      xaxis: {
        categories: dates.value,
        axisTicks: {
          show: false,
        },
      },
      dataLabels: {
          enabled: false,
       },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          style: {
            colors: "#78909c",
          },
        },
      },
      title: {
        text: "Bonds Transactions",
        align: "center",
        style: {
          fontSize: "18px",
        },
      },
      tooltip: {
          shared: true,
          intersect: false
        },
      legend: {
          position: "top",
          horizontalAlign: "left",
      }
     },
      chartSeries: [
        {
         name: 'Bond Rate',
         data: bondRates.value
        },
        {
          name: "Trade Value",
          data: tradedValues.value,
        },
        {
          name: "Bond Charge",
          data: totalCharges.value,
        },
      ],
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