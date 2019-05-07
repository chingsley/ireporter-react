import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import PageEditReport from '../../components/PageEditReport';

const wrap = () => {
  const props = {
    history: {
      push: jest.fn(),
      location: {
        pathname: '',
      },
    },
    match: {
      params: {
        id: 1,
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
      userReports: [
        {
          id: 1,
          comment: 'some comments here',
          location: '1.2, 2.1',
          status: 'draft',
          createdOn: Date.now(),
          Images: ['a-given-image.png'],
        },
        {
          id: 2,
          comment: 'some comments here',
          location: '1.2, 2.1',
          status: 'draft',
          createdOn: Date.now(),
          Images: ['another-img.npn'],
        },
      ],
    },
  });

  const mountWrapper = mount(
    <Provider store={store}>
      <BrowserRouter>
        <PageEditReport {...props} />
      </BrowserRouter>
    </Provider>,
  );
  return { mountWrapper };
};

describe('Test the report form', () => {
  const { shallowWrapper: wrapper } = wrap();
  it('should render with the correct elements', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
