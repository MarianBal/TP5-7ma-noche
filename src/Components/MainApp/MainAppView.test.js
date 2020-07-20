import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MainAppView from './MainAppView';

configure({ adapter: new Adapter() });

describe('MainAppView', () => {
  it('MainAppView renders ', () => {
    mount(<MainAppView />);
  });

  it('ContentView renders correctly', () => {
    const wrapper = shallow(<MainAppView />);

    expect(wrapper.find('Fragment').length).toBe(1);
    expect(wrapper.find('HeaderView').length).toBe(1);
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('SideBarWrapper').length).toBe(1);
    expect(wrapper.find('ContentView').length).toBe(1);
  });
});
