/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Clickable = ({ className, text }) => (
  <div className={`link-container ${className}`}>
    <Link to="/" className="link">{text}</Link>
  </div>
);

Clickable.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};

Clickable.defaultProps = {
  className: '',
};

export default Clickable;
