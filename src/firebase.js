import firebase from 'firebase'
import 'firebase/firestore'

firebase.initializeApp(process.env.firebaseConfig)

export const db = firebase.firestore()
