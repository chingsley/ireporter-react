import React from 'react';
import { shallow, mount } from 'enzyme';
// import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Header from '../../components/Header';

const wrap = () => {
  const props = {
    history: {
      push: jest.fn(),
      location: {
        pathname: '',
      },
    },

    className: '',
    isLoggedIn: false,
    isAdmin: false,
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

  const shallowWrapper = shallow(<Header {...props} />);

  const mountWrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <Header {...props} />
      </MemoryRouter>
    </Provider>,
  );
  return { shallowWrapper, mountWrapper };
};


describe('Test the header component', () => {
  const { mountWrapper: wrapper } = wrap();
  it('should render with the correct elements', () => {
    // expect(wrapper.find('.header ').exists()).toBe(true);
    expect(wrapper.find('div.header-inner-wrapper').exists()).toBe(true);
    expect(wrapper.find('.header-logo').exists()).toBe(true);
    expect(wrapper.find('ul.header-ul').exists()).toBe(true);
    expect(wrapper.find('li.header-ul__li').exists()).toBe(true);
    expect(wrapper.find('.header-NavLink').exists()).toBe(true);
    // expect(wrapper.find('input.report-form__input').exists()).toBe(true);
    // expect(wrapper.find('textarea.report-form__input-textarea').exists()).toBe(true);
    // expect(wrapper.find('button.report-form__button').exists()).toBe(true);
  });
});
