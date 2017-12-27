import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Signup from '@/pages/Signup'
import Profile from '@/pages/Profile'
import ProfileDetail from '@/pages/ProfileDetail'
import ProfileEdit from '@/pages/ProfileEdit'
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
      name: 'Profile',
      component: Profile,
      meta: {
        requiresAuth: true,
      },
      children: [
        { path: ':id', component: ProfileDetail },
        {
          path: ':id/edit',
          component: ProfileEdit,
          beforeEnter (to, from, next) {
            const routeId = to.params.id
            const currentUser = Auth.auth.currentUser
            if (routeId !== currentUser.uid) {
              next(`/profile/${routeId}`)
            } else {
              next()
            }
          },
        },
      ],
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
  const currentUser = Auth.auth.currentUser
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
