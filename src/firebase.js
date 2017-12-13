import firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyDqT0tRK1bGFDO3j9QKFVu8xGz1Bew0ThA',
  authDomain: 'portal-project-e7abb.firebaseapp.com',
  databaseURL: 'https://portal-project-e7abb.firebaseio.com',
  projectId: 'portal-project-e7abb',
  storageBucket: 'portal-project-e7abb.appspot.com',
  messagingSenderId: '718998209470'
}
firebase.initializeApp(config)

export const db = firebase.firestore()
