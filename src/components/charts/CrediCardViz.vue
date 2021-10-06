<template>
  <div class="container" id="insights">
    <h3><b>CREDIT CARD</b></h3>
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
    <div
      class="row shadow-lg p-3 mb-1 bg-dark rounded text-center"
      style="color: white"
    >
      Max Credit and Debit Transaction
    </div>
    <div class="row bg-white rounded d-flex">
      <div class="card col-xs-6 col-sm-6 col-md-6 col-lg-6 p-3 mb-2">
        <div class="card-body">
          <h5 class="card-title">Credit</h5>
          <h6 class="card-subtitle mb-2 text-muted">
            {{ insights["creditMinMaxRatio"]["max"]["credit"]["txn_date"] }}
          </h6>
          <p class="card-text">
            Source:
            {{ insights["creditMinMaxRatio"]["max"]["credit"]["narration"] }}
          </p>
          <a class="card-link"
            >Mode:
            {{ insights["creditMinMaxRatio"]["max"]["debit"]["mode"] }}</a
          >
          <a class="card-link"
            >Amount:
            {{ insights["creditMinMaxRatio"]["max"]["debit"]["amount"] }}</a
          >
        </div>
      </div>
      <div class="card col-xs-6 col-sm-6 col-md-6 col-lg-6 p-3 mb-2">
        <div class="card-body">
          <h5 class="card-title">Debit</h5>
          <h6 class="card-subtitle mb-2 text-muted">
            {{ insights["creditMinMaxRatio"]["max"]["debit"]["txn_date"] }}
          </h6>
          <p class="card-text">
            Source:
            {{ insights["creditMinMaxRatio"]["max"]["debit"]["narration"] }}
          </p>
          <a class="card-link"
            >Mode:
            {{ insights["creditMinMaxRatio"]["max"]["debit"]["mode"] }}</a
          >
          <a class="card-link"
            >Amount:
            {{ insights["creditMinMaxRatio"]["max"]["debit"]["amount"] }}</a
          >
        </div>
      </div>
    </div>
    <div class="row shadow-lg p-3 mb-1 bg-dark rounded" style="color: white">
      <div class="text-center">Min Credit and Debit Transaction</div>
    </div>
    <div class="row rounded">
      <div class="card col-xs-6 col-sm-6 col-md-6 col-lg-6 p-3 mb-2">
        <div class="card-body">
          <h5 class="card-title">Credit</h5>
          <h6 class="card-subtitle mb-2 text-muted">
            {{ insights["creditMinMaxRatio"]["min"]["credit"]["txn_date"] }}
          </h6>
          <p class="card-text">
            Source:
            {{ insights["creditMinMaxRatio"]["min"]["credit"]["narration"] }}
          </p>
          <a class="card-link"
            >Mode:
            {{ insights["creditMinMaxRatio"]["min"]["credit"]["mode"] }}</a
          >
          <a class="card-link"
            >Amount:
            {{ insights["creditMinMaxRatio"]["min"]["credit"]["amount"] }}</a
          >
        </div>
      </div>
      <div class="card col-xs-6 col-sm-6 col-md-6 col-lg-6 p-3 mb-2">
        <div class="card-body">
          <h5 class="card-title">Debit</h5>
          <h6 class="card-subtitle mb-2 text-muted">
            {{ insights["creditMinMaxRatio"]["min"]["debit"]["txn_date"] }}
          </h6>
          <p class="card-text">
            Source:
            {{ insights["creditMinMaxRatio"]["min"]["debit"]["narration"] }}
          </p>
          <a class="card-link"
            >Mode:
            {{ insights["creditMinMaxRatio"]["min"]["debit"]["mode"] }}</a
          >
          <a class="card-link"
            >Amount:
            {{ insights["creditMinMaxRatio"]["min"]["debit"]["amount"] }}</a
          >
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm p-3 mb-2 bg-dark text-white">
        <h5 style="color: white">Profile: {{ type }}</h5>
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
              <p class="card-text" style="color: black">
                <b>Card </b>{{ profile["cards"]["card"][0]["cardType"] }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm p-3 mb-2 bg-dark text-white">
        <h5 style="color: white">Credit Trasnactions</h5>
            <apexchart
              v-if="chartSeries != null"
              type="pie"
              width="380"
              :options="chartOptions"
              :series="chartSeries"
            ></apexchart>
      </div>
    </div>
    <div class="row">
      <div class="col-sm p-3 mb-2">
      <apexchart type="donut" :options="DchartOptions" :series="Dseries"></apexchart>
      </div>
      <div class="col-sm p-3 mb-2">
        <h5><b>Credit Score</b></h5>
        <apexchart type="radialBar" :options="CredtChartOptions" :series="Creditseries"></apexchart>
        </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import moment from "moment";
export default {
  name: "CrediCardViz",
  props: {
    data: {
      type: Object,
    },
  },
  setup(props) {
    const epfData = computed(() => props.data);
    const dates = ref([]);
    const camounts = ref(0);
    const damounts = ref(0);
    const narrations = ref([]);
    const insights = ref({});
    const sources = ref([]);
    const estimation = ref(null);
    const type = ref(null);
    const hourCount = ref([]);
    const summary = ref({});
    const profile = ref([]);
    const creditScore  = ref(500);
    var legend = [
      "creditLimit",
      "cashLimit",
      "availableCredit",
      "currentDue",
      "previousDueAmount",
      "minDueAmount",
    ];
    console.log("creditData", epfData.value);
    // Transactions
    epfData.value["records"].forEach((record) => {
      const date = moment(record["txnDate"].split("T")[0], "YYYY-MM-DD").format(
        "DD/MM/YYYY"
      );
      const amount = record["amount"];
      const txnType = record["txnType"];
      dates.value.push(date);
      if (txnType === "DEBIT") {
        damounts.value = Math.round((damounts.value + amount) * 100) / 100;
      } else {
        camounts.value = Math.round((camounts.value + amount) * 100) / 100;
      }
      narrations.value.push(record["narration"]);
    });

    // Insights
    insights.value = epfData.value["insights"];
    // console.log(insights.value);
    sources.value = Object.keys(insights.value["topSources"]);
    summary.value = epfData.value["summary"];
    profile.value = epfData.value["profile"];
    type.value = epfData.value["profile"]["type"];
    var cs = 0;
    if(summary.value['totalDueAmount']/1 < summary.value['creditLimit']/1){ 
          cs = cs +100;
    }
    if((summary.value['financeCharges']/1)<1000){
         cs = cs +100;
    }
    if((summary.value['loyaltyPoints']/1)>1000){
         cs = cs +100;
    }
    creditScore.value = (creditScore.value + cs)/10;

    return {
      insights,
      summary,
      sources,
      estimation,
      profile,
      hourCount,
      type,
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
            colors: "black",
            useSeriesColors: false,
          },
          formatter: function (val, opts) {
            return legend[opts.seriesIndex];
          },
        },
        title: {
          text: "Credit Summary",
          align: "center",
          margin: 10,
          floating: false,
          style: {
            fontSize: "20px",
            fontWeight: "bold",
            color: "#263238",
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
        summary.value["creditLimit"] / 1,
        summary.value["cashLimit"] / 1,
        summary.value["availableCredit"] / 1,
        summary.value["currentDue"] / 1,
        summary.value["previousDueAmount"] / 1,
        summary.value["minDueAmount"] / 1,
      ],
      chartOptions: {
        chart: {
          height: 200,
          type: "pie",
        },
        labels: ["Credit", "Debit"],
        title: {
          text: "Credit Card Transactions",
          align: "center",
          style: {
            fontSize: "18px",
          },
        },
        legend: {
          position: "right",
          labels: {
            colors: "white",
            useSeriesColors: false,
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
                labels: {
                  colors: "white",
                  useSeriesColors: false,
                },
              },
            },
          },
        ],
      },
      chartSeries: [camounts.value / 1, damounts.value / 1],
      Creditseries: [creditScore.value],
      CredtChartOptions: {
            chart: {
              type: 'radialBar',
              offsetY: -20,
              sparkline: {
                enabled: true
              }
            },
            plotOptions: {
              radialBar: {
                startAngle: -90,
                endAngle: 90,
                track: {
                  background: "#e7e7e7",
                  strokeWidth: '97%',
                  margin: 5, // margin is in pixels
                  dropShadow: {
                    enabled: true,
                    top: 2,
                    left: 0,
                    color: '#999',
                    opacity: 1,
                    blur: 2
                  }
                },
                dataLabels: {
                  name: {
                    show: false
                  },
                  value: {
                    offsetY: -2,
                    fontSize: '22px'
                  }
                }
              }
            },
            grid: {
              padding: {
                top: 10
              }
            },
            fill: {
              type: 'gradient',
              gradient: {
                shade: 'light',
                shadeIntensity: 0.4,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 53, 91]
              },
            },
            labels: ['Credit Score'],
          }
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