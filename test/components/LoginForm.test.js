import { shallow } from 'vue-test-utils'
import LoginForm from '@/components/LoginForm.vue'

describe('LoginForm', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(LoginForm)
  })
  it('should render the LoginForm correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  it('should call attemptLogin when button is clicked', () => {
    const spy = jest.fn()
    wrapper.vm.attemptLogin = spy
    wrapper.update()
    const submitButton = wrapper.findAll('button').at(0)
    submitButton.trigger('click')
    expect(spy).toHaveBeenCalled()
  })
})
