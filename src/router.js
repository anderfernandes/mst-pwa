import Vue                 from 'vue'
import Router              from 'vue-router'
import Home                from './views/Home.vue'
import EventShow           from './views/events/Show.vue'
import Pricing             from './views/Pricing.vue'
import OurShows            from './views/OurShows.vue'
import OurShowsShow        from './views/shows/Show.vue'
import Calendar            from './views/Calendar.vue'
import Constellations      from './views/Constellations.vue'
import ConstellationsShow from './views/constellations/Show.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path      : '/events/:id',
      name      : 'events.show',
      component : EventShow,
    },
    {
      path      : '/pricing',
      name      : 'pricing',
      component : Pricing,
    },
    {
      path      : '/our-shows',
      name      : 'our-shows',
      component : OurShows,
    },
    {
      path      : '/our-shows/:id',
      name      : 'our-shows.show',
      component : OurShowsShow,
    },
    {
      path      : '/calendar',
      name      : 'calendar',
      component : Calendar,
    },
    {
      path: '/constellations',
      name: 'constellations',
      component: Constellations,
    },
    {
      path: '/constellations/:id',
      name: 'constellations.show',
      component: ConstellationsShow
    }
  ]
})
