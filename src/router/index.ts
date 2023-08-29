import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import thefilmDetailVue from '@/components/Films/thefilmDetail.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component:About
    },
    {
      path:'/film/:id',
      name:'filmDetail',
      component:thefilmDetailVue

    }
  ]
})

export default router
