/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ReportRow extends Component {
  constructor(props) {
    super(props);
    const { report } = props;
    this.state = {
      address: report ? report.address : '',
      coordinates: report ? report.coordinates : '',
      comment: report ? report.comment : '',
      images: report ? report.images : '',
      videos: report ? report.videos : '',
      status: report ? report.status : 'draft',
      type: report ? report.status : 'please choose a type of record [red-flag or intervention]',
      createdon: report ? report.createdon : 'unknown date',
      createdby: report ? report.createdby : 'anonymous',
    };
  }

  render() {
    const {
      fullname, username, email, createdby, type,
    } = this.state;
    return (
      <section className="section-profile">
        <div className="section-profile-wrapper">
          <div className="profile-div">
            <h4 id="date">place date and time here</h4>

            <div className="div-profile-content div-profile-content-title">
              PROFILE
            </div>
            <div className="div-profile-content div-profile-content-picture u-margin-top-small">
              <div className="piture-div-img">
                <img src="img/lion-3576045_1920.jpg" alt="profile" />
              </div>
            </div>
            <div className="div-profile-content div-profile-content-userdetails">
              <p className="fullname">Julia James Junior</p>
              <h4 className="telephone">jj-junior@gmail.com</h4>
            </div>
            <div className="div-profile-content div-profile-content-flexbox u-margin-top-small">
              <div className="flex-child redflag">
                <h4>50</h4>
                <p>RED-FLAGS</p>
              </div>
              <div className="flex-child incidence">
                <h4>45</h4>
                <p>INCIDENCES</p>
              </div>
            </div>
            <div className="div-profile-content div-profile-content-flexbox u-margin-top-small">
              <div className="flex-child stats redflag-stats">
                <ul>
                  <li>10 Draft</li>
                  <li>15 Rejected</li>
                  <li>14 Resolved</li>
                  <li>11 Under Investigation</li>
                </ul>
              </div>
              <div className="flex-child stats incidence-stats">
                <ul>
                  <li>10 Draft</li>
                  <li>10 Rejected</li>
                  <li>14 Resolved</li>
                  <li>11 Under Investigation</li>
                </ul>
              </div>
            </div>
            <div className="div-profile-content div-profile-content-flexbox u-margin-top-small" id="div-profile-content-flexbox-username-part">
              <div className="flex-child" id="pic-for-username">
                <img src="img/lion-3576045_1920.jpg" alt="profile" />
              </div>
              <div className="flex-child" id="profile-username">
                <h3>JuliaJ95Jnr</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

ReportRow.propTypes = {
  report: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default ReportRow;
