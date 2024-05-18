import { createRouter, createWebHistory } from 'vue-router'
import EventsList from '@/views/event/ListView.vue'
import EventLayout from '@/views/event/LayoutView.vue'
import EventDetails from '@/views/event/DetailsView.vue'
import EventRegister from '@/views/event/RegisterView.vue'
import EventEdit from '@/views/event/EditView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import PrivacyView from '@/views/PrivacyView.vue'
import TermsView from '@/views/TermsView.vue'
import UserView from '@/views/user/ProfileView.vue'
import events from '@/stores/events.json'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      // always scroll to top after .5s delay
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ left: 0, top: 0 })
        }, 500)
      })
    }
  },
  routes: [
    {
      path: '/',
      name: 'events-list',
      component: EventsList
    },
    {
      path: '/event/:id',
      name: 'event-layout',
      props: true,
      component: EventLayout,
      children: [
        {
          path: '',
          name: 'event-details',
          component: EventDetails
        },
        {
          path: 'register',
          name: 'event-register',
          component: EventRegister
        },
        {
          path: 'edit',
          name: 'event-edit',
          component: EventEdit
        },
      ],
      beforeEnter(to, from) {
        const exists = events.find(
          data => data.id === parseInt(to.params.id)
        )

        if (!exists) return {
          name: 'not-found',
          params: { pathMatch: to.path.split('/').slice(1) },
          query: to.query,
          hash: to.hash
        }
      }
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
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFoundView.vue')
    }
  ]
})

export default router
