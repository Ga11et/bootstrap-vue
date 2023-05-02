import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/main/compoents/dashboard/Dashboard.vue'),
  },
  {
    path: '/dashboard',
    component: () => import('../views/main/compoents/dashboard/Dashboard.vue'),
  },
  { path: '/alerts', component: () => import('../views/main/compoents/alerts/Alerts.vue') },
  {
    path: '/accordion',
    component: () => import('../views/main/compoents/accordion/Accordion.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
