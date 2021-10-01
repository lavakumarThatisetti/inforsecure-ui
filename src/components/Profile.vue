<template>
  <section class="ftco-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="login-wrap p-4 p-lg-5">
          <div class="d-flex">
            <div class="w-100">
              <h3 class="mb-4">Profile Update</h3>
            </div>
          </div>
          <form @submit.prevent="updateProfile" class="signin-form">
            <div class="form-group mb-3">
              <label class="label" for="name">Email</label>
              <input
                type="email"
                class="form-control"
                v-model="email"
                readonly
              />
            </div>
            <div class="form-group mb-3">
              <label class="label" for="name">userName</label>
              <input
                type="text"
                class="form-control"
                placeholder="userName"
                v-model="userName"
                required
              />
            </div>
            <div class="form-group mb-3">
              <label class="label" for="name">FirstName</label>
              <input
                type="text"
                class="form-control"
                placeholder="FirstName"
                v-model="firstName"
                required
              />
            </div>
            <div class="form-group mb-3">
              <label class="label" for="name">LastName</label>
              <input
                type="text"
                class="form-control"
                placeholder="LastName"
                v-model="lastName"
                required
              />
            </div>
            <div class="form-group mb-3">
              <label class="label" for="name">PhoneNo</label>
              <input
                type="number"
                class="form-control"
                placeholder="phoneNo"
                v-model="phoneNo"
                required
              />
            </div>
            <div class="form-group resetBtn">
              <button type="submit" class="form-control btn btn-success btn-lg">
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {ref} from 'vue';
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import { firebase } from "../firebase/firebaseInit.js";
import { onBeforeMount } from "@vue/runtime-core";
export default {
  name: "Profile",
  setup() {
    const store = useStore();
    const userData = computed(() => store.state.userData);
    console.log(userData.value);
    const userName = ref(userData.value.userName);
    const firstName = ref(userData.value.firstName);
    const lastName = ref(userData.value.lastName);
    const phoneNo = ref(userData.value.phoneNo);
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
    const updateProfile = () =>{
        const data = {
            userId: userData.value.id,
            user: {
                    "userName":userName.value,
                    "firstName":firstName.value,
                    "lastName":lastName.value,
                    "phoneNo":phoneNo.value,
                    "email": userData.value.email 
            },
        };
        console.log(data);
        store.dispatch("updateUser", data);
    }
    return {
      userName,
      firstName,
      lastName,
      phoneNo,
      email: userData.value.email,
      updateProfile
    };
  },
};
</script>

<style lang="css" scoped>
.resetBtn{
     background-color: rgb(9, 36, 109);
    border-radius: 20px;
    color: white;
}
.resetBtn button{
    color: white;
    font-weight: bold;
}
</style>