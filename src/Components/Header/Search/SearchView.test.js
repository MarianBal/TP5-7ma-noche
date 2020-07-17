import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SearchView from './SearchView';

configure({ adapter: new Adapter() });

describe('SearchView', () => {
  const randomFn = jest.fn();

  it('SearchView renders ', () => {
    mount(<SearchView />);
  });

  it('SearchView renders correctly', () => {
    const wrapper = shallow(<SearchView handleSearchText={randomFn} />);

    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('i').length).toBe(2);
    expect(wrapper.find('.fa-search').length).toBe(1);
    expect(wrapper.find('.fa-bars').length).toBe(1);
    expect(wrapper.find('input').length).toBe(1);
  });
});
