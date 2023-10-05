import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/tiku',
      name: 'tiku',
      component: () => import('../views/Tiku.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/newsdetail',
      name: 'newsdetail',
      component: () => import('../views/NewsDetail.vue')
    },
    {
      path: '/questiondetail',
      name: 'questiondetail',
      component: () => import('../views/QuestionDetail.vue')
    },
    {
      path: '/us',
      name: 'us',
      component: () => import('../views/us.vue')
    },
  ]
})

export default router
