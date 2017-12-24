import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Signup from '@/pages/Signup'
import Profile from '@/pages/Profile'
import Messages from '@/pages/Messages'
import Projects from '@/pages/Projects'
import Secret from '@/pages/Secret'
import { Auth } from '@/firebase'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
    },
    {
      path: '/secret',
      name: 'Secret',
      component: Secret,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/profile',
      name: 'Home',
      component: Profile,
    },
    {
      path: '/messages',
      name: 'Home',
      component: Messages,
    },
    {
      path: '/projects',
      name: 'Home',
      component: Projects,
    },
  ],
})

router.beforeEach((to, from, next) => {
  let currentUser = Auth.auth.currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !currentUser) {
    console.log('no user logged in')
    next('login')
  } else {
    // no auth required
    next()
  }
})

export default router
