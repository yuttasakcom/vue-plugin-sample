import Vue from "vue";

import MyPlugin from "./vue-pluing-sample";

Vue.use(MyPlugin);

Vue.component("myPlugin", {});

new Vue();
