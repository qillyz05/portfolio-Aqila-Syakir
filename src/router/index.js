import { createRouter, createWebHistory } from 'vue-router'

// contoh halaman (pakai komponen yang sudah ada)
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'

const routes = [
  { path: '/', component: Hero },
  { path: '/about', component: About }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router