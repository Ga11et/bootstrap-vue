import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/main/compoents/dashboard/Dashboard.vue'),
  },
  {
    path: '/Dashboard',
    component: () => import('../views/main/compoents/dashboard/Dashboard.vue'),
  },
  { path: '/alerts', component: () => import('../views/main/compoents/alerts/Alerts.vue') },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
