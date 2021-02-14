// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import DefaultLayout from "~/layouts/Default.vue";
import Vuex from "vuex";
import stSocials from "./store/st-socials";
import contacts from "./store/contacts";
import AdaptiveImage from "./components/ui/AdaptiveImage";

export default function(Vue, { appOptions }) {
  Vue.use(Vuex);
  Vue.component("Layout", DefaultLayout);
  Vue.component("AdaptiveImage", AdaptiveImage);
  appOptions.store = new Vuex.Store({
    modules: {
      stSocials,
      contacts
    }
  });
}
