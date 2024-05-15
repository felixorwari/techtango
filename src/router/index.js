import { createRouter, createWebHistory } from 'vue-router'
import EventsView from '../views/EventsView.vue'
import ContactView from '../views/ContactView.vue'
import PrivacyView from '../views/PrivacyView.vue'
import TermsView from '../views/TermsView.vue'
import UserView from '../views/UserView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'events',
      component: EventsView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: PrivacyView
    },
    {
      path: '/terms',
      name: 'terms',
      component: TermsView
    },
    {
      path: '/user/events',
      name: 'user-events',
      component: UserView
    },
    {
      path: '/user/notifications',
      name: 'user-notifications',
      component: UserView
    },
    {
      path: '/user/profile',
      name: 'user-profile',
      component: UserView
    },
    {
      path: '/user/settings',
      name: 'user-settings',
      component: UserView
    }
  ]
})

export default router
