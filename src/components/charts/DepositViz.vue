<template>
  <div class="container" id="insights">
    <h3><b>FIXED DEPOSITS</b></h3>
    <div class="row">
      <div class="col-sm p-4 mb-2 bg-dark text-white">
        <div>Credit Debit Transactions Ratio</div>
        <div class="progress" style="height: 30px">
          <div
            class="progress-bar progress-bar-striped"
            style="background-color: green"
            :style="{ width: insights['creditVsDebit']['CREDIT'] + '%' }"
          >
            {{ insights["creditVsDebit"]["CREDIT"] }}
          </div>
          <div
            class="progress-bar progress-bar-striped"
            style="background-color: orange"
            :style="{ width: insights['creditVsDebit']['DEBIT'] + '%' }"
          >
            {{ insights["creditVsDebit"]["DEBIT"] }}
          </div>
        </div>
        <div clas="row">
          Credit
          <p
            style="
              width: 10px;
              height: 10px;
              background: green;
              color: green;
              display: inline;
            "
          >
            Crt
          </p>
           Debit
          <p
            style="
              width: 10px;
              height: 10px;
              background: orange;
              color: orange;
              display: inline;
            "
          >
            Crt
          </p>
        </div>
      </div>
      <div class="col-sm p-3 mb-2 bg-dark text-white shadow-lg">
        <div style="color: white">Top sources of transactions</div>
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
    </div> 
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
                                    <p class="card-text" style="color:black;"><b>Address: </b>{{pro['address']}}</p>
                                </div>
                    </div>
                </div>   
            </div>
            <div class="col-sm p-3 mb-2 bg-dark text-white">
                <h5 style="color:white;">Bank Summary</h5>
                 <div class="row">
                    <div class="col-sm p-2 mb-2 bg-dark">
                                <div class="card">
                                    <h1>{{summary['branch']}}</h1>
                                    <p class="title" style="color:black;"><i class="fas fa-university"></i> {{summary['type']}}</p>
                                    <p class="card-subtitle" style="color:black;"><i class="fas fa-toggle-on"></i> {{summary['status']}}</p>
                                    <p class="card-text" style="color:black;"><b>{{summary['currency']}}</b>:{{summary['currentBalance']}}</p>
                                    <p class="card-text" style="color:black;"><b>Opening Date: </b>{{summary['openingDate']}}</p>
                                    <p class="card-text" style="color:black;"><b>Balance Date: </b>{{summary['balanceDateTime'].split("T")[0]}}</p>
                                </div>
                    </div>
                </div>   
            </div>
        </div>      
  </div> 
  <apexchart
    v-if="depositChartSeries != null"
    type="area"
    :options="chartOptions"
    :series="depositChartSeries"
  ></apexchart>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import moment from "moment";
export default {
  name: "DepositViz",
  props: {
    depositsData: {
      type: Object,
    },
  },
  setup(props) {
    const depositData = computed(() => props.depositsData);
    const dates = ref([]);
    const balances = ref([]);
    const amounts = ref([]);
    const narrations = ref([]);
    const insights = ref({});
    const sources = ref([]);
    const hourCount = ref({
      credit: [],
      debit: [],
    });
    const summary = ref({});
    const profile = ref([]);
    const type = ref(null);
    console.log("DepositData", depositData);
    // Transactions
    depositData.value["records"].forEach((record) => {
      const date = moment(
        record["transactionTimestamp"].split("T")[0],
        "YYYY-MM-DD"
      ).format("DD/MM/YYYY");
      const balance = record["currentBalance"];
      const amount = record["amount"];
      dates.value.push(date);
      amounts.value.push(balance);
      balances.value.push(amount);
      narrations.value.push(record["narration"]);
    });

    // Insights
    insights.value = depositData.value["insights"];
    console.log(insights.value);
    sources.value = Object.keys(insights.value["topSources"]);
    hourCount.value["credit"] = Object.keys(
      insights.value["peekHourCount"]["credit"]
    );
    hourCount.value["debit"] = Object.keys(
      insights.value["peekHourCount"]["debit"]
    );
    summary.value = depositData.value["summary"];
    profile.value = depositData.value["profile"]["holder"];
    type.value = depositData.value["profile"]['type'];

    return {
      insights,
      summary,
      sources,
      type,
      profile,
      hourCount,
      chartOptions: {
        chart: {
          id: "Balanced Deposits",
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
      depositChartSeries: [
        {
          name: "Amount",
          data: amounts.value,
        },
        {
          name: "Balance",
          data: balances.value,
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
  background: rgb(8, 170, 8);
}
</style>