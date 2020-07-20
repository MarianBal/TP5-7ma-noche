import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ContentView from './ContentView';

configure({ adapter: new Adapter() });

describe('ContentView', () => {
  it('ContentView renders ', () => {
    mount(<ContentView />);
  });

  it('ContentView renders correctly', () => {
    const wrapper = shallow(<ContentView />);

    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('HeroView').length).toBe(1);
  });
});
