import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('../pages/home.vue')
    }
  ]
});

export default router;