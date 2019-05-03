import React from 'react';
import { shallow, mount } from 'enzyme';
// import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import FormReport from '../../components/FormReport';

const wrap = () => {
  const props = {
    history: {
      push: jest.fn(),
      location: {
        pathname: '',
      },
    },

    createReport: jest.fn(),
    isLoggedIn: false,
    fetching: false,
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

  const shallowWrapper = shallow(<FormReport {...props} />);

  const mountWrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <FormReport {...props} />
      </MemoryRouter>
    </Provider>,
  );
  return { shallowWrapper, mountWrapper };
};


describe('Test the report form', () => {
  const { mountWrapper: wrapper } = wrap();
  it('should render with the correct elements', () => {
    expect(wrapper.find('form.report-form').exists()).toBe(true);
    expect(wrapper.find('div.report-form__radio-container').exists()).toBe(true);
    expect(wrapper.find('div.report-form__radio-container--inner-container').exists()).toBe(true);
    expect(wrapper.find('input.report-form__radio-container-radio').exists()).toBe(true);
    expect(wrapper.find('div.report-form__radio-container--inner-container').exists()).toBe(true);
    expect(wrapper.find('input.report-form__radio-container-radio').exists()).toBe(true);
    expect(wrapper.find('input.report-form__input').exists()).toBe(true);
    expect(wrapper.find('textarea.report-form__input-textarea').exists()).toBe(true);
    expect(wrapper.find('button.report-form__button').exists()).toBe(true);
  });
});
