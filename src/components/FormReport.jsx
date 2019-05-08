/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createNewReport, editReport } from '../actions/report';
import setPreviewImage from '../utilities/setPreviewImage';
import { alertUser } from './Alert';

import geolocation from '../services/geolocation';

export class Report extends Component {
  constructor(props) {
    super(props);
    const { report } = props;
    const {
      id, location, comment, status, type, Images,
    } = report;

    this.state = {
      address: '',
      id: report ? id : null,
      location: report ? location : '',
      comment: report ? comment : '',
      status: report ? status : 'draft',
      type: report ? type : 'red-flag',
      images: (report && Images && Images[0]) ? Images[0] : null,
      previewImg: (report && Images && Images[0]) ? Images[0] : null,
      noadd: false,
    };

    this.history = props.history;
    this.onSubmit = this.onSubmit.bind(this);
    this.onImgChange = this.onImgChange.bind(this);
    this.onblur = this.onblur.bind(this);
  }

  async onblur() {
    const { address } = this.state;
    if (!address) {
      this.setState({ noadd: true });
      alertUser('Address required', 'error');
      return;
    }
    this.setState({ noadd: false });
    geolocation.geocode({ address }, (err, result) => {
      if (err) {
        this.setState({ noadd: true });
        alertUser('please provide a valid address', 'error');
        this.setState({ address: '' });
        this.setState({ location: '' });
      }
      const { status } = result;
      if (status === 200) {
        const { json } = result;
        const { results, status: statusInJson } = json;
        if (statusInJson !== 'OK') {
          this.setState({ noadd: true });
          alertUser('please provide a valid address', 'error');
          this.setState({ address: '' });
        }
        const { geometry: { location: { lat, lng } } } = results[0];
        this.setState({ location: `${lat}, ${lng}` });
      } else {
        this.setState({ noadd: true });
        alertUser('please provide a valid address', 'error');
        this.setState({ address: '' });
        this.setState({ location: '' });
      }
    });
  }

  async onSubmit(e) {
    e.preventDefault();

    const { mode } = this.props;
    if (mode === 'create') {
      const { isLoggedIn, history } = this.props;
      if (!isLoggedIn) {
        history.push('/login');
      } else {
        const { createNewReport: reportCase } = this.props;
        await reportCase({ ...this.state });
      }
    }

    if (mode === 'edit') {
      const { editReport: edit } = this.props;
      await edit({ ...this.state });
    }
  }

  onImgChange(e) {
    return this.setState({ images: e.target.files[0], previewImg: e.target.files });
  }


  render() {
    const {
      address,
      location,
      comment,
      previewImg,
    } = this.state;
    const { mode } = this.props;
    return (
      <form
        onSubmit={this.onSubmit}
        className="report-form"
        id="report-form"
      >
        {mode === 'create'
          && (
            <div className="report-form__radio-container">
              <div className="report-form__radio-container--inner-container">
                <input
                  type="radio"
                  className="report-form__radio-container-radio"
                  id="redflag"
                  name="type"
                  value="red-flags"
                  onClick={e => this.setState({ type: e.target.value })}
                  required
                />
                redflag
              </div>
              <div className="report-form__radio-container--inner-container">
                <input
                  type="radio"
                  className="report-form__radio-container-radio"
                  id="intervention"
                  name="type"
                  value="interventions"
                  onClick={e => this.setState({ type: e.target.value })}
                  required
                />
                intervention
              </div>
            </div>
          )}
        <input
          style={{ border: `${this.state.noadd ? '1px solid red' : ''}` }}
          type="text"
          className="report-form__input"
          id="address"
          placeholder="address"
          value={address}
          onChange={e => this.setState({ address: e.target.value })}
          onBlur={this.onblur}
          required
        />
        <input
          type="text"
          className="report-form__input"
          id="coords"
          placeholder="coordinates"
          value={location}
          // onChange={e => this.setState({ location: e.target.value })} // This will make this field readonly
          required
        />
        <textarea
          name="comment"
          className="report-form__input-textarea"
          id="comment"
          rows="6"
          placeholder="comments"
          value={comment}
          onChange={e => this.setState({ comment: e.target.value })}
          required
        />
        {mode === 'create'
          && (
            <>
              <input
                className="report-form-image-upload-input"
                type="file"
                name="image"
                onChange={this.onImgChange}
                ref={fileInput => this.fileInput = fileInput}
              />
              <div className="form-report-image-container" onClick={() => this.fileInput.click()}>
                <span className="form-report-image-container__add-image">Add Image</span>
                <img
                  className="form-report-image-container__selected-image"
                  src={setPreviewImage(previewImg)}
                  alt="report-evidence"
                />
              </div>
              <button
                className="report-form__button"
                id="btn-send-report"
                type="submit"
              >
                SEND
              </button>
            </>
          )}
        {mode === 'edit'
          && (
            <button
              className="report-form__button"
              id="btn-send-report"
              type="submit"
            >
              SAVE CHANGES
            </button>
          )}
      </form>
    );
  }
}

Report.defaultProps = {
  isLoggedIn: false,
  mode: 'create',
  report: {},
};

Report.propTypes = {
  createNewReport: PropTypes.func.isRequired,
  editReport: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool,
  history: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  mode: PropTypes.string,
  report: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  fetching: state.fetchStatus.fetching,
});

const FormReport = connect(mapStateToProps, { createNewReport, editReport })(Report);
export default FormReport;
