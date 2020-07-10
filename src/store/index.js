import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataCov: "",
    //   confirmed: "",
    //   recovered: "",
    //   deaths: "",
    // },
  },

  actions: {
    async getDataCovid({ commit }) {
      const res = await axios.get("https://covid19.mathdro.id/api");
      commit("updateDataCovid", res.data);
    },
  },
  mutations: {
    updateDataCovid(state, dataCovid) {
      state.dataCov = dataCovid;
    },
  },
  getters: {
    dataCov(state) {
      return state.dataCov;
    },
  },
});
