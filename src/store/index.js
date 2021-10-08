import User from '../apis/User';
import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import Consent from '../apis/Consent';

const getDefaultState = () => {
  return {
    userData: {},
    consentData:{},
    consentResp:{},
    fiData: [],
    allFiData :[],
    top10Users: [],
    allConsents:[]
  }
}

export default createStore({

  
  state: getDefaultState(),
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
        SET_ALL_CONSENT_DATA: (state,payload) => state.allConsents = payload,
        // FI DATA
        SET_FIDATA: (state,payload) => state.fiData= payload,
        SET_ALL_FIDATA: (state,payload) => state.allFiData.push(payload),

        TOP_10_USERS: (state,payload) => state.top10Users= payload,

        RESET_STATE (state) {
          Object.assign(state, getDefaultState())
        }
  },
  actions: {
    // USER DATA ACTIVITY
    async addUser({ commit }, user) {
       console.log(JSON.stringify(user));
       await User.postUser(user)
      .then( (response) => {
        console.log(response.data);
        commit('ADD_USER', response.data);
        return response;
      });
    },
    async updateUser({ commit }, { userId, user}) {
      console.log(JSON.stringify(user));
      return User.updateUser(userId, user).then((response)=>{
        console.log(response.data);
        commit('UPDATE_USER', response.data);
        return response;
      });
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
      commit('ADD_CONSENT', consent);
      return Consent.postConsent(consent)
            .then( (response) => {
              console.log(response.data);
              commit('ADD_CONSENT_RESP', response.data);
              commit('SET_ALL_CONSENT_DATA', consent);
              return response;
            });
   },

   async getAllConsents({commit},userId){
      return Consent.getAllConsentsOfUser(userId)
              .then((response) =>{
                console.log(response.data);
                commit('SET_ALL_CONSENT_DATA',response.data)
                return response
              })
   },

    // FETCH FI DATA
    async getFiData({commit},{userId,consentId, fromDate, toDate }){
      return Consent.getFiData(userId,consentId,fromDate,toDate)
      .then((response) =>{
        console.log(response.data);
        commit('SET_FIDATA', response.data);
        commit('SET_ALL_FIDATA', response.data);
        return response;
      })
    },

    async getTop10Users({commit}){
      return User.getTop10Users()
      .then((response)=>{
        commit('TOP_10_USERS',response.data)
        return response;
      })
    },

    resetState ({ commit }) {
      commit('RESET_STATE')
    },



  },
  modules: {

  }
})
