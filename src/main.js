import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueDragscroll from "vue-dragscroll";
import VModal from "vue-js-modal";
import "@/assets/bootstrap-grid.css";

// Firebase app is always required and must be first
//import firebase from "firebase/app";
// Add additional services that you want to use
import "firebase/auth";
// import "firebase/database";
import "firebase/storage";
import "firebase/firestore";
// import 'firebase/messaging'
// import 'firebase/functions'

// Flamelink app is always required
//import flamelink from "flamelink/app";
// Add additional modules that you want to use
import "flamelink/content";
import "flamelink/storage";

// import 'flamelink/settings'
// import 'flamelink/navigation'
// import 'flamelink/users'

import "./registerServiceWorker";



Vue.config.productionTip = false;
Vue.use(VueDragscroll);
Vue.use(VModal);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
