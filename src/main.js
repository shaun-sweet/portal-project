import Vue from 'vue'
import App from './containers/App'
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
new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
