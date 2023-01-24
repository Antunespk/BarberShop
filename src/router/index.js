import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
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
      path: '/UseAdd',
      name: 'UserAdd',
      component: () => import('../views/UserAdd.vue')
    }

  ]
});

export default router;
