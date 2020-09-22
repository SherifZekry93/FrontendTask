import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    user: null,
    loading: false
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    }
  },
  actions: {
    getUser({ commit }) {
      commit("setLoading", true);
      fetch("https://randomuser.me/api", { mode: "cors" })
        .then(response => response.json())
        .then(data => {
          const results = data.results[0];
          let name = results.name.first + " " + results.name.last;
          let email = results.email;
          let src = results.picture.large;
          let city = results.location.city;
          let state = results.location.state;
          commit("setUser", {
            name: name,
            email: email,
            src: src,
            city: city,
            state: state
          });
          commit("setLoading",falses)
        });
    }
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getLoading(state)
    {
        return state.loading
    }
  }
});
