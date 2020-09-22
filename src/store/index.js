import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    user: null,
    loading: false,
    error: null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    }
  },
  actions: {
    getUser({ commit }) {
      commit("setLoading", true);
      fetch("https://randomuser.me/api", { mode: "cors" })
        .then(response => response.json())
        .then(data => {
          const results = data.results[0];
          const name = results.name.first + " " + results.name.last;
          const email = results.email;
          const src = results.picture.large;
          const city = results.location.city;
          const state = results.location.state;
          const phone = results.phone;
          const cell = results.cell;
          const dateOfBirth = results.dob.date;
          const age = results.dob.age;
          commit("setUser", {
            name: name,
            email: email,
            src: src,
            city: city,
            state: state,
            phone:phone,
            cell:cell,
            dateOfBirth:dateOfBirth,
            age:age
          });
          commit("setLoading", false);
        })
        .catch(error => {
          commit("setLoading", false);
          commit("setError", error);
        });
    }
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getLoading(state) {
      return state.loading;
    },
    getError(state) {
      return state.error;
    }
  }
});
