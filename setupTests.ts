import { configure } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

beforeAll(function () {
  // console.log('ciao, sto partend')
})

afterAll(function () {
  // console.log('ciao, sto finendo')
})

configure({ adapter: new Adapter() })
