import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReportRow from './ReportRow';

const report1 = {
  address: 'Winterfell',
  coordinates: '2392, 298202',
  comment: 'We want to report corruption',
  images: '',
  videos: '',
  status: 'draft',
  type: 'red-flag',
  createdon: Date.now(),
  createdby: 'James',
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
  createdby: 'John',
};
const { log } = console;
export class AdminPage extends Component {
  async componentDidMount() {
    const { isLoggedIn, history } = this.props;
    if (!isLoggedIn) {
      history.push('/login');
    }
  }

  changeReportStatus() {
    const { userReports } = this.props;
    log(userReports);
  }

  render() {
    return (
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
  }
}
AdminPage.propTypes = {
  history: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  userReports: PropTypes.instanceOf(Array).isRequired,
  isLoggedIn: PropTypes.bool,
};

AdminPage.defaultProps = {
  isLoggedIn: false,
};

const mapStateToProps = state => ({
  fetching: state.fetchStatus.fetching,
  isLoggedIn: state.auth.isLoggedIn,
  userReports: state.report.userReports,
});

export default connect(mapStateToProps, {})(AdminPage);
