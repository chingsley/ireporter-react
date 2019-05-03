import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import PageCreateReport from '../../components/PageCreateReport';
import FormReport from '../../components/FormReport';

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

  const shallowWrapper = shallow(<FormReport {...props} />);

  const mountWrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <PageCreateReport>
          <FormReport {...props} />
        </PageCreateReport>
      </MemoryRouter>
    </Provider>,
  );
  return { shallowWrapper, mountWrapper };
};


describe('Test the PageCreateReport component', () => {
  const { mountWrapper: wrapper } = wrap();
  it('div.report-container', () => {
    expect(wrapper.find('.report-container__header').exists()).toBe(true);
    expect(wrapper.find('.report-container').exists()).toBe(true);
  });
});
