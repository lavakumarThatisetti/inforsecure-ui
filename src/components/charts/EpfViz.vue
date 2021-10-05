<template>
<div class="container" id="insights">
    <h3><b>EPF ( Employee Provident Fund )</b></h3>
    <div class="row">
      <div class="col-sm p-4 mb-2 bg-dark text-white">
        <div>General Estimation of PF</div>
        <div style="background:blue;">{{estimation}}</div>
      </div>
      <div class="col-sm p-3 mb-2 bg-dark text-white shadow-lg">
        <div style="color: white">Top sources of Contributions</div>
        <div class="row">
          <div
            class="col-sm p-3 mb-2 sources"
            v-for="source in sources"
            :key="source"
          >
            {{ source }} - {{ insights["topSources"][source] }}
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
                            <p class="card-text" style="color:black;"><b>Dob: </b>{{profile['dob']}}</p>
                            <p class="card-text" style="color:black;"><b>Pan: </b>{{profile['pan']}}</p>
                        </div>
                    </div>
                </div>   
            </div>
            <div class="col-sm p-3 mb-2 bg-dark text-white">
                <h5 style="color:white;">Bank Summary</h5>
                 <div class="row">
                    <div class="col-sm p-2 mb-2 bg-dark">
                                <div class="card">
                                    <h1>{{summary['establishmentName']}}</h1>
                                    <p class="title" style="color:black;"><b>Total</b> : {{summary['totalBalance']}}</p>
                                    <p class="card-subtitle" style="color:black;"><b>Employee Contribution</b>:<i class="fas fa-rupee-sign"></i> {{summary['employeeBalance']}}</p>
                                    <p class="card-text" style="color:black;"><b>Employer Contribution</b>: <i class="fas fa-rupee-sign"></i> {{summary['employerBalance']}}</p>
                                    <p class="card-text" style="color:black;"><b>Opening Date: </b>{{summary['openingDate']}}</p>
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
  name: "EpfViz",
  props: {
    data: {
      type: Object,
    },
  },
  setup(props) {
    const epfData = computed(() => props.data);
    const dates = ref([]);
    const employerPensionContributions = ref([]);
    const employerPFContributions = ref([]);
    const employeeContributions = ref([]);
    const narrations = ref([]);
    const insights = ref({});
    const sources = ref([]);
    const estimation = ref(null);
    // const hourCount = ref({
    //   credit: [],
    //   debit: [],
    // });
    const summary = ref({});
    const profile = ref([]);
    var colorPalette = ['#00D8B6','#008FFB', '#ff531f', '#FF4560', '#775DD0']
    console.log("epfData", epfData.value);
    // Transactions
    epfData.value["records"].forEach((record) => {
      const date = moment(record["txnDate"].split("T")[0], "YYYY-MM-DD").format(
        "DD/MM/YYYY"
      );
      const employeeContribution = record["employeeDepositAmount"];
      const employerPFContribution = record["employerPFContribution"];
      const employerPensionContribution = record["employerPensionContribution"];
      dates.value.push(date);
      employeeContributions.value.push(employeeContribution);
      employerPFContributions.value.push(employerPFContribution);
      employerPensionContributions.value.push(employerPensionContribution);
      narrations.value.push(record["narration"]);
    });

    // Insights
    insights.value = epfData.value["insights"];
    // console.log(insights.value);
    sources.value = Object.keys(insights.value["topSources"]);
    estimation.value = insights.value["next_25_years_estimation"];
    // hourCount.value["credit"] = Object.keys(
    //   insights.value["peekHourCount"]["credit"]
    // );
    // hourCount.value["debit"] = Object.keys(
    //   insights.value["peekHourCount"]["debit"]
    // );
    summary.value = epfData.value["summary"];
    profile.value = epfData.value["profile"];

    return {
      insights,
      summary,
      sources,
      estimation,
      profile,
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
        text: "Employer Pf and Pension Contribution",
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
         name: 'Employee Contribution',
         type: 'column',
         data: employeeContributions.value
        },
        {
          name: "Employer Pf Contribution",
          data: employerPFContributions.value,
        },
        {
          name: "Employer Pension Contribution",
          data: employerPensionContributions.value,
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