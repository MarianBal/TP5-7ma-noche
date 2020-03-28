import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';

configure({ adapter: new Adapter() });

describe('App', () => {
  it('App renders ', () => {
    mount(<App />);
  });

  it('App renders correctly', () => {
    const wrapper = shallow(<App />);

    console.log(wrapper.debug());
    expect(wrapper.find('MainAppView').length).toBe(1);
  });
});
