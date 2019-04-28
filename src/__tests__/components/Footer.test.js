import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../components/Footer';

describe('Test the footer component', () => {
  const wrapper = shallow(
    <Footer />,
  );

  it('should render with the correct elements', () => {
    expect(wrapper.find('footer.footer').exists()).toBe(true);
    expect(wrapper.find('div.footer-logo-box').exists()).toBe(true);
    expect(wrapper.find('ul.footer-content__left--ul').exists()).toBe(true);
    expect(wrapper.find('li.footer-ul-li').exists()).toBe(true);
    expect(wrapper.find('div.footer-content__right').exists()).toBe(true);
    expect(wrapper.find('p.footer-content__right-copyright').exists()).toBe(true);
    expect(wrapper.find('.footer-link').exists()).toBe(true);
  });
});
