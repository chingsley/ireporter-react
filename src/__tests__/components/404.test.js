import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NotFound from '../../components/404';


describe('Test the report form', () => {
  const shallowWrapper = shallow(<NotFound />);
  it('should render with the correct elements', () => {
    expect(toJson(shallowWrapper)).toMatchSnapshot();
  });
});
