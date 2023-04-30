import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { createApp } from 'vue'
import BaseApp from './BaseApp.vue'
import { createPinia } from 'pinia'
import router from '@/router/router'
import BaseHeading from '@/components/BaseHeading.vue'
import VueApexCharts from 'vue3-apexcharts'

const pinia = createPinia()

const app = createApp(BaseApp).use(pinia).use(router).use(VueApexCharts)

app.component('BaseHeading', BaseHeading)

app.mount('#app')
