<template>
  <section class="ftco-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="login-wrap p-4 p-lg-5">
          <div class="d-flex">
            <div class="w-100">
              <h3 class="mb-4">Password Reset</h3>
            </div>
          </div>
          <form @submit.prevent="ResetPassword" class="signin-form">
            <div class="form-group mb-3">
              <label class="label" for="name">Email</label>
              <input
                type="email"
                class="form-control"
                placeholder="email"
                v-model="email"
                required
              />
            </div>
            <div class="form-group resetBtn">
              <button
                type="submit"
                class="form-control btn submit px-3"
              >
                Send Reset Link
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import { firebase } from "../firebase/firebaseInit.js";
export default {
  setup() {
    const email = ref("");
    const ResetPassword = () => {
      firebase
        .auth()
        .sendPasswordResetEmail(email.value)
        .then((data) => console.log(data))
        .catch((err) => alert(err.message));
    };
    return {
      email,
      ResetPassword,
    };
  },
};
</script>
<style scoped>
.resetBtn{
    background-color: rgb(2, 4, 10);
    border-radius: 20px;
    color: white;
}
.resetBtn button{
    color: white;
    font-weight: bold;
}
</style>