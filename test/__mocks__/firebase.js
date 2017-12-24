
const firebase = jest.genMockFromModule('firebase')

const ref = jest.fn(() => {
  return {
    child: jest.fn(() => {
      return ref
    }),
    update: jest.fn(() => {
      console.log('Called update')
      return Promise.resolve()
    }),
  }
})

const user = {
  uid: 'testid',
  email: 'test@test.com',
}

firebase.initializeApp = jest.fn()
firebase.auth = jest.fn(() => {
  return {
    signInWithPopup: () => {
      return Promise.resolve({ user })
    },
    signInWithEmailAndPassword: () => {
      return Promise.resolve(user)
    },
    createUserWithEmailAndPassword: () => {
      return Promise.resolve(user)
    },
  }
})
firebase.auth.GoogleAuthProvider = jest.fn()
firebase.auth.GithubAuthProvider = jest.fn()

firebase.firestore = jest.fn()

module.exports = firebase
