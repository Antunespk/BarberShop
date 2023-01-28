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
      path: '/Login',
      name: 'login',
      component: () => import('../views/login.vue')
    },
    {
      path: '/CadastroPro',
      name: 'CadastroPro',
      component: () => import('../views/CadastroPro.vue')
    },
    {
      path: '/usuarioAdd',
      name: 'usuarioAdd',
      component: () => import('../views/usuarioAdd.vue')
    },
    {
      path: '/servico-cad',
      name: 'servico-cad',
      component: () => import('../views/servicoCadatro.vue')
    }
  ]
})

export default router
