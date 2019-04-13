import React from 'react';
import ReportRow from './TableRow';

const report1 = {
  address: 'Winterfell',
  coordinates: '2392, 298202',
  comment: 'We want to report corruption',
  images: '',
  videos: '',
  status: 'draft',
  type: 'red-flag',
  createdon: Date.now(),
  createdby: 'James'
};
const report2 = {
  address: 'Volaris',
  coordinates: '02902939, 248230',
  comment: 'We need some help here',
  images: '',
  videos: '',
  status: 'draft',
  type: 'red-flag',
  createdon: Date.now(),
  createdby: 'John'
};

const AdminPage = () => (
  <div className="row-1-of-3" id="table-wrapper">
    <table className="table-admin" id="table-admin">
      <tbody>
        <tr className="row">
          <td className="cell">ID</td>
          <td className="cell">Type</td>
          <td className="cell">Comment / Media</td>
          <td className="cell">Location</td>
          <td className="cell">Created on</td>
          <td className="cell">Created by</td>
          <td className="cell">Status</td>
        </tr>
        <ReportRow report={report1} />
        <ReportRow report={report2} />
      </tbody>
    </table>
  </div>
);

export default AdminPage;
