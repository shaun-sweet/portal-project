import { shallow } from 'vue-test-utils'
import Footer from '@/containers/Footer.vue'

describe('Footer', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(Footer)
  })
  it('should render the Footer correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
