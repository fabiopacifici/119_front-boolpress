import { createWebHistory, createRouter } from 'vue-router'


import AppHome from "./views/AppHome.vue";
import AppBlog from "./views/AppBlog.vue";
import SinglePost from "./views/SinglePost.vue";
import AppAbout from "./views/AppAbout.vue";
import AppContacts from "./views/AppContacts.vue";



const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome
    },
    {
      path: '/about',
      name: 'about',
      component: AppAbout
    },
    {
      path: '/blog',
      name: 'blog',
      component: AppBlog
    },
    {
      path: '/blog/:id',
      name: 'singlePost',
      component: SinglePost
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: AppContacts
    }
  ]
})


export default router;