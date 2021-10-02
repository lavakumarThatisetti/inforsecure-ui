import User from '../apis/User';
import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import Consent from '../apis/Consent';

export default createStore({

  
  state: {
    userData: {},
    consentData:{},
    consentResp:{},
    fiData: [],
    allFiData :[]
  },
  plugins: [createPersistedState()],
  getters:{
      getUser(state){
        return state.userData;
      },
      getConsent(state){
        return state.consentData;
      },
      getConsentResponse(state){
        return state.consentResp;
      },
      getFiData(state) {
        return state.fiData;
      },
      getAllFis(state){
        return state.allFiData;
      }
  },
  mutations: {
        ADD_USER: (state,payload) => state.userData = payload,
        SET_USER: (state,payload) => state.userData = payload,
        GET_USER: (state,payload) => state.userData = payload,
        UPDATE_USER: (state,payload) => state.userData = payload,
        // CONSENT DATA
        ADD_CONSENT: (state,payload) => state.consentData = payload,
        ADD_CONSENT_RESP: (state,payload) => state.consentResp = payload,
        // FI DATA
        SET_FIDATA: (state,payload) => state.fiData= payload,
        SET_ALL_FIDATA: (state,payload) => state.allFiData.push(payload)
  },
  actions: {
    // USER DATA ACTIVITY
    async addUser({ commit }, user) {
       console.log(JSON.stringify(user));
       await User.postUser(user)
      .then( (response) => {
        console.log(response.data);
        commit('ADD_USER', response.data);
        return response.status;
      });
    },
    async updateUser({ commit }, { userId, user}) {
      console.log(JSON.stringify(user));
      const response = await User.updateUser(userId, user);
      console.log(response.data);
      commit('UPDATE_USER', response.data);
      return response.status
    },
    async getUser({ commit }, userId) {
      const response = await User.getUser(userId);
      console.log(response.data);
      commit('GET_USER', response.data);
      return response.status;
    },
    async setUser({ commit }, email) {
      const response =  await User.getUserByEmail(email);
      console.log(response.data);
      commit('SET_USER', response.data);
      return response.status;
    },
    
    // CONSENT DATA ACTIVITY
    async saveConsent({ commit }, consent) {
      commit('ADD_CONSENT', JSON.stringify(consent));
      await Consent.postConsent(consent)
     .then( (response) => {
       console.log(response.data);
       commit('ADD_CONSENT_RESP', response.data);
       return response.status;
     });
   },

    // FETCH FI DATA
    async getFiData({commit},{consentId, fromDate, toDate }){
      await Consent.getFiData(consentId,fromDate,toDate)
      .then((response) =>{
        console.log(response.data);
        commit('SET_FIDATA', response.data);
        commit('SET_ALL_FIDATA', response.data);
      })
    }

  },
  modules: {

  }
})