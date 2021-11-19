import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/layout/index';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/article', 
      component: Layout,
      children: [
        { 
          path: '/article/index',
          name: 'Article',
          component: () => import('@/views/article/show-articlelist'),
        }
      ],
  }
  ]
});