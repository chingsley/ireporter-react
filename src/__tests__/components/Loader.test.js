import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Loader from '../../components/Loader';


describe('Test the report form', () => {
  const shallowWrapper = shallow(<Loader />);
  it('should render with the correct elements', () => {
    expect(toJson(shallowWrapper)).toMatchSnapshot();
  });
});
