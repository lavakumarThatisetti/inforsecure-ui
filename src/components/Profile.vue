<template>
  <div class="container">
    <div class="main-body">
          <div class="gutters-sm">
            <div class="col-*">
              <div class="card shadow-lg p-3 mb-5 bg-white rounded">
                <div class="card-body" id="boxshadow" >
                  <div class="d-flex flex-column align-items-center text-center">
                       <h5>Wealth Score</h5>
                       <radial-progress-bar :diameter="200"
                                            :completed-steps="wealthScore"
                                            :total-steps="1000"
                                            :strokeWidth="20"
                                            :innerStrokeWidth="20"
                                             startColor="#00FF00"
                                             stopColor="#1E90FF">
                        <p><b>{{wealthScore}} points</b></p>
                        </radial-progress-bar>
                    <div class="mt-3">
                      <h4>{{userName}}</h4>
                      <p class="text-secondary mb-1"><i class="fas fa-envelope"></i> {{email}}</p>
                      <p class="text-muted font-size-sm"><i class="fas fa-phone"></i> {{phoneNo}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-*">
              <form @submit.prevent="updateProfile()" class="signin-form">
              <div class="card mb-3  shadow-lg p-3 mb-5 bg-white rounded">
                <div class="card-body">
                  <h5 class="card-title">Profile Info <i class="fas fa-info-circle"></i></h5>
                  <div class="row shadow-sm p-3 mb-5 bg-white rounded">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                     {{firstName}} {{lastName}}
                    </div>
                  </div>
                  <div class="row shadow-sm p-3 mb-5 bg-white rounded" v-if="!editProfile">
                    <div class="col-sm-3">
                      <h6 class="mb-0">FirstName</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                     {{firstName}}
                    </div>
                  </div>
                  <div class="form-group mb-3" v-if="editProfile">
                    <label class="label" for="name">FirstName</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="FirstName"
                      v-model="firstName"
                      required
                    />
                  </div>
                  <div class="row shadow-sm p-3 mb-5 bg-white rounded" v-if="!editProfile">
                    <div class="col-sm-3">
                      <h6 class="mb-0">LastName</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {{lastName}}
                    </div>
                  </div>
                  <div class="form-group mb-3" v-if="editProfile">
                    <label class="label" for="name">LastName</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="LastName"
                      v-model="lastName"
                      required
                    />
                  </div>
                  <div class="row shadow-sm p-3 mb-5 bg-white rounded" v-if="!editProfile">
                    <div class="col-sm-3">
                      <h6 class="mb-0">UserName</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {{userName}}
                    </div>
                  </div>
                  <div class="form-group mb-3" v-if="editProfile">
                    <label class="label" for="name">userName</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="userName"
                      v-model="userName"
                      required
                    />
                  </div>
                  <div class="row shadow-sm p-3 mb-5 bg-white rounded" v-if="!editProfile">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Mobile No</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {{phoneNo}}
                    </div>
                  </div>
                  <div class="form-group mb-3" v-if="editProfile">
                    <label class="label" for="name">PhoneNo</label>
                    <input
                      type="number"
                      class="form-control"
                      placeholder="phoneNo"
                      v-model="phoneNo"
                      required
                    />
                  </div>
                  <div class="row">
                    <div class="col-sm-12" v-if="!editProfile">
                      <button type="button" class="btn-outline-primary btn-lg btn-block" @click="editProfile = !editProfile"><i class="fas fa-user-edit"></i> Edit Profile</button>
                    </div>
                     <div class="col-sm-12 btn-group" v-if="editProfile">
                      <button type="submit" class="btn btn-lg resetBtn">
                        Save Profile
                      </button>
                      <button type="button" class="btn btn-secondary btn-lg" @click="editProfile = !editProfile">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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
import { onBeforeMount } from "@vue/runtime-core";
import RadialProgressBar from 'vue-radial-progress'
export default {
  name: "Profile",
  components:{
      RadialProgressBar
  },
  setup() {
    const store = useStore();
    const userData = computed(() => store.state.userData);
    const userName = ref(userData.value.userName);
    const firstName = ref(userData.value.firstName);
    const lastName = ref(userData.value.lastName);
    const phoneNo = ref(userData.value.phoneNo);
    const wealthScore = ref(userData.value.wealthScore);
    const editProfile = ref(false);
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
    const updateProfile = () => {
      editProfile.value = !editProfile.value
      console.log("Data to update ",data)
      const data = {
        userId: userData.value.id,
        user: {
          userName: userName.value,
          firstName: firstName.value,
          lastName: lastName.value,
          phoneNo: phoneNo.value,
          email: userData.value.email,
          wealthScore: wealthScore.value
        },
      };
      store.dispatch("updateUser", data).then(response =>{
        wealthScore.value = response.data['wealthScore']
      });
    };
    return {
      userName,
      firstName,
      lastName,
      phoneNo,
      wealthScore,
      email: userData.value.email,
      updateProfile,
      editProfile
    };
  },
};
</script>

<style lang="css" scoped>
.resetBtn {
  background-color: rgb(9, 36, 109);
  border-radius: 20px;
  color: white;
}
.resetBtn button {
  color: white;
  font-weight: bold;
}
.card {
  width: 100%;
}
.progress {
    width: 150px;
    height: 150px !important;
    float: left;
    line-height: 150px;
    background: none;
    margin: 20px;
    box-shadow: none;
    position: relative
}

.progress:after {
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 12px solid #fff;
    position: absolute;
    top: 0;
    left: 0
}

.progress>span {
    width: 50%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    z-index: 1
}

.progress .progress-left {
    left: 0
}

.progress .progress-bar {
    width: 100%;
    height: 100%;
    background: none;
    border-width: 12px;
    border-style: solid;
    position: absolute;
    top: 0
}

.progress .progress-left .progress-bar {
    left: 100%;
    border-top-right-radius: 80px;
    border-bottom-right-radius: 80px;
    border-left: 0;
    -webkit-transform-origin: center left;
    transform-origin: center left
}

.progress .progress-right {
    right: 0
}

.progress .progress-right .progress-bar {
    left: -100%;
    border-top-left-radius: 80px;
    border-bottom-left-radius: 80px;
    border-right: 0;
    -webkit-transform-origin: center right;
    transform-origin: center right;
    animation: loading-1 1.8s linear forwards
}

.progress .progress-value {
    width: 90%;
    height: 90%;
    border-radius: 50%;
    background: #000;
    font-size: 24px;
    color: #fff;
    line-height: 135px;
    text-align: center;
    position: absolute;
    top: 5%;
    left: 5%
}

.progress.blue .progress-bar {
    border-color: #049dff
}

.progress.blue .progress-left .progress-bar {
    animation: loading-2 1.5s linear forwards 1.8s
}

@keyframes loading-1 {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    100% {
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg)
    }
}

@keyframes loading-2 {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    100% {
        -webkit-transform: rotate(144deg);
        transform: rotate(144deg)
    }
}

@keyframes loading-3 {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    100% {
        -webkit-transform: rotate(135deg);
        transform: rotate(135deg)
    }
}
</style>