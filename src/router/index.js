// Composables
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      title: '番茄鐘｜首頁'
    }
  },
  {
    path: '/list',
    component: () => import('@/views/ListView.vue'),
    meta: {
      title: '番茄鐘｜事項'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

router.afterEach((to, from) => {
  document.title = to.meta.title
})

export default router
