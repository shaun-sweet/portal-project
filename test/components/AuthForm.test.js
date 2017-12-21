import { shallow, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'
// import * as types from '@/store/mutation-types'
// import mutations from '@/store/mutations'
import AuthForm from '@/components/AuthForm.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('AuthForm', () => {
  let wrapper
  let store
  let state
  // let mutations
  // let saveSpy
  // let clearSpy
  const user = {
    uid: 'testid',
    email: 'test@test.com',
  }

  beforeEach(() => {
    // saveSpy = jest.fn()
    // clearSpy = jest.fn()
    state = {}
    store = new Vuex.Store({
      state,
      // mutations: {
      //   [types.SAVE_CURRENT_USER]: saveSpy,
      //   [types.RESET_TO_INITIAL_STATE]: clearSpy,
      // },
    })
    const $firestore = () => {}
    const $auth = () => {
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
    }
    wrapper = shallow(AuthForm, {
      store,
      localVue,
      mocks: {
        $firestore,
        $auth,
      },
    })
  })
  // it('should render the AuthForm correctly', () => {
  //   expect(wrapper.element).toMatchSnapshot()
  // })
  describe('When formType = "login"', () => {
    it('should call attemptLogin when button is clicked', () => {
      wrapper.setProps({ formType: 'login' })
      const spy = jest.fn(() => {
        return Promise.resolve(user)
      })
      wrapper.vm.attemptLogin = spy
      wrapper.update()
      const submitButton = wrapper.findAll('button').at(0)
      submitButton.trigger('click')
      expect(spy).toHaveBeenCalled()
    })
  })
  describe('When formType = "signup"', () => {
    it('should call attemptSignupWithPassword when button is clicked', () => {
      wrapper.setProps({ formType: 'signup' })
      const spy = jest.fn(() => {
        return Promise.resolve(user)
      })
      wrapper.vm.attemptSignupWithPassword = spy
      wrapper.update()
      const submitButton = wrapper.findAll('button').at(0)
      submitButton.trigger('click')
      expect(spy).toHaveBeenCalled()
    })
  })
})
