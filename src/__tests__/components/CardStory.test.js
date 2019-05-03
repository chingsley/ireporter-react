import React from 'react';
import { shallow } from 'enzyme';
import CardStory from '../../components/CardStory';

describe('Render report card', () => {
  const wrapper = shallow(
    <CardStory
      src="someImageSrc.png"
      title="the story title"
    />,
  );

  it('should render with the correct elements', () => {
    expect(wrapper.find('div.card').exists()).toBe(true);
    expect(wrapper.find('.link-on-black').exists()).toBe(true);
  });
});
