import React from 'react';
//import ForgotPasswordView from './ForgotPasswordView';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import HeaderView from './HeaderView';

configure({ adapter: new Adapter() });

describe('HeaderView', () => {
  it('HeaderView renders ', () => {
    mount(<HeaderView />);
  });

  // it('ForgotPasswordView renders correctly', () => {
  //   const wrapper = shallow(
  //     <ForgotPasswordView
  //       forgotPasswordClasses={forgotPasswordClasses}
  //       buttonColors={forgotPasswordClasses}
  //       backToLogin={forgotFunction}
  //       handleChangeValue={forgotFunction}
  //       submit={forgotFunction}
  //       buttonsContainer={forgotPasswordClasses}
  //       alertText={forgotPasswordClasses}
  //     />
  //   );
  //   expect(wrapper.find('GenericButton').length).toBe(2);
  //   expect(wrapper.find('AvField').length).toBe(1);
  // });

  // it('ForgotPasswordView renders with a 422 as error prop ', () => {
  //   const error = 10002;

  //   const wrapper = shallow(
  //     <ForgotPasswordView
  //       forgotPasswordClasses={forgotPasswordClasses}
  //       buttonColors={forgotPasswordClasses}
  //       backToLogin={forgotFunction}
  //       handleChangeValue={forgotFunction}
  //       submit={forgotFunction}
  //       error={error}
  //       buttonsContainer={forgotPasswordClasses}
  //       alertText={forgotPasswordClasses}
  //     />
  //   );
  //   expect(wrapper.find('#error422').length).toBe(1);
  // });

  // it('ForgotPasswordView renders with a 500 as error prop ', () => {
  //   const error = 500;

  //   const wrapper = shallow(
  //     <ForgotPasswordView
  //       forgotPasswordClasses={forgotPasswordClasses}
  //       buttonColors={forgotPasswordClasses}
  //       backToLogin={forgotFunction}
  //       handleChangeValue={forgotFunction}
  //       submit={forgotFunction}
  //       error={error}
  //       buttonsContainer={forgotPasswordClasses}
  //       alertText={forgotPasswordClasses}
  //     />
  //   );
  //   expect(wrapper.find('#error500').length).toBe(1);
  // });
});
