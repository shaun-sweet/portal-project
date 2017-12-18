import { shallow } from 'vue-test-utils'
import Header from '@/containers/Header.vue'

describe('Header', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(Header)
  })
  it('should render the Header correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
