import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import Logo from './Logo';

const Header = (props) => {
  const { isLoggedIn, isAdmin, className } = props;
  return (
    <header className={`header ${className}`}>
      <Logo className="header-logo" />
      <div className="header-inner-wrapper">
        <ul className="header-ul">
          {!isLoggedIn
            && (
            <Fragment>
              <li className="header-ul__li"><NavLink to="/login" activeClassName="is-active" className="header-NavLink">sign in</NavLink></li>
              <li className="header-ul__li"><NavLink to="/signup" activeClassName="is-active" className="header-NavLink">sign up</NavLink></li>
            </Fragment>
            )
          }
          {isLoggedIn
            && (
              <Fragment>
                <li className="header-ul__li"><NavLink to="/" className="header-NavLink">logout</NavLink></li>
                <li className="header-ul__li"><NavLink to="/report/:id" activeClassName="is-active" className="header-NavLink">edit report</NavLink></li>
                <li className="header-ul__li"><NavLink to="/reports" activeClassName="is-active" className="header-NavLink">my reports</NavLink></li>
                <li className="header-ul__li"><NavLink to="/create_report" activeClassName="is-active" className="header-NavLink">new report</NavLink></li>
              </Fragment>
            )
          }
          {(isLoggedIn && isAdmin)
          && <li className="header-ul__li"><NavLink to="/admin_dashboard" activeClassName="is-active" className="header-NavLink">admin dashboard</NavLink></li>
          }
        </ul>
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
  isLoggedIn: propTypes.bool,
  isAdmin: propTypes.bool,
  className: propTypes.string,
};

export default connect(mapStateToProps)(Header);
