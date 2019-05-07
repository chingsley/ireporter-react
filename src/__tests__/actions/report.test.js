import axios from '../../services/axios';
import { createNewReport, editReport, changeReportStatus } from '../../actions/report';

const reportData = {
  id: 48,
  location: '2.222, 3.4443',
  comment: 'some valid comment',
  type: 'redflag',
};

describe('Create a new report', () => {
  const dispatch = jest.fn();
  const successResponse = {
    status: 201,
    data: [
      {
        id: 63,
        message: 'created red-flag record',
        record: [
          {
            id: 63,
            createdOn: '2019-05-07T12:10:01.109Z',
            createdBy: 48,
            type: 'red-flag',
            location: '2.2, 2.3',
            status: 'draft',
            Images: [],
            Videos: [],
            comment: 'this is a comment',
          },
        ],
      },
    ],
  };
  const editResponse = {
    status: 200,
    data: [
      {
        id: 64,
        message: "Updated red-flag's location",
        record: [
          {
            id: 64,
            createdOn: '2019-05-07T14:34:33.456Z',
            createdBy: 48,
            type: 'red-flag',
            location: '2.23, 2.33',
            status: 'draft',
            Images: [],
            Videos: [],
            comment: 'this is a comment',
          },
        ],
      },
    ],
  };

  const statusResponse = {
    status: 200,
    data: [
      {
        id: 64,
        message: "Updated red-flag's status",
        record: [
          {
            id: 64,
            createdOn: '2019-05-07T14:34:33.456Z',
            createdBy: 48,
            type: 'red-flag',
            location: '2.23, 2.33',
            status: 'draft',
            Images: [],
            Videos: [],
            comment: 'this is a comment',
          },
        ],
      },
    ],
  };

  it('should successfully create a report', async () => {
    jest.spyOn(axios, 'post').mockResolvedValue({
      data: { ...successResponse },
    });
    jest.spyOn(JSON, 'parse').mockReturnValue([{ id: 64, location: '2.22, 3.33', comment: 'some valid comment' }]);
    await createNewReport(reportData)(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(3);
  });

  it('should successfully edit a report', async () => {
    jest.spyOn(axios, 'patch').mockResolvedValue({
      data: { ...editResponse },
    });
    jest.spyOn(JSON, 'parse').mockReturnValue([{}]);
    await editReport(reportData)(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(3);
  });
  it('shoul successfully change the status of the report', async () => {
    jest.spyOn(axios, 'patch').mockResolvedValue({
      data: { ...statusResponse },
    });
    jest.spyOn(JSON, 'parse').mockReturnValue([{}]);
    await changeReportStatus(reportData)(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(3);
  });
});
