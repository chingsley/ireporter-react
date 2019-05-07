/* eslint-disable prefer-promise-reject-errors */
// import mockAxios from 'axios';
import { authorise } from '../../actions/auth';
import axios from '../../services/axios';
// import * as types from '../../actions/types';

// const mockStore = configureStore([thunk]);

const userData = {
  id: 48,
  firstname: 'chingsley',
  lastname: 'Eneja',
  othernames: 'lsliaoiepiowi',
  email: 'vidar.ah2019@gmail.com',
  phoneNumber: '308830808032',
  username: 'lkajljdlja',
  registered: '2019-04-13T19:51:10.777Z',
  isAdmin: false,
  picture: 'uploads/default_profile_pic.png',
};

describe('authorise()', () => {
  const dispatch = jest.fn();
  const successResponse = {
    status: 200,
    data: [
      {
        token:
          'a-valid-token',
        user: {
          id: 48,
          firstname: 'chingsley',
          lastname: 'Eneja',
          othernames: 'lsliaoiepiowi',
          email: 'vidar.ah2019@gmail.com',
          phoneNumber: '308830808032',
          username: 'lkajljdlja',
          registered: '2019-04-13T19:51:10.777Z',
          isAdmin: false,
          picture: 'uploads/default_profile_pic.png',
        },
      },
    ],
  };

  it('should login user successfully', async () => {
    jest.spyOn(axios, 'post').mockRejectedValue({});
    await authorise(userData, 'login')(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(2);
    // expect(dispatch.mock.calls[1][0]).toEqual({
    //   user: userData,
    //   type: 'LOG_IN',
    // });
  });

  it('should throw an error for bad request', async () => {
    jest.spyOn(axios, 'post').mockResolvedValue({
      data: { ...successResponse },
    });
    await authorise(userData, 'login')(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(dispatch.mock.calls[1][0]).toEqual({
      user: userData,
      type: 'LOG_IN',
    });
  });

  // it('should fail to login user if errors exist', () => {
  //   mockAxios.post.mockImplementationOnce(() => Promise.reject({
  //     response: { data: { success: false, errors: ['something went wrong'] } },
  //   }));

  //   const expected = [
  //     {
  //       type: types.START_FETCHING,
  //     },
  //     {
  //       type: types.STOP_FETCHING,
  //       payload: { error: true, message: ['something went wrong'] },
  //     },
  //   ];

  //   const store = mockStore({ authReducer: {}, fetchReducer: {} });
  //   return store.dispatch(authorise({ email: 'wrong@email.com', password: 'incorrect' })).then(() => {
  //     expect(store.getActions()).toEqual(expected);
  //   });
  // });
});
