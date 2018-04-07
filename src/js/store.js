import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const apiUrl = 'http://lineups.dev.fantech.io';

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  state: {
    lineup: {}
  },

  getters: {
    formation: state => {
      return state.lineup.formation;
    },
    players: state => {
      return state.lineup.players;
    },
    team: state => {
      return state.lineup.team;
    }
  },

  mutations: {
    saveLineup(state, payload) {
      state.lineup = {...state.lineup, ...payload};
    }
  },

  actions: {
    getLineup({commit}) {
      axios.get(apiUrl)
      .then((response) => {
        commit('saveLineup', response.data);
      })
      .catch(function (error) {
        console.log(`Couldn't get lineup from API: ${error}`);
      });
    }
  }
});

export default store
