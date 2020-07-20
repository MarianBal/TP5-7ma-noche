import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import HeroView from './HeroView';

configure({ adapter: new Adapter() });

describe('HeroView', () => {
  it('HeroView renders ', () => {
    mount(<HeroView />);
  });

  it('HeroView renders correctly', () => {
    const wrapper = shallow(<HeroView />);

    expect(wrapper.find('div').length).toBe(2);
    expect(wrapper.find('p').length).toBe(1);
  });
});
