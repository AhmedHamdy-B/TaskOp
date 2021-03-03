import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    pranksCategories: [],
    ideasData: []
  },
  mutations: {
    SET_Categories(state, pranks) {
      state.pranksCategories = pranks
    },
    SET_IDEAS(state, ideas) {
      state.ideasData = ideas
    }
  },
  actions: {
    loadPranks({ commit }) {
      axios
        .get('https://t0u4i52ro7.execute-api.us-east-1.amazonaws.com/api/v1/category?limit=10&page=1')
        .then(response => {
          let Categories = response.data.data.splice(0, 3)
          console.log(response.data);
          commit('SET_Categories', Categories)
        })
        .catch(err => {
          console.log(err);
        })
    },
    loadIdeas({ commit }) {
      axios
        .get('https://t0u4i52ro7.execute-api.us-east-1.amazonaws.com/api/v1/prank-idea?limit=10&page=1')
        .then(response => {
          let ideasData = response.data.data
          console.log(response.data);

          commit('SET_IDEAS', ideasData)
        })
        .catch(err => {
          console.log(err);
        })
    },
  },
  modules: {
    
  }
})
