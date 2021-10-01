import User from '../apis/User';
import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate';

export default createStore({

  
  state: {
    userData: {},
    transactions: []

  },
  plugins: [createPersistedState()],
  getters:{
      getUser(state){
        return state.userData;
      }
  },
  mutations: {
        ADD_USER: (state,payload) => state.userData = payload,
        SET_USER: (state,payload) => state.userData = payload,
        GET_USER: (state,payload) => state.userData = payload,
        UPDATE_USER: (state,payload) => state.userData = payload,
  },
  actions: {
    async addUser({ commit }, user) {
       console.log(JSON.stringify(user));
       await User.postUser(user)
      .then( (response) => {
        console.log(response.data);
        commit('ADD_USER', response.data);
      });
    },
    async updateUser({ commit }, { userId, user}) {
      console.log(JSON.stringify(user));
      const response = await User.updateUser(userId, user);
      console.log(response.data);
      commit('UPDATE_USER', response.data);
    },
    async getUser({ commit }, userId) {
      const response = await User.getUser(userId);
      console.log(response.data);
      commit('GET_USER', response.data);
    },
    async setUser({ commit }, email) {
      const response =  await User.getUserByEmail(email);
      console.log(response.data);
      commit('SET_USER', response.data);
    },

  },
  modules: {

  }
})
