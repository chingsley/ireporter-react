import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

const { log } = console;
const ProfilePage = (props) => {
  const { userReports, isLoggedIn, history } = props;
  log(userReports[0]);

  if (!isLoggedIn) {
    history.push('/login');
  }

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
};

ProfilePage.propTypes = {
  userReports: PropTypes.instanceOf(Array).isRequired,
  isLoggedIn: PropTypes.bool,
  history: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,

};

ProfilePage.defaultProps = {
  isLoggedIn: false,
};

const mapStateToProps = state => ({
  fetching: state.fetchStatus.fetching,
  isLoggedIn: state.auth.isLoggedIn,
  userReports: state.report.userReports,
});

export default connect(mapStateToProps, {})(ProfilePage);
