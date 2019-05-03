import React from 'react';
import { shallow } from 'enzyme';
import CardSingleReport from '../../components/CardSingleReport';

describe('Test report card', () => {
  const wrapper = shallow(
    <CardSingleReport
      imgSrc="https://res.cloudinary.com/dmx0a3nqi/image/upload/v1556371216/sklohp88foupfeuw1yyi.jpg"
      status="rejected"
    />,
  );

  it('should render with the correct elements', () => {
    expect(wrapper.find('div.report-card-wrapper').exists()).toBe(true);
    expect(wrapper.find('div.report-card-wrapper__card').exists()).toBe(true);
    expect(wrapper.find('span.delete-report').exists()).toBe(true);
    expect(wrapper.find('div.report-card-wrapper__card--img-container').exists()).toBe(true);
    expect(wrapper.find('img.report-card-wrapper__card--img-container-img').exists()).toBe(true);
    expect(wrapper.find('div.report-card-wrapper__card--content-container').exists()).toBe(true);
    expect(wrapper.find('p.report-card-wrapper__card--content-container-comment').exists()).toBe(true);
    expect(wrapper.find('.btn-edit').exists()).toBe(true);
  });
});
