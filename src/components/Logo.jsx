import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Footer = ({ className }) => (
  <div className={`logo ${className}`}>
    <h1 className="logo__h1">
      <Link className="logo__h1--link-on-black" to="/">
        <span className="logo__h1--link-on-black__span-i">i</span>
        <span className="logo__h1--link-on-black__span-repa">Repa</span>
      </Link>
    </h1>
  </div>
);

Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: '',
};

export default Footer;
