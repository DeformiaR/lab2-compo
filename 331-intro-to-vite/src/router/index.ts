import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventsListView.vue'
import AboutView from '../views/AboutView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Event-List-view',
      component: EventListView
    },
    {
      path: '/about',
      name: 'about',

      component: AboutView
    }
  ]
})

export default router
