import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/main/components/dashboard/Dashboard.vue'),
  },
  {
    path: '/dashboard',
    component: () => import('../views/main/components/dashboard/Dashboard.vue'),
  },
  { path: '/alerts', component: () => import('../views/main/components/alerts/Alerts.vue') },
  {
    path: '/accordion',
    component: () => import('../views/main/components/accordion/Accordion.vue'),
  },
  {
    path: '/badges',
    component: () => import('../views/main/components/badges/Badges.vue'),
  },
  {
    path: '/breadcrumbs',
    component: () => import('../views/main/components/breadcrumbs/Breadcrumbs.vue'),
  },
  {
    path: '/buttons',
    component: () => import('../views/main/components/buttons/Buttons.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
