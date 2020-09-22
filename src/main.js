// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons'

import {
  faAddressBook,
  faBlog,
  faEnvelope,
  faBirthdayCake,
  faKey,
  faPhone,  
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { store } from "./store/index";

library.add(faAddressBook, faBlog, faEnvelope, faBirthdayCake, faKey, faPhone,faFacebook,faTwitter,faInstagram);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

const settings = {
  TInput: {
    classes:
      "bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full leading-normal",
    variants: {
      error:
        "text-red-600 bg-red-100 focus:outline-none focus:shadow-outline border border-red-300 rounded py-2 px-4 block w-full leading-normal placeholder-red-300",
      success:
        "text-green-600 bg-green-100 focus:outline-none focus:shadow-outline border border-green-300 rounded py-2 px-4 block w-full leading-normal placeholder-green-300",
      fun:
        "bg-orange-100 block border-2 border-orange-300 focus:border-orange-500 focus:outline-none leading-normal px-4 py-3 rounded-full shadow-inner w-full placeholder-orange-300"
    }
  }
};


/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
