/* eslint-disable no-multiple-empty-lines */
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { FormAuth } from '../../components/FormAuth';

describe('Test login/signup form', () => {
  const props = {
    authorise: jest.fn(),
  };
  const mountWrapper = mount(<FormAuth {...props} />);
  it('should allow users fill the form', () => {
    expect(toJson(mountWrapper)).toMatchSnapshot();
    // console.log(mountWrapper.state());
    // const { mountWrapper } = wrap();
    // console.log(mountWrapper.find('#email').debug());
    // updateInput(form, 'input[name="email"]', 'kc.eneja@gmaiml.com');
    // updateInput(form, 'input[name="password"]', 'guessmypass');
    // expect(wrapper.state('email')).toEqual('kc.eneja@gmaiml.com');
    // expect(wrapper.state('password')).toEqual('guessmypass');
  });
  it('should allow users fill the form', () => {
    mountWrapper.find('#email').simulate('change', { target: { value: 'kc.eneja@gmail.com' } });
    mountWrapper.find('#password').simulate('change', { target: { value: 'user-password' } });
    mountWrapper.find('#firstname').simulate('change', { target: { value: 'kingsley' } });
    mountWrapper.find('#lastname').simulate('change', { target: { value: 'eneja' } });
    mountWrapper.find('#othernames').simulate('change', { target: { value: 'john' } });
    mountWrapper.find('#username').simulate('change', { target: { value: 'john' } });
    mountWrapper.find('#phonenumber').simulate('change', { target: { value: '080365603994' } });
    mountWrapper.find('#adminSecret').simulate('change', { target: { value: 'super-secret-password' } });
    expect(mountWrapper.state().email).toEqual('kc.eneja@gmail.com');
    expect(mountWrapper.state().password).toEqual('user-password');
    expect(mountWrapper.state().firstname).toEqual('kingsley');
    expect(mountWrapper.state().lastname).toEqual('eneja');
    expect(mountWrapper.state().othernames).toEqual('john');
    expect(mountWrapper.state().username).toEqual('john');
    expect(mountWrapper.state().phoneNumber).toEqual('080365603994');
    expect(mountWrapper.state().adminSecret).toEqual('super-secret-password');
  });
  it('should allow users fill the form', async () => {
    await mountWrapper.instance().onSubmit({ preventDefault: jest.fn() });
    expect(props.authorise).toHaveBeenCalled();
  });
});
