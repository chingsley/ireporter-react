import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <ul className="header-ul">
      <li><NavLink to="/admin_dashboard" activeClassName="is-active" className=" header-NavLink">admin dashboard</NavLink></li>
      <li><NavLink to="/login" activeClassName="is-active" className=" header-NavLink">sign in</NavLink></li>
      <li><NavLink to="/signup" activeClassName="is-active" className=" header-NavLink">sign up</NavLink></li>
      <li><NavLink to="/reports" activeClassName="is-active" className=" header-NavLink">view all reports</NavLink></li>
      <li><NavLink to="/create_report" activeClassName="is-active" className=" header-NavLink">create report</NavLink></li>
      <li><NavLink to="/report/:id" activeClassName="is-active" className=" header-NavLink">edit report</NavLink></li>
      <li><NavLink to="/" activeClassName="is-active" className=" header-NavLink" exact>Go home</NavLink></li>
    </ul>
  </header>
);

export default Header;
