import Vue from 'vue'
import App from './containers/App'
import store from './store'
import router from '@/router'
import { Firestore, Auth } from '@/firebase'
import { SAVE_CURRENT_USER, RESET_TO_INITIAL_STATE } from '@/store/mutation-types'
// import 'firebaseui/dist/firebaseui.css'
import '@/styles/variables.sass'
import '@/styles/layout.sass'
import 'bulma/bulma.sass'

Vue.config.productionTip = false

Vue.use(Firestore)
Vue.use(Auth)

/* eslint-disable no-new */
let hasRendered = false
const renderApp = () => {
  console.log(hasRendered)
  if (!hasRendered) {
    new Vue({
      el: '#app',
      router,
      store,
      render: h => h(App),
    })
    hasRendered = true
  }
}

Auth.auth.onAuthStateChanged((user) => {
  if (user) {
    renderApp()
    store.commit(SAVE_CURRENT_USER, user)
  } else {
    renderApp()
    store.commit(RESET_TO_INITIAL_STATE)
    router.push('/')
  }
})
