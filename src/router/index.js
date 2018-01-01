import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Signup from '@/pages/Signup'
import Profile from '@/pages/Profile'
import ProfileDetail from '@/pages/ProfileDetail'
import ProfileEdit from '@/pages/ProfileEdit'
import Messages from '@/pages/Messages'
import Projects from '@/containers/Projects'
import ProjectNew from '@/pages/ProjectNew'
import ProjectIndex from '@/pages/ProjectIndex'
import { auth } from '@/firebase'

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
            const userId = to.params.id
            const currentUser = auth.currentUser
            if (userId !== currentUser.uid) {
              return next(`/profile/${userId}`)
            }
            return next()
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
      name: 'Projects',
      component: Projects,
      children: [
        { path: '',
          name: 'ProjectIndex',
          component: ProjectIndex,
        },
        {
          path: 'new',
          name: 'ProjectNew',
          component: ProjectNew,
          meta: {
            requiresAuth: true,
          },
        },
      ],
    },
  ],
})

router.beforeEach((to, from, next) => {
  const currentUser = auth.currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !currentUser) {
    return next('login')
  } else {
    // no auth required
    return next()
  }
})

export default router
