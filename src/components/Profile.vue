<template>
  <div class="container">
    <div class="main-body">
          <div class="gutters-sm">
            <div class="col-*">
              <div class="card shadow-lg p-3 mb-5 bg-white rounded">
                <div class="card-body" id="boxshadow" >
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="../assets/images/account.png" alt="Admin" class="rounded-circle" width="150">
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
export default {
  name: "Profile",
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
      const response = store.dispatch("updateUser", data);
      console.log("Data after update ",response)
      if (response.data !=null){
        wealthScore.value = response.data['wealthScore']
      }else{
        console.log("User updated failed")
      }
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
</style>