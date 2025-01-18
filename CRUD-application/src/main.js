import './assets/main.css'
import 'vue-final-modal/style.css'
import 'vue3-toastify/dist/index.css';

import { createApp } from 'vue'
import { createVfm } from 'vue-final-modal'
import { createPinia } from 'pinia'
import Vue3Toasity from 'vue3-toastify';
import App from './App.vue'

const app = createApp(App);

app.use(createPinia())
app.use(createVfm())
app.use(Vue3Toasity, {
  autoClose: 3000,
  clearOnUrlChange: false
})

app.mount('#app')
