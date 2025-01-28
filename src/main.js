import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// vue boostrap CLI BootstrapVue
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import { BootstrapVue3 } from 'bootstrap-vue-3';

const app = createApp(App);

// Use the BootstrapVue3 plugin
app.use(BootstrapVue3);

// Use the Vue router
app.use(router);

// Mount the app
app.mount('#app');