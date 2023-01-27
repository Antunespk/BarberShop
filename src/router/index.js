import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // {
    //   path: '/emphasis',
    //   name: 'emphasis',
    //   component: () => import('../views/Emphasis.vue')
    // },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/UsuarioAdd',
      name: 'UsuarioAdd',
      component: () => import('../views/UsuarioAdd.vue')
    }
  ]
})

export default router
