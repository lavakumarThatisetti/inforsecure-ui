<template>
  <div class="container" id="insights">
    <h3><b>INSURANCE POLICIES</b></h3>
    <div class="row">
            <div class="col-sm p-3 mb-2 bg-dark text-white">
                <h5 style="color:white;">Profile : {{type}}</h5>
                <div class="row">
                    <div v-for="pro in profile" :key="pro" class="col-sm p-2 mb-2 bg-dark">
                                <div class="card">
                                    <h1>{{pro['name']}}</h1>
                                    <p class="title" style="color:black;"><i class="fas fa-envelope"></i> {{pro['email']}}</p>
                                    <p class="card-subtitle" style="color:black;"><i class="fas fa-phone"></i> {{pro['mobile']}}</p>
                                    <p class="card-text" style="color:black;"><b>Dob: </b>{{pro['dob']}}</p>
                                    <p class="card-text" style="color:black;"><b>Pan: </b>{{pro['pan']}}</p>
                                </div>
                    </div>
                </div>   
            </div>
    </div>
    <div class="row">
            <div class="col-sm p-3 mb-2 bg-dark text-white">
                <h5 style="color:white;">Insurance Summary</h5>
                 <div class="row">
                    <div class="col-sm p-2 mb-2 bg-dark">
                                <div class="card">
                                    <h1>Name: {{summary['policyName']}}</h1>
                                    <p class="title" style="color:black;">Policy Type {{summary['policyType']}}</p>
                                    <p class="card-subtitle" style="color:black;">Tenure Years: {{summary['tenureYears']}}</p>
                                    <p class="card-text" style="color:black;"><b>Policy Start Date: </b>{{summary['policyStartDate']}}</p>
                                    <p class="card-text" style="color:black;"><b>Maturity Date: </b>{{summary['maturityDate'].split("T")[0]}}</p>
                                </div>
                    </div>
                </div>   
            </div>
            <div class="col-sm p-3 mb-2 bg-dark text-white">
                <h5 style="color:white;">Insurance Summary</h5>
                  <apexchart type="donut" :options="DchartOptions" :series="Dseries"></apexchart>
            </div>
        </div>      
  </div> 
  <apexchart
    v-if="insureChartSeries != null"
    type="line"
    :options="chartOptions"
    :series="insureChartSeries"
  ></apexchart>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import moment from "moment";
export default {
  name: "DepositViz",
  props: {
    data: {
      type: Object,
    },
  },
  setup(props) {
    const insureData = computed(() => props.data);
    const dates = ref([]);
    const amounts = ref([]);
    const narrations = ref([]);
    const summary = ref({});
    const profile = ref([]);
    const type = ref(null);
    console.log("insureData", insureData);
    var legend = [
      "sumAssured",
      "premiumAmount",
      "coverAmount"
    ];
    // Transactions
    insureData.value["records"].forEach((record) => {
      const date = moment(
        record["txnDate"].split("T")[0],
        "YYYY-MM-DD"
      ).format("DD/MM/YYYY");
      const amount = record["amount"];
      dates.value.push(date);
      amounts.value.push(amount);
      narrations.value.push(record["narration"]);
    });

    summary.value = insureData.value["summary"];
    profile.value = insureData.value["profile"]["holder"];
    type.value = insureData.value["profile"]['type'];

    return {
      summary,
      type,
      profile,
      chartOptions: {
        chart: {
          id: "Insurance Policies",
          events: {
            selection: function (chart, e) {
              console.log(new Date(e.xaxis.min));
            },
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.6,
            opacityTo: 0.8,
          },
        },
        title: {
          text: "Transactions History",
          align: "center",
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: "20px",
            fontWeight: "bold",
            color: "#263238",
          },
        },
        legend: {
          position: "top",
          horizontalAlign: "left",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          categories: dates.value,
        },
      },
      insureChartSeries: [
        {
          name: "Amount",
          data: amounts.value,
        }
      ],
      DchartOptions: {
        chart: {
          width: 380,
          type: "donut",
        },
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 270,
          },
        },
        labels: legend,
        dataLabels: {
          enabled: false,
        },
        fill: {
          type: "gradient",
        },
        legend: {
            horizontalAlign: "right",
            position: "bottom",
            labels: {
            colors: "white",
            useSeriesColors: false,
          },
          formatter: function (val, opts) {
            return legend[opts.seriesIndex];
          },
        },
        title: {
          text: "Policy Details",
          align: "center",
          margin: 10,
          floating: false,
          style: {
            fontSize: "20px",
            fontWeight: "bold",
            color: "white",
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
      Dseries: [
        summary.value["sumAssured"] / 1,
        summary.value["premiumAmount"] / 1,
        summary.value["coverAmount"] / 1
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
  background: rgb(8, 170, 8);
}
</style>