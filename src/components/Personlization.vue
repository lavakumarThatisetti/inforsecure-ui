<template>
  <div class="container bg-white" v-if="allConsents.length > 0">
    <h3 class="shadow-lg p-3 mb-3" id="header">
      Best Wealth Strategies we offers you based on your history of financial
      information
    </h3>
    <div class="page-header d-flex justify-content-center">
      <radial-progress-bar
        :diameter="120"
        :completed-steps="wealthScore"
        :total-steps="1000"
        :strokeWidth="12"
        :innerStrokeWidth="12"
        startColor="#00FF00"
        stopColor="#1E90FF"
      >
        <p>{{ wealthScore }} Points</p>
      </radial-progress-bar>
    </div>
    <h2 class="shadow-lg p-3 mb-3 bg-white rounded">Your Profile Speaks</h2>
    <div class="conatiner p-3 mb-2 bg-dark">
      <div class="row">
        <div class="col-sm p-3 mb-2 bg-dark text-white">
          <h4 style="color: white">Number of Consents Seeks</h4>
          <table class="table table-dark shadow-lg">
            <tr
              id="text-color"
              v-for="[key, value] in consentTypesMap"
              :key="key"
            >
              <td>{{ key }}</td>
              <td>{{ value }}</td>
            </tr>
          </table>
        </div>
        <div class="col-sm p-3 mb-2 bg-dark text-white shadow-lg">
          <h4 style="color: white">Frquency of Consents</h4>
          <table class="table table-dark shadow-lg">
            <tr
              class="shadow-lg"
              id="text-color"
              v-for="[key, value] in consentModeMap"
              :key="key"
            >
              <td>{{ key }}</td>
              <td>{{ value }}</td>
            </tr>
          </table>
        </div>
        <div class="col-sm p-3 mb-2 bg-dark text-white shadow-lg">
          <h4 style="color: white">Frquency of Fetches</h4>
          <table class="table table-dark shadow-lg">
            <tr id="text-color" v-for="[key, value] in fetchTypeMap" :key="key">
              <td>{{ key }}</td>
              <td>{{ value }}</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="row">
        <div class="col-sm p-3 mb-2 bg-dark text-white shadow-lg">
          <h4 style="color: white">Frquency of FiTypes</h4>
        </div>
      </div>
      <div class="row">
        <div
          class="col-sm p-3 mb-2 bg-dark text-white shadow-lg"
          v-for="[key, value] in fiTypesMap"
          :key="key"
        >
          {{ key }}: {{ value }}
        </div>
      </div>
    </div>
    <h3 class="shadow-lg p-3 mb-3 bg-white rounded">
      Based on your Wealth Score we offers different investment options to grow
    </h3>
    <div class="conatiner p-3 mb-2 bg-dark text-white">
      <div
        class="row p-3 mb-2 bg-dark text-white shadow-lg"
        v-if="offers['stackHolders'] != null"
      >
        <div
          class="
            col-sm-3
            d-flex
            justify-content-center
            p-3
            mb-2
            bg-dark
            text-white
            shadow-lg
          "
        >
          <img class="align-items-center"
            src="../assets/images/investment.png"
            style="height: 200px; margin-left: -15px"
          />
        </div>
        <div class="col-sm-9">
          <h3 class="text-white d-flex justify-content-left p-3
            mb-2
            bg-dark shadow-lg">Investments</h3>
          <h5 class="text-white"><b>Firms Offering Investemnts</b></h5>
          <div class="row p-3
                    mb-2
                    ">
               <div class="col-sm-6 p-3
                    mb-2
                    bg-dark shadow-lg" v-for="firms in offers['stackHolders']['holders']" :key="firms">
                    {{ firms }}
                </div>
          </div>
          <h5 class="text-white"><b>Return of Investemnts</b></h5>
          <div class="row p-3
                    mb-2
                     ">
               <div class="col-sm-4 p-3
                    mb-2
                    bg-dark shadow-lg">
                    1 year  <p id="money">+{{ offers['stackHolders']['returns']['1'] }}%</p>
                </div>
                <div class="col-sm-4 p-3
                    mb-2
                    bg-dark shadow-lg">
                    3 years <p id="money">+{{ offers['stackHolders']['returns']['3'] }}%</p>
                </div>
                <div class="col-sm-4 p-3
                    mb-2
                    bg-dark shadow-lg">
                    5 years <p id="money">+{{ offers['stackHolders']['returns']['5'] }}%</p>
                </div>
          </div>
        </div>
      </div>
      <div
        class="row p-3 mb-2 bg-dark text-white shadow-lg"
        v-if="offers['InvestmentHolders'] != null"
      >
        <div
          class="
            col-sm-3
            d-flex
            justify-content-center
            p-3
            mb-2
            bg-dark
            text-white
            shadow-lg
          "
        >
          <img
            src="../assets/images/invest1.png"
            style="height: 200px; margin-left: -15px"
          />
        </div>
        <div class="col-sm-9">
          <h3 class="text-white d-flex justify-content-left p-3
            mb-2
            bg-dark shadow-lg">Loan Offers</h3>
          <h5 class="text-white"><b>Firms Offering Loans</b></h5>
          <div class="row p-3
                    mb-2
                    ">
               <div class="col-sm-6 p-3
                    mb-2
                    bg-dark shadow-lg" v-for="firms in offers['InvestmentHolders']['holders']" :key="firms">
                    {{ firms }}
                </div>
          </div>
          <h5 class="text-white"><b>Loan Cap</b></h5>
          <div class="row p-3
                    mb-2
                     ">
               <div class="col-sm-4 p-3
                    mb-2
                    bg-dark shadow-lg"
                    v-for="loans in offers['InvestmentHolders']['loan']" :key="loans">
                    <p>Max Amount: <b id="money">{{loans['maxAmount']}}</b></p>
                    <p>Intrest: <b id="money">{{loans['intrest']}}</b></p>
                </div>
          </div>
        </div>
      </div>
      <div
        class="row p-3 mb-2 bg-dark text-white shadow-lg"
        v-if="offers['IPO'] != null"
      >
        <div
          class="
            col-sm-3
            d-flex
            justify-content-center
            p-3
            mb-2
            bg-dark
            text-white
            shadow-lg
          "
        >
          <img
            src="../assets/images/ipo.png"
            style="height: 200px; margin-left: -15px"
          />
        </div>
        <div class="col-sm-9">
          <h3 class="text-white d-flex justify-content-left p-3
            mb-2
            bg-dark shadow-lg">IPO Offerings</h3>
          <h5 class="text-white"><b>Firms Offers IPO Shares</b></h5>
          <div class="row p-3
                    mb-2
                    ">
               <div class="col-sm-6 p-3
                    mb-2
                    bg-dark shadow-lg" v-for="firms in offers['IPO']['Companies']" :key="firms">
                    {{ firms }}
                </div>
          </div>
        </div>
      </div>
      <div
        class="row p-3 mb-2 bg-dark text-white shadow-lg"
        v-if="offers['ShareHoldings'] != null"
      >
        <div
          class="
            col-sm-3
            d-flex
            justify-content-center
            p-3
            mb-2
            bg-dark
            text-white
            shadow-lg
          "
        >
          <img
            src="../assets/images/growth.png"
            style="height: 200px; margin-left: -15px"
          />
        </div>
        <div class="col-sm-9">
          <h3 class="text-white d-flex justify-content-left p-3
            mb-2
            bg-dark shadow-lg">Shares to Invest</h3>
          <h5 class="text-white"><b>Firms Offering Shares less than market price</b></h5>
          <div class="row p-3
                    mb-2
                    ">
               <div class="col-sm-6 p-3
                    mb-2
                    bg-dark shadow-lg" v-for="firms in offers['ShareHoldings']['Companies']" :key="firms">
                    {{ firms }}
                </div>
          </div>
          <h5 class="text-white"><b>Share Quantity</b></h5>
          <div class="row p-3
                    mb-2
                     ">
               <div class="col-sm-4 p-3
                    mb-2
                    bg-dark shadow-lg"
                    v-for="share in offers['ShareHoldings']['offers']" :key="share">
                    <p>Shares: <b id="money">{{share}}</b></p>
                </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container" v-else>
    <h3 class="shadow-lg p-3 mb-3" id="header">
      This Section will customizes based on your finanical data and will provide
      you all the resources to become wealth person
    </h3>
    <h3 class="shadow-lg p-3 mb-3 bg-white rounded">
      Hey, It seems you didnt provide your Financial Information to us yet. Here are Gist What we offers 
    </h3>
    <div class="conatiner p-3 mb-2 bg-dark text-white">
      <div
        class="row p-3 mb-2 bg-dark text-white shadow-lg"
        v-if="allOffers['stackHolders'] != null"
      >
        <div
          class="
            col-sm-3
            d-flex
            justify-content-center
            p-3
            mb-2
            bg-dark
            text-white
            shadow-lg
          "
        >
          <img class="align-items-center"
            src="../assets/images/investment.png"
          />
        </div>
        <div class="col-sm-9">
          <h3 class="text-white d-flex justify-content-left p-3
            mb-2
            bg-dark shadow-lg">Investments</h3>
          <h5 class="text-white"><b>Firms Offering Investemnts</b></h5>
          <div class="row p-3
                    mb-2
                    ">
               <div class="col-sm-6 p-3
                    mb-2
                    bg-dark shadow-lg" v-for="firms in allOffers['stackHolders']['holders']" :key="firms">
                    {{ firms }}
                </div>
          </div>
          <h5 class="text-white"><b>Return of Investemnts</b></h5>
          <div class="row p-3
                    mb-2
                     ">
               <div class="col-sm-4 p-3
                    mb-2
                    bg-dark shadow-lg">
                    1 year  <p id="money">+{{ allOffers['stackHolders']['returns']['1'] }}%</p>
                </div>
                <div class="col-sm-4 p-3
                    mb-2
                    bg-dark shadow-lg">
                    3 years <p id="money">+{{ allOffers['stackHolders']['returns']['3'] }}%</p>
                </div>
                <div class="col-sm-4 p-3
                    mb-2
                    bg-dark shadow-lg">
                    5 years <p id="money">+{{ allOffers['stackHolders']['returns']['5'] }}%</p>
                </div>
          </div>
        </div>
      </div>
      <div
        class="row p-3 mb-2 bg-dark text-white shadow-lg"
        v-if="allOffers['InvestmentHolders'] != null"
      >
        <div
          class="
            col-sm-3
            d-flex
            justify-content-center
            p-3
            mb-2
            bg-dark
            text-white
            shadow-lg
          "
        >
          <img
            src="../assets/images/invest1.png"
            style="height: 200px;"
          />
        </div>
        <div class="col-sm-9">
          <h3 class="text-white d-flex justify-content-left p-3
            mb-2
            bg-dark shadow-lg">Loan Offers</h3>
          <h5 class="text-white"><b>Firms Offering Loans</b></h5>
          <div class="row p-3
                    mb-2
                    ">
               <div class="col-sm-6 p-3
                    mb-2
                    bg-dark shadow-lg" v-for="firms in allOffers['InvestmentHolders']['holders']" :key="firms">
                    {{ firms }}
                </div>
          </div>
          <h5 class="text-white"><b>Loan Cap</b></h5>
          <div class="row p-3
                    mb-2
                     ">
               <div class="col-sm-4 p-3
                    mb-2
                    bg-dark shadow-lg"
                    v-for="loans in allOffers['InvestmentHolders']['loan']" :key="loans">
                    <p>Max Amount: <b id="money">{{loans['maxAmount']}}</b></p>
                    <p>Intrest: <b id="money">{{loans['intrest']}}</b></p>
                </div>
          </div>
        </div>
      </div>
      <div
        class="row p-3 mb-2 bg-dark text-white shadow-lg"
        v-if="allOffers['IPO'] != null"
      >
        <div
          class="
            col-sm-3
            d-flex
            justify-content-center
            p-3
            mb-2
            bg-dark
            text-white
            shadow-lg
          "
        >
          <img
            src="../assets/images/ipo.png"
            style="height: 200px;"
          />
        </div>
        <div class="col-sm-9">
          <h3 class="text-white d-flex justify-content-left p-3
            mb-2
            bg-dark shadow-lg">IPO Offerings</h3>
          <h5 class="text-white"><b>Firms Offers IPO Shares</b></h5>
          <div class="row p-3
                    mb-2
                    ">
               <div class="col-sm-6 p-3
                    mb-2
                    bg-dark shadow-lg" v-for="firms in allOffers['IPO']['Companies']" :key="firms">
                    {{ firms }}
                </div>
          </div>
        </div>
      </div>
      <div
        class="row p-3 mb-2 bg-dark text-white shadow-lg"
        v-if="allOffers['ShareHoldings'] != null"
      >
        <div
          class="
            col-sm-3
            d-flex
            justify-content-center
            p-3
            mb-2
            bg-dark
            text-white
            shadow-lg
          "
        >
          <img
            src="../assets/images/growth.png"
          />
        </div>
        <div class="col-sm-9">
          <h3 class="text-white d-flex justify-content-left p-3
            mb-2
            bg-dark shadow-lg">Shares to Invest</h3>
          <h5 class="text-white"><b>Firms Offering Shares less than market price</b></h5>
          <div class="row p-3
                    mb-2
                    ">
               <div class="col-sm-6 p-3
                    mb-2
                    bg-dark shadow-lg" v-for="firms in allOffers['ShareHoldings']['Companies']" :key="firms">
                    {{ firms }}
                </div>
          </div>
          <h5 class="text-white"><b>Share Quantity</b></h5>
          <div class="row p-3
                    mb-2
                     ">
               <div class="col-sm-4 p-3
                    mb-2
                    bg-dark shadow-lg"
                    v-for="share in allOffers['ShareHoldings']['offers']" :key="share">
                    <p>Shares: <b id="money">{{share}}</b></p>
                </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { onBeforeMount } from "@vue/runtime-core";
import { WealthScoreOffers , AllOffersOffered} from "../utils/stackHolders";
import RadialProgressBar from "vue-radial-progress";
export default {
  name: "Personlization",
  components: {
    RadialProgressBar,
  },
  setup() {
    const store = useStore();
    const userData = computed(() => store.state.userData);
    const allConsents = ref([]);
    const consentTypes = ref([]);
    const consentTypesMap = ref(new Map());
    const fiTypes = ref([]);
    const fiTypesMap = ref(new Map());
    const fetchType = ref([]);
    const fetchTypeMap = ref(new Map());
    const consentMode = ref([]);
    const consentModeMap = ref(new Map());
    const offers = ref(null);
    const allOffers = ref(null);
    const wealthScore = ref(userData.value.wealthScore);

    onBeforeMount(() => {
      const userId = userData.value["id"];
      const wealthScore = userData.value["wealthScore"];
      console.log(wealthScore);
      offers.value = WealthScoreOffers(wealthScore);
      allOffers.value = AllOffersOffered;
      console.log(allOffers);
      console.log(offers);
      store.dispatch("getAllConsents", userId).then((response) => {
        allConsents.value = response.data;
        console.log("all consensts {}", response.data);
        allConsents.value.forEach((consent) => {
          consentTypes.value = consentTypes.value.concat(
            consent["consentTypes"]
          );
          fiTypes.value = fiTypes.value.concat(consent["fiTypes"]);
          consentMode.value.push(consent["consentMode"]);
          fetchType.value.push(consent["fetchType"]);
          fetchTypeMap.value.set(
            consent["fetchType"],
            fetchTypeMap.value.get(consent["fetchType"])
              ? fetchTypeMap.value.get(consent["fetchType"]) + 1
              : 1
          );
          consentModeMap.value.set(
            consent["consentMode"],
            consentModeMap.value.get(consent["consentMode"])
              ? consentModeMap.value.get(consent["consentMode"]) + 1
              : 1
          );
        });
        for (const cT of consentTypes.value) {
          consentTypesMap.value.set(
            cT,
            consentTypesMap.value.get(cT)
              ? consentTypesMap.value.get(cT) + 1
              : 1
          );
        }
        for (const fT of fiTypes.value) {
          fiTypesMap.value.set(
            fT,
            fiTypesMap.value.get(fT) ? fiTypesMap.value.get(fT) + 1 : 1
          );
        }
      });
    });

    return {
      consentTypesMap,
      fiTypesMap,
      consentModeMap,
      fetchTypeMap,
      allConsents,
      offers,
      wealthScore,
      allOffers
    };
  },
};
</script>

<style scoped>
#header {
  color: white;
  background-color: rgb(9, 36, 109);
  word-spacing: 5px;
  border-radius: 10px;
  font-weight: bold;
}

#text-color {
  background-color: #0e0e1b00;
  color: white;
}

.table-bordered {
  border: 1px solid #9e9e22;
  margin-top: 20px;
}
#money{
    color: rgb(78, 226, 115);
}

img {
    height: 200px;
}
@media only screen and (max-width: 700px){ 
   img {
    width: 100px;
  }

}
</style>