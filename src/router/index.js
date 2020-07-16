import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  // {
  //   path: '/about',
  //   name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path: '/shipping',
    name: 'Shipping',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Shipping.vue')
  },
  {
    path: '/details',
    name: 'Details',
    component: () => import(/* webpackChunkName: "about" */ '../views/Details.vue')
    },
  {
  path: '/reviews',
  name: 'Reviews',
  component: () => import(/* webpackChunkName: "about" */ '../views/Reviews.vue')
    },
  {
  path: '/makeAReview',
  name: 'MakeAReview',
  component: () => import(/* webpackChunkName: "about" */ '../views/MakeAReview.vue')
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
