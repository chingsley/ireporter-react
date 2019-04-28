import React from 'react';
import { shallow } from 'enzyme';
import Logo from '../../components/Logo';

describe('Test the logo component', () => {
  const wrapper = shallow(
    <Logo
      className="customized-log"
    />,
  );

  it('should render with the correct elements', () => {
    expect(wrapper.find('.logo__h1').exists()).toBe(true);
    expect(wrapper.find('.logo__h1--link-on-black').exists()).toBe(true);
    expect(wrapper.find('.logo__h1--link-on-black__span-i').exists()).toBe(true);
    expect(wrapper.find('.logo__h1--link-on-black__span-repa').exists()).toBe(true);
  });
});
