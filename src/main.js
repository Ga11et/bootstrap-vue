import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { createApp } from 'vue'
import BaseApp from './BaseApp.vue'
import { createPinia } from 'pinia'
import router from '@/router/router'
import BaseHeading from '@/components/BaseHeading.vue'

const pinia = createPinia()

const app = createApp(BaseApp).use(pinia).use(router)

app.component('BaseHeading', BaseHeading)

app.mount('#app')
