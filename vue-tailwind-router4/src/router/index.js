import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import GalleryView from '../views/GalleryView.vue';
import EventsView from '../views/EventsView.vue';
import SingleDateView from '../views/SingleDateView.vue';
import MoreInfoView from '../views/MoreInfoView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/photogallery',
      name: 'photogallery',
      component: GalleryView
    },
    {
      path: '/events',
      name: 'events',
      component: EventsView
    },
    {
      path: '/events/:day',
      name: 'event',
      component: SingleDateView
    },
    {
      path: '/event/:artist',
      name: 'artist',
      component: MoreInfoView
    }
    // {
    //   path: '/events/event/:artist',
    //   name: 'artist',
    //   component: MoreInfoView
    // }
  ]
});

export default router;
