// eslint-disable-next-line max-len
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReportRow from './ReportRow';

export class UserReportsPage extends Component {
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
    const { userReports, history } = this.props;
    return (
      <section className="user-page">
        <div className="user-page__table-wrapper">
          <h2 className="user-page__table-wrapper--table-header">MY REPORTS</h2>
          <table className="table-user">
            <tbody>
              <tr className="row">
                <td className="cell">ID</td>
                <td className="cell">Type</td>
                <td className="cell">Comment / Media</td>
                <td className="cell">Location</td>
                <td className="cell">Created on</td>
                <td className="cell">Status</td>
                <td className="cell" />
                {/* <td className="cell" /> */}
              </tr>
              {userReports
                .sort((a, b) => b.id - a.id)
                .map(report => (
                  <ReportRow key={report.id} report={report} client="user" history={history} />
                ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}
UserReportsPage.propTypes = {
  history: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  userReports: PropTypes.instanceOf(Array).isRequired,
  isLoggedIn: PropTypes.bool,
};

UserReportsPage.defaultProps = {
  isLoggedIn: false,
};

const mapStateToProps = state => ({
  fetching: state.fetchStatus.fetching,
  isLoggedIn: state.auth.isLoggedIn,
  userReports: state.report.userReports,
});

export default connect(mapStateToProps, {})(UserReportsPage);
