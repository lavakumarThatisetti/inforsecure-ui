<template>
<div class="container" id="insights">
    <h3><b>PPF ( Public Provident Fund )</b></h3>
    <div class="row">
      <div class="col-sm p-4 mb-2 bg-dark text-white">
        <div style="color: white">Top 3 Peak hour count credit deposits</div>
        <table class="table table-dark">
          <tr>
            <th>Hour</th>
            <th v-for="hr in hourCount" :key="hr">
              {{ hr }}
            </th>
          </tr>
          <tr>
            <th>Count</th>
            <th v-for="hr in hourCount" :key="hr">
              {{ insights["frequent_deposits_hour"]["DEPOSIT"][hr] }}
            </th>
          </tr>
        </table>
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
    <!-- <div class="row">
      <div class="col-sm p-3 mb-2 bg-dark text-white">
        <div style="color: white">Top 3 Peak hour count credit deposits</div>
        <table class="table table-dark">
          <tr>
            <th>Hour</th>
            <th v-for="credit in hourCount['credit']" :key="credit">
              {{ credit }}
            </th>
          </tr>
          <tr>
            <th>Count</th>
            <th v-for="credit in hourCount['credit']" :key="credit">
              {{ insights["peekHourCount"]["credit"][credit] }}
            </th>
          </tr>
        </table>
      </div>
      <div class="col-sm p-3 mb-2 bg-dark text-white">
        <div style="color: white">Top 3 Peak hour count debit deposits</div>
        <table class="table table-dark">
          <tr>
            <th>Hour</th>
            <th v-for="debit in hourCount['debit']" :key="debit">
              {{ debit }}
            </th>
          </tr>
          <tr>
            <th>Count</th>
            <th v-for="debit in hourCount['debit']" :key="debit">
              {{ insights["peekHourCount"]["debit"][debit] }}
            </th>
          </tr>
        </table>
      </div>
    </div>
    <div class="row shadow-lg p-3 mb-1 bg-dark rounded text-center" style="color:white;">Max Credit and Debit Transaction</div>
    <div class="row bg-white rounded d-flex">
            <div class="card col-xs-6 col-sm-6 col-md-6 col-lg-6 p-3 mb-2">
                <div class="card-body">
                    <h5 class="card-title">Credit</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{{insights["creditMinMaxRatio"]['max']['credit']['txn_date']}}</h6>
                    <p class="card-text">Source: {{insights["creditMinMaxRatio"]['max']['credit']['narration']}}</p>
                    <a class="card-link">Mode: {{insights["creditMinMaxRatio"]['max']['debit']['mode']}}</a>
                    <a class="card-link">Amount: {{insights["creditMinMaxRatio"]['max']['debit']['amount']}}</a>
                </div>
            </div>
            <div class="card col-xs-6 col-sm-6 col-md-6 col-lg-6 p-3 mb-2">
                <div class="card-body">
                    <h5 class="card-title">Debit</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{{insights["creditMinMaxRatio"]['max']['debit']['txn_date']}}</h6>
                    <p class="card-text">Source: {{insights["creditMinMaxRatio"]['max']['debit']['narration']}}</p>
                    <a class="card-link">Mode: {{insights["creditMinMaxRatio"]['max']['debit']['mode']}}</a>
                    <a class="card-link">Amount: {{insights["creditMinMaxRatio"]['max']['debit']['amount']}}</a>
                </div>
            </div>
    </div>
    <div class="row shadow-lg p-3 mb-1 bg-dark rounded" style="color:white;"><div class="text-center">Min Credit and Debit Transaction</div></div>
    <div class="row rounded">
            <div class="card col-xs-6 col-sm-6 col-md-6 col-lg-6 p-3 mb-2">
                <div class="card-body">
                    <h5 class="card-title">Credit</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{{insights["creditMinMaxRatio"]['min']['credit']['txn_date']}}</h6>
                    <p class="card-text">Source: {{insights["creditMinMaxRatio"]['min']['credit']['narration']}}</p>
                    <a class="card-link">Mode: {{insights["creditMinMaxRatio"]['min']['credit']['mode']}}</a>
                    <a class="card-link">Amount: {{insights["creditMinMaxRatio"]['min']['credit']['amount']}}</a>
                </div>
            </div>
            <div class="card col-xs-6 col-sm-6 col-md-6 col-lg-6 p-3 mb-2">
                <div class="card-body">
                    <h5 class="card-title">Debit</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{{insights["creditMinMaxRatio"]['min']['debit']['txn_date']}}</h6>
                    <p class="card-text">Source: {{insights["creditMinMaxRatio"]['min']['debit']['narration']}}</p>
                    <a class="card-link">Mode: {{insights["creditMinMaxRatio"]['min']['debit']['mode']}}</a>
                    <a class="card-link">Amount: {{insights["creditMinMaxRatio"]['min']['debit']['amount']}}</a>
                </div>
            </div>
        </div> -->
        <div class="row">
            <div class="col-sm p-3 mb-2 bg-dark text-white">
                <h5 style="color:white;">Profile: {{type}}</h5>
                <div class="row">
                    <div class="col-sm p-2 mb-2 bg-dark">
                        <div class="card">
                            <h1>{{profile['name']}}</h1>
                            <p class="title" style="color:black;"><i class="fas fa-envelope"></i> {{profile['email']}}</p>
                            <p class="card-subtitle" style="color:black;"><i class="fas fa-phone"></i> {{profile['mobile']}}</p>
                            <p class="card-text" style="color:black;"><b>Dob: </b>{{profile['dob']}}</p>
                            <!-- <p class="card-text" style="color:black;"><b>Pan: </b>{{profile['pan']}}</p> -->
                        </div>
                    </div>
                </div>   
            </div>
            <div class="col-sm p-3 mb-2 bg-dark text-white">
                <h5 style="color:white;">Bank Summary</h5>
                 <div class="row">
                    <div class="col-sm p-2 mb-2 bg-dark">
                                <div class="card">
                                    <p class="title" style="color:black;"><b>Current</b> : {{summary['currenBalance']}}</p>
                                    <p class="card-text" style="color:black;"><i class="fas fa-toggle-on"></i> {{summary['status']}}</p>
                                    <p class="card-text" style="color:black;"><b>Opening Date: </b>{{summary['openingDate']}}</p>
                                    <p class="card-text" style="color:black;"><b>Maturity Date:</b> {{summary['maturityDate']}}</p>
                                </div>
                    </div>
                </div>   
            </div>
        </div>    
  </div>  
  <apexchart
    v-if="chartSeries != null"
    type="line"
    :options="chartOptions"
    :series="chartSeries"
  ></apexchart>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import moment from "moment";
export default {
  name: "PpfViz",
  props: {
    data: {
      type: Object,
    },
  },
  setup(props) {
    const epfData = computed(() => props.data);
    const dates = ref([]);
    const amounts = ref([]);
    const totals = ref([]);
    const narrations = ref([]);
    const insights = ref({});
    const sources = ref([]);
    const estimation = ref(null);
    const type= ref(null);
    const hourCount = ref([]);
    const summary = ref({});
    const profile = ref([]);
    var colorPalette = ['#00D8B6','#008FFB', '#ff531f', '#FF4560', '#775DD0']
    console.log("epfData", epfData.value);
    // Transactions
    epfData.value["records"].forEach((record) => {
      const date = moment(record["txnDate"].split("T")[0], "YYYY-MM-DD").format(
        "DD/MM/YYYY"
      );
      const amount = record["aggregateAmount"];
      const sum = record["aggregateSum"];
      dates.value.push(date);
      amounts.value.push(Math.round(amount * 100) / 100);
      totals.value.push(Math.round(sum * 100) / 100);
      narrations.value.push(record["narration"]);
    });

    // Insights
    insights.value = epfData.value["insights"];
    // console.log(insights.value);
    sources.value = Object.keys(insights.value["topSources"]);
    estimation.value = insights.value["frequent_deposits_hour"];
    hourCount.value = Object.keys(
      insights.value["frequent_deposits_hour"]["DEPOSIT"]
    );
    summary.value = epfData.value["summary"];
    profile.value = epfData.value["profile"]['holder'][0];
    type.value = epfData.value["profile"]['type'];

    return {
      insights,
      summary,
      sources,
      estimation,
      profile,
      hourCount,
      type,
    chartOptions:{
      chart: {
        type: "line",
      },
      colors: colorPalette,
      xaxis: {
        categories: dates.value,
        axisTicks: {
          show: true,
        },
      },
      dataLabels: {
          enabled: false,
       },
      yaxis: {
        axisBorder: {
          show: true,
        },
        axisTicks: {
          show: true,
        },
        labels: {
          style: {
            colors: "#78909c",
          },
        },
      },
      title: {
        text: "PPF Contribution",
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
         name: 'Amount Deposited',
         data: amounts.value
        },
        {
          name: "Current Balance",
          data: totals.value,
        }
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
  font-weight: bold;
  background: rgb(236, 192, 47);
}
</style>