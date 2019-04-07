import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <ul>
      <li><NavLink to="/" activeClassName="is-active" exact>Go home</NavLink></li>
      <li><NavLink to="/report/:id" activeClassName="is-active">edit report</NavLink></li>
      <li><NavLink to="/create_report" activeClassName="is-active">create report</NavLink></li>
      <li><NavLink to="/reports" activeClassName="is-active">view all reports</NavLink></li>
      <li><NavLink to="/sign_up" activeClassName="is-active">sign up</NavLink></li>
      <li><NavLink to="/sign_in" activeClassName="is-active">sign in</NavLink></li>
      <li><NavLink to="/admin_dashboard" activeClassName="is-active">admin dashboard</NavLink></li>
    </ul>
  </header>
);

export default Header;
