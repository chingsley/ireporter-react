import React, { Fragment } from 'react';

const CardReportType = () => (
  <Fragment>
    <div className="card">
      <div className="card-picture card-picture--2">&nbsp;</div>
      <h4 className="card-heading">
        <span className="card-heading-span card-heading-span--2">
          Intervention Records
        </span>
      </h4>
      <div className="card-details">
        <ul>
          <li>Bad road sections</li>
          <li>Flooding</li>
          <li>Communal violence</li>
          <li>Disease outbreak</li>
          <li>... and many more</li>
        </ul>
      </div>
      <div className="link-container u-center-item">
        <a href="report.html" className="link report-a-case">
          Report a case &rarr;
        </a>
      </div>
    </div>
  </Fragment>
);

export default CardReportType;
