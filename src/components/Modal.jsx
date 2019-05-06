/* eslint-disable react/button-has-type */
import React, { Fragment } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

const ViewModal = (props) => {
  const {
    displayModal, closeModal, image, comment,
  } = props;

  return (
    <Fragment>
      <Modal
        isOpen={displayModal}
        contentLabel="Modal Option"
        ariaHideApp={false}
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="container-modal-content">
          <div className="media-container">
            <img src={image} alt="default" className="media-container__img" />
            <p className="media-container__text">
              {comment}
            </p>
          </div>
          <button className="btn-modal cancel" onClick={closeModal}>x</button>
        </div>
      </Modal>
    </Fragment>
  );
};
ViewModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  displayModal: PropTypes.bool,
  image: PropTypes.string,
  comment: PropTypes.string,
};

ViewModal.defaultProps = {
  displayModal: false,
  image: 'https://via.placeholder.com/700x400',
  comment: 'No comments provied',
};

export default ViewModal;
