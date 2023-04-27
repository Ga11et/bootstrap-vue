import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { createApp } from 'vue'
import BaseApp from './BaseApp.vue'
import { createPinia } from 'pinia'
import router from '@/router/router'

const pinia = createPinia()

createApp(BaseApp).use(pinia).use(router).mount('#app')
