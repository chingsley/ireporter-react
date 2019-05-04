import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CardSingleReport from './CardSingleReport';

export class ViewAllReports extends Component {
  async componentDidMount() {
    const { isLoggedIn, history } = this.props;
    if (!isLoggedIn) {
      history.push('/login');
    }
  }


  render() {
    const { userReports } = this.props;
    return (
      <div className="all-reports-container">
        {userReports
          // eslint-disable-next-line max-len
          .sort((a, b) => b.id - a.id) // inverted sort so that the most recent report (the last to be added) will be displayed first
          .map(report => (
            <CardSingleReport
              image="https://res.cloudinary.com/dmx0a3nqi/image/upload/v1548918888/btaftrjb7zhxhdsb2wbg.jpg" // change to {report.image}
              status={report.status}
              comment={report.comment}
            />
          ))}
      </div>
    );
  }
}

ViewAllReports.propTypes = {
  history: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  userReports: PropTypes.instanceOf(Array).isRequired,
  isLoggedIn: PropTypes.bool,
};

ViewAllReports.defaultProps = {
  isLoggedIn: false,
};

const mapStateToProps = state => ({
  fetching: state.fetchStatus.fetching,
  isLoggedIn: state.auth.isLoggedIn,
  userReports: state.report.userReports,
});

export default connect(mapStateToProps, {})(ViewAllReports);
