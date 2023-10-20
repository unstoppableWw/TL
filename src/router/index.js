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
      component: () => import('../views/Tiku.vue'),
      beforeEnter: (to, from, next) => {
        // 检查是否有 token
        const token = localStorage.getItem('token');
        if (!token) {
          // 如果没有 token，可以弹出登录窗口或者跳转到登录页面
          // 例如，你可以使用一个登录模态框组件
          // 也可以使用路由跳转到登录页面
          // showModalLogin() 或者 next('/login')
          alert('请先登录');
        } else {
          // 如果有 token，继续路由跳转
          next();
        }
      }
    },
    {
      path: '/sucai',
      name: 'sucai',
      component: () => import('../views/Sucai.vue'),
      beforeEnter: (to, from, next) => {
        // 检查是否有 token
        const token = localStorage.getItem('token');
        if (!token) {
          // 如果没有 token，可以弹出登录窗口或者跳转到登录页面
          // 例如，你可以使用一个登录模态框组件
          // 也可以使用路由跳转到登录页面
          // showModalLogin() 或者 next('/login')
          alert('请先登录');
        } else {
          // 如果有 token，继续路由跳转
          next();
        }
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/newsdetail/:bookId',
      name: 'newsdetail',
      component: () => import('../views/NewsDetail.vue')
    },
    {
      path: '/questiondetail/:bookId',
      name: 'questiondetail',
      component: () => import('../views/QuestionDetail.vue')
    },
    {
      path: '/sucaidetail/:bookId',
      name: 'sucaidetail',
      component: () => import('../views/SucaiDetail.vue')
    },

    {
      path: '/us',
      name: 'us',
      component: () => import('../views/us.vue')
    },
  ]
})

export default router
