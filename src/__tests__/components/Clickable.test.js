import React from 'react';
import { shallow } from 'enzyme';
import Clickable from '../../components/Clickable';

describe('Test the custom button', () => {
  const wrapper = shallow(
    <Clickable text="Edit Report" className="btn-edit" />,
  );

  it('should render with the correct elements', () => {
    expect(wrapper.find('div.link-container').exists()).toBe(true);
    expect(wrapper.find('.link').exists()).toBe(true);
  });
});
