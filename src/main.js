import Vue from 'vue'
import App from './containers/App'
import store from './store'
import router from '@/router'
import { Firestore, Auth } from '@/firebase'
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
  console.log(Auth.auth.currentUser, user)
  if (user) {
    // set user id in vuex store
    renderApp()
  } else {
    // clear user id in vuex store, call logout action
    renderApp()
    // redirect to home
  }
})

// How I've done this with React.

// firebase.auth().onAuthStateChanged((user) => {
//   if (user){
//     store.dispatch(login(user.uid));
//     store.dispatch(expenseActions.startSetExpenses()).then(() => {
//       renderApp();
//       if(history.location.pathname === '/') {
//         history.push('/dashboard');
//       }
//     });
//   } else {
//     store.dispatch(logout());
//     renderApp();
//     history.push('/')
//   }
// });
