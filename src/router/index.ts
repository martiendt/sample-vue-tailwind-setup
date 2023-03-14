import { createRouter, createWebHistory } from 'vue-router'

const routes = {
  path: '/',
  component: () => import('../layouts/app-layout.vue'),
  children: [
    {
      path: '/',
      component: () => import('../pages/home.vue'),
    },
    {
      path: '/signin',
      component: () => import('../pages/signin.vue'),
    },
    {
      path: '/signup',
      component: () => import('../pages/signup.vue'),
    },
  ]
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [ routes ],
})

export default router