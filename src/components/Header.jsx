/* eslint-disable react/no-unknown-property */
import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Logo from './Logo';
import { logout } from '../actions/auth';

const Header = (props) => {
  const {
    isLoggedIn, isAdmin, className, logout: handleLogout,
  } = props;
  const logoutUser = () => handleLogout();
  return (
    <header className={`header ${className}`}>
      <Logo className="header-logo" />
      <div className="header-inner-wrapper">
        <label for="toggle">&#9776;</label>
        <input type="checkbox" id="toggle" />
        <ul className="header-ul">
          {!isLoggedIn
            && (
              <Fragment>
                <li className="header-ul__li"><NavLink to="/login" activeClassName="is-active" className="header-NavLink">sign in</NavLink></li>
                <li className="header-ul__li"><NavLink to="/signup" activeClassName="is-active" className="header-NavLink">sign up</NavLink></li>
              </Fragment>
            )
          }
          {isLoggedIn && !isAdmin
            && (
              <Fragment>
                <li className="header-ul__li"><NavLink to="/" className="header-NavLink" onClick={logoutUser}>logout</NavLink></li>
                <li className="header-ul__li"><NavLink to="/reports" activeClassName="is-active" className="header-NavLink">my reports</NavLink></li>
                <li className="header-ul__li"><NavLink to="/create_report" activeClassName="is-active" className="header-NavLink">new report</NavLink></li>
                {/* <li className="header-ul__li"><NavLink to="/profile" activeClassName="is-active" className="header-NavLink">my profile</NavLink></li> */}
              </Fragment>
            )
          }
          {(isLoggedIn && isAdmin)
            && (
              <>
                <li className="header-ul__li"><NavLink to="/" className="header-NavLink" onClick={logoutUser}>logout</NavLink></li>
                <li className="header-ul__li"><NavLink to="/admin_dashboard" activeClassName="is-active" className="header-NavLink">admin dashboard</NavLink></li>
              </>
            )
          }
        </ul>
      </div>
      <div className="nav">
        {/* <label for="toggle">&#9776;</label> */}
        <div className="report">
          {/* <a href="#">reports</a> */}
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  isAdmin: state.auth.user.isAdmin,
});

Header.defaultProps = {
  isLoggedIn: false,
  isAdmin: false,
  className: '',
};

Header.propTypes = {
  isLoggedIn: PropTypes.bool,
  isAdmin: PropTypes.bool,
  className: PropTypes.string,
  logout: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { logout })(Header);
