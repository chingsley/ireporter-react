import React from 'react';
import { shallow, mount } from 'enzyme';
// import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import FormAuth from '../../components/FormAuth';

const wrap = () => {
  const props = {
    history: {
      push: jest.fn(),
      location: {
        pathname: '',
      },
    },

    authorise: jest.fn(),
    isLoggedIn: false,
    fetching: false,
    formType: 'signup',
  };

  const mockStore = configureStore([thunk]);

  const store = mockStore({
    auth: {
      isLoggedIn: true,
      user: {},
    },
    fetchStatus: {
      fetching: false,
      errMessage: '',
    },
    report: {
      report: {},
    },
  });

  const shallowWrapper = shallow(<FormAuth {...props} />);

  const mountWrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <FormAuth {...props} />
      </MemoryRouter>
    </Provider>,
  );
  return { shallowWrapper, mountWrapper };
};


describe('Test login/signup form', () => {
  // const props = {
  //   authorise: jest.fn(),
  //   formType: 'signup',
  //   isLoggedIn: false,
  //   fetching: false,
  //   history: { push: jest.fn() },
  // };
  // const updateInput = (wrapper, instance, newValue) => {
  //   const input = wrapper.find(instance);
  //   input.simulate('change', {
  //     target: { value: newValue },
  //   });
  // };
  // const wrapper = shallow(
  //   <FormAuth {...props} />,
  // );
  const { mountWrapper: wrapper } = wrap();

  // it('should allow users fill the form', () => {
  //   const form = wrapper.find('form');
  //   console.log(form);
  //   updateInput(form, 'input[name="email"]', 'kc.eneja@gmaiml.com');
  //   updateInput(form, 'input[name="password"]', 'guessmypass');

  //   expect(wrapper.state('email')).toEqual('kc.eneja@gmaiml.com');
  //   expect(wrapper.state('password')).toEqual('guessmypass');
  // });
  it('should render with the correct elements', () => {
    expect(wrapper.find('.container__form-input').exists()).toBe(true);
    expect(wrapper.find('button.container__form-btn').exists()).toBe(true);
  });
});
