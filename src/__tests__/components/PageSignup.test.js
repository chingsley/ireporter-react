import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import PageSignup from '../../components/PageSignup';

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
      userReports: [
        {
          id: 1, comment: 'some comments here', location: '1.2, 2.1', status: 'draft', createdOn: Date.now(), Images: ['a-given-image.png'],
        },
        {
          id: 2, comment: 'some comments here', location: '1.2, 2.1', status: 'draft', createdOn: Date.now(), Images: ['another-img.npn'],
        },
      ],
    },
  });

  const shallowWrapper = shallow(<PageSignup {...props} />);

  const mountWrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <PageSignup {...props} />
      </MemoryRouter>
    </Provider>,
  );
  return { shallowWrapper, mountWrapper };
};

describe('Test the report form', () => {
  const { mountWrapper: wrapper } = wrap();
  it('should render with the correct elements', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
