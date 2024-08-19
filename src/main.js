import 'primeicons/primeicons.css'
import './assets/main.css'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import router from './routes'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
app.use(router);
app.use(Toast);
app.mount('#app');
