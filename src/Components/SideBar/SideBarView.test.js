import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SideBarView from './SideBarView';
import { sidebarOptions } from './helper';

configure({ adapter: new Adapter() });

describe('SideBarView', () => {
  it('SideBarView renders ', () => {
    mount(<SideBarView sidebarOptions={sidebarOptions} />);
  });
});

describe('SideBarView renders correctly', () => {
  it('LogoView renders correctly', () => {
    const wrapper = shallow(<SideBarView sidebarOptions={sidebarOptions} />);
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('ul').length).toBe(1);
    expect(wrapper.find('li').length).toBe(4);
    expect(wrapper.find('svg').length).toBe(4);
    expect(wrapper.find('p').length).toBe(4);
  });
});
