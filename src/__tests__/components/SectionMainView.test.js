import { shallow } from 'enzyme';
import React from 'react';
import SectionMainView from '../../components/SectionMainView';
// import { shallowWrap } from '../helpers/componentWrapper';

describe('SectionMainView component on the home page', () => {
  it('should render homepage correctly', () => {
    const wrapper = shallow(<SectionMainView />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain a section with class .main-section', () => {
    const wrapper = shallow(<SectionMainView />);
    expect(wrapper.find('.main-section').exists()).toBe(true);
  });
});
