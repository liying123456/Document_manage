import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ArticleIndex from '@/views/article/show-articlelist'
import Layout from '@/layout/index'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld,
    // },
    {
      path: '/article', 
      component: Layout,
      children: [
        { 
          path: '/article/index',
          name: 'article',
          component: ArticleIndex,
        }
      ]
  }
  ]
});