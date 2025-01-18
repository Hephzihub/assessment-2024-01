import './assets/main.css'
import 'vue-final-modal/style.css'

import { createApp } from 'vue'
import { createVfm } from 'vue-final-modal'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App);

app.use(createPinia())
app.use(createVfm())

app.mount('#app')
