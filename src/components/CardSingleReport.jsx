/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import ClickableBtn from './Clickable';

const CardSingleReport = ({ image, status, comment }) => (
  <div className="report-card-wrapper">
    <div className="report-card-wrapper__card">
      <span className="delete-report">X</span>
      <div className="report-card-wrapper__card--img-container">
        <img src={image} className="report-card-wrapper__card--img-container-img" alt="ssdsdsds" />
      </div>
      <div className="report-card-wrapper__card--content-container">
        <p className={status}>status: {status}</p>
        <p className="report-card-wrapper__card--content-container-comment">
          {comment}
        </p>
        <ClickableBtn text="Edit Report" className="btn-edit" />
      </div>
    </div>
  </div>
);

CardSingleReport.propTypes = {
  image: PropTypes.string.isRequired,
  status: PropTypes.string,
  comment: PropTypes.string,
};

CardSingleReport.defaultProps = {
  status: 'draft',
  comment: '',
};

export default CardSingleReport;
