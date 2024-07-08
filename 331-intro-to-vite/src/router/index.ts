import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventsListView.vue'
import AboutView from '../views/AboutView.vue'
import StudentView from '@/views/StudentView.vue'
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
    },
    {
      path: '/student',
      name: 'student',
      component: StudentView
    }
  ]
})

export default router
