import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import HeaderView from './HeaderView';

configure({ adapter: new Adapter() });

describe('HeaderView', () => {
  it('HeaderView renders ', () => {
    mount(<HeaderView />);
  });

  it('LogoView renders correctly', () => {
    const wrapper = shallow(<HeaderView />);

    expect(wrapper.find('LogoWrapper').length).toBe(1);
    expect(wrapper.find('SearchWrapper').length).toBe(1);
  });
});
