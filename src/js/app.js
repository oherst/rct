import Vue from 'vue';
import Vuex from 'vuex';
import store from './store'
import App from '../components/app.vue';

new Vue({
  store,
  el: '#app',
  render: h => h(App)
});

store.dispatch('getLineup');
