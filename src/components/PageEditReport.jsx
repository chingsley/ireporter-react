import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FormReport from './FormReport';

class EditReportPage extends Component {
  constructor(props) {
    super(props);
    this.history = props.history;
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { userReports, match: { params: { id } } } = this.props;
    const report = userReports.filter(singleReport => singleReport.id === Number(id));

    return (
      <div className="report-container">
        <h2 className="report-container__header">EDIT REPORT</h2>
        <FormReport {...this.props} report={report[0]} mode="edit" />
      </div>
    );
  }
}

EditReportPage.propTypes = {
  history: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  userReports: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = state => ({
  userReports: state.report.userReports,
});

export default connect(mapStateToProps, {})(EditReportPage);
