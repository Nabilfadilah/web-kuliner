import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css';

// vue boostrap CLI BootstrapVue
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import { BootstrapVue3 } from 'bootstrap-vue-3';

import './assets/css/main.css';

// vue notification
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css'

const app = createApp(App);

// Use the BootstrapVue3 plugin
app.use(BootstrapVue3);

// Use VueToast
app.use(VueToast);

// Use the Vue router
app.use(router);

// Mount the app
app.mount('#app');