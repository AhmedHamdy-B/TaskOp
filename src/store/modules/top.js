import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex, axios)

const state = {
  topViewed: []
};
const mutations = {
  SET_TOP(state, TopData) {
    state.topViewed = TopData
  }
};
// i used Async await in this file to show how I would use them, I thought you meant AsyncData
// the SSR Nuxt API but then I realized you want me to use the Async Await syntax
const actions = {
  async loadTop({ commit }) {
    await axios
      .get('https://t0u4i52ro7.execute-api.us-east-1.amazonaws.com/api/v1/prank-idea/top-performing-prank-calls?page=1&limit=10')
      .then(response => {
        let TopData = response.data.data
        console.log(response.data);
        commit('SET_TOP', TopData)
      })
      .catch(err => {
        console.log(err);
      })
  },
};
const getters = {
  TopViewedOP: state => {
    return state.topViewed
  }
}

export default {
  state,
  mutations,
  actions,
  getters
};
