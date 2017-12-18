import { shallow } from 'vue-test-utils'
import Login from '@/pages/Login.vue'

describe('Login', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(Login)
  })
  it('should render the view correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
