import Vue from "vue";
import App from "./App.vue";
import UiInstall from "./utils/ui-install";
import "@/assets/style/index.scss";

Vue.config.productionTip = false;
Vue.use(UiInstall);

new Vue({
  render: h => h(App)
}).$mount("#app");
