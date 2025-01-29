import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoodsView from '@/views/FoodsView.vue'
import FoodDetailView from '@/views/FoodDetailView.vue'
import KeranjangView from '@/views/KeranjangView.vue'
import PesananSuksesView from '@/views/PesananSuksesView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/menu',
    name: 'Foods',
    component: FoodsView
  },
  {
    path: '/menu/:id',
    name: 'FoodDetail',
    component: FoodDetailView
  },
  {
    path: '/keranjang',
    name: 'Keranjang',
    component: KeranjangView
  },
  {
    path: '/pesanan-sukses',
    name: 'PesananSukses',
    component: PesananSuksesView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
