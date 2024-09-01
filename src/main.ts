import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

import 'primeicons/primeicons.css'
import './styles/_global.scss'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.mount('#app')
