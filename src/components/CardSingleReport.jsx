import React from 'react';

const CardSingleReport = () => (
  <div className="report" id="report-cards">
    <button className="btn-report-delete">&times;</button>
    <div className="div-report-img">
      <img className="report-img" src="img/1543731908425.jpg" alt="alt" />
    </div>
    <div className="report-details">
      <table className="report-details-table">
        <tr>
          <td>Type :</td>
          <td>Intervention</td>
        </tr>
        <tr>
          <td>Created On :</td>
          <td>12 Nov, 2018</td>
        </tr>
        <tr>
          <td>Details :</td>
          <td className="animated-link">
            <a
              href="#popup"
              className="report-card-comments-and-media"
            >
              ...
            </a>
          </td>
        </tr>
        <tr>
          <td>Status :</td>
          <td className="td-status-draft">Draft</td>
        </tr>
      </table>
    </div>
    <div className="report-details-div-btn">
      <button className="btn" id="btn-edit-report">
        Edit
      </button>
    </div>
  </div>
);

export default CardSingleReport;
