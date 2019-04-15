import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

const Header = (props) => {
  const { isLoggedIn, isAdmin } = props;
  return (
    <header>
      <ul className="header-ul">
        {!isLoggedIn
          && (
          <Fragment>
            <li><NavLink to="/login" activeClassName="is-active" className=" header-NavLink">sign in</NavLink></li>
            <li><NavLink to="/signup" activeClassName="is-active" className=" header-NavLink">sign up</NavLink></li>
          </Fragment>
          )
        }
        {isLoggedIn
          && <li><NavLink to="/reports" activeClassName="is-active" className=" header-NavLink">view all reports</NavLink></li>
        }
        {(isLoggedIn && isAdmin)
        && <li><NavLink to="/admin_dashboard" activeClassName="is-active" className=" header-NavLink">admin dashboard</NavLink></li>
        }
        <li><NavLink to="/create_report" activeClassName="is-active" className=" header-NavLink">create report</NavLink></li>
        <li><NavLink to="/report/:id" activeClassName="is-active" className=" header-NavLink">edit report</NavLink></li>
        <li><NavLink to="/" activeClassName="is-active" className=" header-NavLink" exact>Go home</NavLink></li>
      </ul>
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
};

Header.propTypes = {
  isLoggedIn: propTypes.bool,
  isAdmin: propTypes.bool,
};

export default connect(mapStateToProps)(Header);
