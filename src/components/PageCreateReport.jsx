
import React from 'react';
import FormReport from './FormReport';


const ReportPage = props => (
  <div className="report-container">
    <h2 className="report-container__header">MAKE A NEW REPORT</h2>
    <FormReport {...props} />
  </div>
);

export default ReportPage;
