import errorHandler from '../../services/errorHandler';

describe('Test the error Handler', () => {
  it('should work', () => {
    const dispatch = jest.fn();
    const error = {
      response: {
        data: {
          error: 'a valid error',
        },
      },
    };
    errorHandler(dispatch, error);
    expect(dispatch).toHaveBeenCalled();
  });
  it('should working', () => {
    const dispatch = jest.fn();
    const error = {
      unknown: {
        data: {
          error: 'a valid error',
        },
      },
    };
    errorHandler(dispatch, error);
    expect(dispatch).toHaveBeenCalled();
  });
  it('should working', () => {
    const dispatch = jest.fn();
    const error = {
      message: {
        data: {
          error: 'a valid error',
        },
      },
    };
    errorHandler(dispatch, error);
    expect(dispatch).toHaveBeenCalled();
  });
});
