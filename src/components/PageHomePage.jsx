import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SectionMainView from './SectionMainView';
import SectionWhatWeDo from './SectionWhatWeDo';
import SectionOurStories from './SectionOurStories';
import { getUserReports } from '../actions/report';

class HomePage extends Component {
  async componentDidMount() {
    const { isLoggedIn, getUserReports: getReports } = this.props;
    if (isLoggedIn) {
      await getReports();
    }
  }

  render() {
    return (
      <div>
        <SectionMainView />
        <SectionWhatWeDo />
        <SectionOurStories />
      </div>
    );
  }
}

HomePage.propTypes = {
  getUserReports: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool,
};

HomePage.defaultProps = {
  isLoggedIn: false,
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps, { getUserReports })(HomePage);
