<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div
        class="
          col-11 col-sm-9 col-md-7 col-lg-6 col-xl-5
          text-center
          p-0
          mt-3
          mb-2
          shadow-sm p-3 mb-9 bg-white rounded
        "
      >
        <div class="card px-0 pt-4 pb-0 mt-3 mb-3 shadow-sm p-3 mb-5 bg-white rounded">
          <h2 id="heading">Provide</h2>
          <p>Fill all form field to go to next step</p>
          <form id="msform">
            <!-- progressbar -->
            <ul id="progressbar">
              <li class="active" id="account"><strong>Account</strong></li>
              <li id="personal"><strong>Personal</strong></li>
              <li id="payment"><strong>Image</strong></li>
              <li id="confirm"><strong>Finish</strong></li>
            </ul>
            <div class="progress">
              <div
                class="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <br />
            <!-- fieldsets -->
            <fieldset>
              <div class="form-group form-card">
                <div class="row">
                  <div class="col-7">
                    <h2 class="fs-title">Account Consent Information</h2>
                  </div>
                  <div class="col-5">
                    <h2 class="steps">Step 1 - 4</h2>
                  </div>
                </div>
                <div class="box">
                <label class="fieldlabels">Linked PhoneNo</label>
                <input type="number" class="form-control"  name="phoneNo" v-model="phoneNo" placeholder="PhoneNo" />
                </div>
                 <div class="box">
                <label class="fieldlabels">Start Date</label>
                <input type="date" class="form-control"  name="from" v-model="fiDateRangeFrom" placeholder="Enter Start Date" />
                </div>
                <div class="box">
                <label class="fieldlabels">End Date</label>
                <input type="date" class="form-control"  name="from" v-model="fiDateRangeto" placeholder="Enter End Date" />
                </div>
                <div class="box">
                    <label class="fieldlabels">Consent Mode</label>
                    <select v-model="consentMode" class="select mb-3">
                        <option value="VIEW" selected>View</option>
                        <option value="STORE">Store</option>
                        <option value="QUERY">Query</option>
                        <option value="STREAM">Stream</option>
                    </select>
                 </div>
              </div>
             <button type="button" name="next" class="next action-button">Next &nbsp;<i class="fas fa-chevron-circle-right"></i></button>
            </fieldset>
            <fieldset>
              <div class="form-group form-card">
                <div class="row">
                  <div class="col-7">
                    <h2 class="fs-title">Financial Request Information </h2>
                  </div>
                  <div class="col-5">
                    <h2 class="steps">Step 2 - 4</h2>
                  </div>
                </div>
                <div class="box">
                    <label class="fieldlabels" for="fetchType">Fetch Type</label>
                    <select v-model="fetchType" class="select  mb-3" id="fetchType">
                        <option selected value="ONETIME">ONETIME</option>
                        <option value="PERIODIC">PERIODIC</option>
                    </select>
                </div>
                 <div class="box">
                    <label class="fieldlabels" for="consentTypes">Consent Types</label>
                    <input v-on:keyup="addConsentType" list="consents" v-model="fetchConsentType" class="col-sm-12 datalist custom-select-sm">
                    <datalist id="consents">
                        <option value="TRANSACTIONS">Transactions</option>
                        <option value="PROFILE">Profile</option>
                        <option value="SUMMARY">Summary</option>
                    </datalist>
                     <div v-for="cType in consentTypes" :key="cType">
                        <div class="filtype shadow-lg p-2 mb-1 rounded">{{cType}} &nbsp;<i class="fas fa-times" @click="deleteCtype(cType)"></i></div>
                    </div>
                </div>
                 <div class="box">
                    <label class="fieldlabels" for="dummy"></label>
                 </div>
                 <div class="box">
                    <label class="fieldlabels" for="FiType">Financial Information Type</label>
                    <input v-on:keyup="addFilType" list="fis" v-model="fetchFiType" class="col-sm-12 datalist custom-select-sm">
                    <datalist id="fis">
                        <option value="DEPOSIT">Deposit</option>
                        <option value="TERM_DEPOSIT">Term Deposit</option>
                        <option value="RECURRING_DEPOSIT">Recurring Deposit</option>
                        <option value="CREDIT_CARD">Credit Card</option>
                        <option value="CD">Current Deposits</option>
                        <option value="IDR">Indian Depository Receipt</option>
                        <option value="INSURANCE_POLICIES">Insurnce Policies</option>
                        <option value="ULIP">Unit Linked Insurance Plan</option>
                        <option value="EPF">Employees Provident Fund</option>
                        <option value="PPF">Public Provident Fund</option>
                        <option value="BONDS">Bonds</option>
                        <option value="MUTUAL_FUNDS">Mutual funds</option>
                        <option value="DEBENTURES">Debentures</option>
                        <option value="ETF">Exchange Traded Fund</option>
                        <option value="NPS">National Pension Scheme</option>
                        <option value="GOVT_SECURITIES">Government Securities</option>
                        <option value="REIT">Real Estate Investment Trust</option>
                        <option value="INVIT">Infrastructure Investment Trust</option>
                        <option value="AIF">Alternative Investment Fund</option>
                    </datalist>
                     <div v-for="filType in fiTypes" :key="filType">
                        <div class="filtype shadow-lg p-2 mb-1 rounded">{{filType}} &nbsp;<i class="fas fa-times" @click="deleteFiType(filType)"></i></div>
                    </div>
                </div>
              </div>
               <div class="box">
                    <label class="fieldlabels" for="dummy"></label>
               </div>
              <button type="button" name="next" class="next action-button">Next &nbsp;<i class="fas fa-chevron-circle-right"></i></button>
              <button type="button" name="previous" class="previous action-button-previous"><i class="fas fa-chevron-circle-left"></i> &nbsp;Previous</button>
            </fieldset>
            <fieldset>
              <div class="form-card">
                <div class="row">
                  <div class="col-7">
                    <h2 class="fs-title">Image Upload:</h2>
                  </div>
                  <div class="col-5">
                    <h2 class="steps">Step 3 - 4</h2>
                  </div>
                </div>
                <label class="fieldlabels">Upload Your Photo:</label>
                <input type="file" name="pic" accept="image/*" />
                <label class="fieldlabels">Upload Signature Photo:</label>
                <input type="file" name="pic" accept="image/*" />
              </div>
              <input
                type="sumbit"
                name="next"
                class="next action-button"
                value="Submit"
              />
              <input
                type="button"
                name="previous"
                class="previous action-button-previous"
                value="Previous"
              />
            </fieldset>
            <fieldset>
              <div class="form-card">
                <div class="row">
                  <div class="col-7">
                    <h2 class="fs-title">Finish:</h2>
                  </div>
                  <div class="col-5">
                    <h2 class="steps">Step 4 - 4</h2>
                  </div>
                </div>
                <br /><br />
                <h2 class="purple-text text-center">
                  <strong>SUCCESS !</strong>
                </h2>
                <br />
                <div class="row justify-content-center">
                  <div class="col-3">
                    <img
                      src="https://i.imgur.com/GwStPmg.png"
                      class="fit-image"
                    />
                  </div>
                </div>
                <br /><br />
                <div class="row justify-content-center">
                  <div class="col-7 text-center">
                    <h5 class="purple-text text-center">
                      You Have Successfully Signed Up
                    </h5>
                  </div>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import { firebase } from "../firebase/firebaseInit.js";
import { onBeforeMount, onMounted } from "@vue/runtime-core";
import $ from 'jquery';
export default {
  name: "Consent",
  setup() {
    const store = useStore();
    const userData = computed(() => store.state.userData);
    const phoneNo = ref(userData.value.phoneNo);
    const fiDateRangeFrom = ref(null);
    const fiDateRangeto = ref(null);
    const consentMode = ref("VIEW");
    const fetchType = ref("ONETIME");
    const fiTypes = ref([]);
    const consentTypes = ref([]);
    var fiMap = {};
    var coMap = {};
    const fetchFiType = ref(null);
    const fetchConsentType = ref(null);
    onMounted(() => {
      $(document).ready(function () {
        var current_fs, next_fs, previous_fs; //fieldsets
        var opacity;
        var current = 1;
        var steps = $("fieldset").length;

        setProgressBar(current);

        $(".next").click(function () {
          current_fs = $(this).parent();
          next_fs = $(this).parent().next();

          //Add Class Active
          $("#progressbar li")
            .eq($("fieldset").index(next_fs))
            .addClass("active");

          //show the next fieldset
          next_fs.show();
          //hide the current fieldset with style
          current_fs.animate(
            { opacity: 0 },
            {
              step: function (now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                  display: "none",
                  position: "relative",
                });
                next_fs.css({ opacity: opacity });
              },
              duration: 500,
            }
          );
          setProgressBar(++current);
        });

        $(".previous").click(function () {
          current_fs = $(this).parent();
          previous_fs = $(this).parent().prev();

          //Remove class active
          $("#progressbar li")
            .eq($("fieldset").index(current_fs))
            .removeClass("active");

          //show the previous fieldset
          previous_fs.show();

          //hide the current fieldset with style
          current_fs.animate(
            { opacity: 0 },
            {
              step: function (now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                  display: "none",
                  position: "relative",
                });
                previous_fs.css({ opacity: opacity });
              },
              duration: 500,
            }
          );
          setProgressBar(--current);
        });

        function setProgressBar(curStep) {
          var percent = parseFloat(100 / steps) * curStep;
          percent = percent.toFixed();
          $(".progress-bar").css("width", percent + "%");
        }
      });
    }),
      onBeforeMount(() => {
        if (userData == null) {
          firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              console.log(user);
              store.dispatch("setUser", user.email);
            } else {
              console.log(user, " error");
              store.dispatch("setUser", null);
            }
          });
        }
      });
    const addFilType =() =>{
            console.log(fiMap)
            if(!( fetchFiType.value in fiMap)) {
                    fiMap[fetchFiType.value] = true;
                    fiTypes.value.push(fetchFiType.value)
            }
            fetchFiType.value=""
    }
    const deleteFiType = (value) => {
            fiTypes.value.splice(fiTypes.value.indexOf(value), 1);
            delete fiMap[value];
    }
    const addConsentType = () =>{
            console.log(coMap)
            if(!( fetchConsentType.value in coMap)) {
                    coMap[fetchConsentType.value] = true;
                    consentTypes.value.push(fetchConsentType.value)
            }
            fetchConsentType.value=""
    }
    const deleteCtype = (value) =>{
         consentTypes.value.splice(consentTypes.value.indexOf(value), 1);
         delete coMap[value];
    }
    const sendConsent = () => {
      const consentReqData = {

        fiTypes: fiTypes.value,  
        FIDataRange :{
           from: "",
           to: ""
        },
        phoneNumber: phoneNo, 
        Purpose: {
          code: "101",
          refUri: "https://api.rebit.org.in/aa/purpose/101.xml",
          text: "Wealth management service",
          Category: {
            type: "Personal Finance",
          },
        },
      };
      const status = store.dispatch("saveConsent", consentReqData);
      console.log(status);
    };
    return {
      sendConsent,
      phoneNo,
      fiDateRangeFrom,
      fiDateRangeto,
      consentMode,
      fetchType,
      fetchFiType,
      addFilType,
      deleteFiType,
      fiTypes,
      fetchConsentType,
      addConsentType,
      deleteCtype,
      consentTypes

    };
  },
};
</script>

<style lang="css" scoped>
@import url("https://use.fontawesome.com/releases/v5.15.0/css/all.css");
*,
*::before,
*::after {
  box-sizing: border-box;
}
#heading {
  text-transform: uppercase;
  color: #673ab7;
  font-weight: normal;
}

#msform {
  text-align: center;
  position: relative;
  margin-top: 20px;
}

#msform fieldset {
  background: white;
  border: 0 none;
  border-radius: 0.5rem;
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding-bottom: 20px;
  position: relative;
}

.form-card {
  text-align: left;
}

#msform fieldset:not(:first-of-type) {
  display: none;
}
#msform input:focus,
#msform textarea:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  border: 1px solid rgb(9, 36, 109);
  outline-width: 0;
}

#msform .action-button {
  width: 100px;
  background: rgb(9, 36, 109);
  font-weight: bold;
  color: white;
  border: 0 none;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 5px;
  margin: 10px 0px 10px 5px;
  float: right;
}

#msform .action-button:hover,
#msform .action-button:focus {
  background-color: rgb(9, 36, 109);
}

#msform .action-button-previous {
  width: 120px;
  background: #616161;
  font-weight: bold;
  color: white;
  border: 0 none;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 5px;
  margin: 10px 5px 10px 0px;
  float: right;
}

#msform .action-button-previous:hover,
#msform .action-button-previous:focus {
  background-color: #000000;
}

.card {
  z-index: 0;
  border: none;
  position: relative;
}

.fs-title {
  font-size: 25px;
  color: rgb(9, 36, 109);
  margin-bottom: 15px;
  font-weight: normal;
  text-align: left;
}

.purple-text {
  color: rgb(9, 36, 109);
  font-weight: normal;
}

.steps {
  font-size: 25px;
  color: gray;
  margin-bottom: 10px;
  font-weight: normal;
  text-align: right;
}

.fieldlabels {
  color: rgb(9, 36, 109);
  font-size: 20px;
  text-align: left;
  letter-spacing: 1px;
}

#progressbar {
  margin-bottom: 30px;
  overflow: hidden;
  color: lightgrey;
}

#progressbar .active {
  color: rgb(9, 36, 109);
}

#progressbar li {
  list-style-type: none;
  font-size: 15px;
  width: 25%;
  float: left;
  position: relative;
  font-weight: 400;
}

#progressbar #account:before {
  font-family: "Font Awesome 5 free";
  content: "\f058";
}

#progressbar #personal:before {
  font-family: "Font Awesome 5 free";
  content: "\f007";
}

#progressbar #payment:before {
  font-family: "Font Awesome 5 free";
  content: "\f14a";
}

#progressbar #confirm:before {
  font-family: "Font Awesome 5 free";
  content: "\f1ea";
}

#progressbar li:before {
  width: 50px;
  height: 50px;
  line-height: 45px;
  display: block;
  font-size: 20px;
  color: #ffffff;
  background: lightgray;
  border-radius: 50%;
  margin: 0 auto 10px auto;
  padding: 2px;
}

#progressbar li:after {
  content: "";
  width: 100%;
  height: 2px;
  background: lightgray;
  position: absolute;
  left: 0;
  top: 25px;
  z-index: -1;
}

#progressbar li.active:before,
#progressbar li.active:after {
  background: rgb(9, 36, 109);
}

.progress {
  height: 20px;
}

.progress-bar {
  background-color: rgb(9, 36, 109);
}

.fit-image {
  width: 100%;
  object-fit: cover;
}
.box .select {
  background-color: rgb(9, 36, 109);
  color: white;
  padding: 12px;
  width: 100%;
  border-radius: 10px;
  font-size: 20px;
  /* box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2); */
  -webkit-appearance: button;
  appearance: button;
  outline: none;
}
.box::before {
  content: "\f13a";
  font-family: FontAwesome;
  top: 0;
  right: 0;
  text-align: center;
  font-size: 28px;
  line-height: 45px;
  color: rgba(255, 255, 255, 0.5);
  background-color: rgba(255, 255, 255, 0.1);
  pointer-events: none;
}

.box:hover::before {
  color: rgba(255, 255, 255, 0.6);
  background-color: rgba(255, 255, 255, 0.2);
}

.box select option {
  padding: 30px;
}
.btnbox{
    text-align: center;
    align-items: center;

}
.filtype{
    float: left;
    padding: 0px;
    margin: 5px;
    color: white;
    background-color:rgb(0, 0, 0);
}
.datalist{
    border-radius: 5px;
    padding: 12px;
}
</style>