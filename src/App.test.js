import React from 'react'
import { shallow } from 'enzyme/build'
import App from './App';
import Movies from './components/Movies/Movies';

let testName = "AppTest boundary"

describe("boundary", () => {
  it(`${testName} should mount App without crashing`, () => {
    const wrapper = shallow(<App />)
    expect(wrapper.getElements()).toMatchSnapshot();
    wrapper.unmount()
  })

  it(`${testName} should mount Movie without crashing`, () => {
    const wrapper = shallow(<Movies />)
    expect(wrapper.getElements()).toMatchSnapshot();
    wrapper.unmount()
  })

})