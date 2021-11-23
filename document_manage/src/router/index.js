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
          path: 'index',
          name: 'Article',
          component: () => import('@/views/article/show-articlelist'),
        },
        {
          path: "create", 
          name: "CreateArticle",
          component: () => import('@/views/article/create-article'),
        },
      ],
  }
  ]
});