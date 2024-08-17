import 'primeicons/primeicons.css'
import './assets/main.css'

import router from './routes'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App).use(router);
app.mount('#app');
