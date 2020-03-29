import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import LogoView from './LogoView';

configure({ adapter: new Adapter() });

const randomFn = jest.fn();

describe('LogoView', () => {
  it('LogoView renders ', () => {
    mount(<LogoView />);
  });

  it('LogoView renders correctly', () => {
    const wrapper = shallow(<LogoView goBackToMain={randomFn} />);

    expect(wrapper.find('img').length).toBe(1);
  });
});
