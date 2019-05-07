import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import PageViewAllReports from '../../components/PageViewAllReports';

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

  const shallowWrapper = shallow(<PageViewAllReports {...props} />);

  const mountWrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <PageViewAllReports {...props} />
      </MemoryRouter>
    </Provider>,
  );
  return { shallowWrapper, mountWrapper };
};


describe('Test the admin page', () => {
  const { mountWrapper: wrapper } = wrap();
  it('should render with the correct elements', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
