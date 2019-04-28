/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import ClickableBtn from './Clickable';

const CardSingleReport = ({ imgSrc, status }) => (
  <div className="report-card-wrapper">
    <div className="report-card-wrapper__card">
      <span className="delete-report">X</span>
      <div className="report-card-wrapper__card--img-container">
        <img src={imgSrc} className="report-card-wrapper__card--img-container-img" alt="ssdsdsds" />
      </div>
      <div className="report-card-wrapper__card--content-container">
        <p className={status}>status: {status}</p>
        <p className="report-card-wrapper__card--content-container-comment">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <ClickableBtn text="Edit Report" className="btn-edit" />
      </div>
    </div>
  </div>
);

CardSingleReport.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  status: PropTypes.string,
};

CardSingleReport.defaultProps = {
  status: 'draft',
};

export default CardSingleReport;
