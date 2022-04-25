import { createStore } from "vuex";
import { postModule } from "./postModule";
import axios from "axios";

export default createStore({
  state: {
    counter: 0,
    colorColor: "red",
  },
  mutations: {
    minusConuter(state, randomNumber) {
      state.counter -= randomNumber;
    },
    plusConuter(state, randomNumber) {
      state.counter += randomNumber;
    },
    setColorCode(state, newValue) {
      state.colorColor = newValue;
    },
  },
  actions: {
    plusConuter({ commit }) {
      axios(
        "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
      ).then((response) => {
        commit("plusConuter", response.data);
      });
    },
    minusConuter({ commit }) {
      axios(
        "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
      ).then((response) => {
        commit("minusConuter", response.data);
      });
    },
    setColorCode({ commit }, newValue) {
      commit("setColorCode", newValue);
    },
  },
  getters: {
    counterSquared(state) {
      return state.counter * state.counter;
    },
  },

  modules: {
    post: postModule,
  },
});
