import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ThirdView from '../views/ThirdView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    },
    {
      path: '/third-view',
      name: 'third-view',
      component: ThirdView
    }
  ]
});

export default router;

// the documentation's setup is different
// In this example we replace the following:
// documentation version
// const router = VueRouter.createRouter()

// example verison
// const router = createRouter()

// documentation version also defines a const variable routes and assigns an array of values
// whereas this example just puts the value directly within the routes property

// documentation version
// const routes = [
//   {path: , component},
//   {path: , component}
// ]

// const router = VueRouter.createRouter({
//   history: VueRoter.createWebHistory()
//   routes,
// })

// Line 47: routes is equal to the const variable routes defined on Line 40.

// example version does not do that.
