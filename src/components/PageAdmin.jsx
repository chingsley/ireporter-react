import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReportRow from './ReportRow';

export class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.history = props.history;
  }

  async componentDidMount() {
    const { isLoggedIn, history } = this.props;
    if (!isLoggedIn) {
      history.push('/login');
    }
  }

  render() {
    const { userReports } = this.props;
    return (
      <section className="admin-page">
        <div className="admin-page__table-wrapper">
          <h2 className="admin-page__table-wrapper--table-header">MANAGE REPORTS</h2>
          <table className="table-admin">
            <tbody>
              <tr className="row">
                <td className="cell">ID</td>
                <td className="cell">Type</td>
                <td className="cell">Comment / Media</td>
                <td className="cell">Location</td>
                <td className="cell">Created on</td>
                <td className="cell">Status</td>
              </tr>
              {userReports
                // eslint-disable-next-line max-len
                .sort((a, b) => b.id - a.id) // inverted sort so that the most recent report (the last to be added) will be displayed first
                .map(report => (
                  <ReportRow key={report.id} report={report} client="admin" />
                ))}
            </tbody>
          </table>
        </div>
      </section>
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
