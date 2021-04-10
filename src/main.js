import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from 'axios'
import VueAxios from 'vue-axios'
// import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import bootstrap_vue from 'bootstrap-vue/dist/bootstrap-vue.css'

createApp(App).use(VueAxios, axios).use(store).use(router).use(bootstrap).use(bootstrap_vue).mount("#app");
