import { createRouter, createWebHistory } from 'vue-router'
import EventsListView from '../views/EventsListView.vue'
import AboutView from '../views/AboutView.vue'
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
      component: EventsListView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
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
