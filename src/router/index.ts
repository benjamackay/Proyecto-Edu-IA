import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutUs from '@/views/AboutUs.vue'
import HowWorks from '@/views/HowWorks.vue'
import ServicesView from '@/views/ServicesView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/nosotros',
    name: 'nosotros',
    component: AboutUs
  },
  {
    path: '/servicios',
    name: 'servicios',
    component: ServicesView
  },
  {
    path: '/funcionamiento',
    name: 'funcionamiento',
    component: HowWorks
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
