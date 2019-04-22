/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
// import { toast } from 'react-toastify';
import { createNewReport } from '../actions/report';

export class Report extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: '',
      location: '',
      comment: '',
      status: 'draft',
      type: 'red-flag',
    };

    this.history = props.history;
    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit(e) {
    e.preventDefault();

    const { isLoggedIn, history } = this.props;
    if (!isLoggedIn) {
      history.push('/login');
    } else {
      const { createNewReport: reportCase } = this.props;
      await reportCase({ ...this.state });
    }
  }


  render() {
    const {
      address,
      location,
      comment,
    } = this.state;
    return (
      <form
        onSubmit={this.onSubmit}
        className="report-form"
        id="report-form"
      >
        <div className="report-form__radio-container">
          <div className="report-form__radio-container--inner-container">
            <input
              type="radio"
              className="report-form__radio-container-radio"
              id="redflag"
              name="type"
              value="red-flags"
              onClick={e => this.setState({ type: e.target.value })}
            />
            <label htmlFor="redflag" id="label-redflag">redflag</label>
          </div>
          <div className="report-form__radio-container--inner-container">
            <input
              type="radio"
              className="report-form__radio-container-radio"
              id="intervention"
              name="type"
              value="interventions"
              onClick={e => this.setState({ type: e.target.value })}
            />
            <label htmlFor="intervention" id="label-intervention">intervention</label>
          </div>

        </div>
        <input
          type="text"
          className="report-form__input"
          id="address"
          placeholder="Enter your address"
          value={address}
          onChange={e => this.setState({ address: e.target.value })}
          required
        />
        <input
          type="text"
          className="report-form__input"
          id="coords"
          placeholder="coordinates"
          value={location}
          onChange={e => this.setState({ location: e.target.value })}
          required
        />
        <textarea
          name="comment"
          className="report-form__input-textarea"
          id="comment"
          rows="6"
          placeholder="enter your comments"
          value={comment}
          onChange={e => this.setState({ comment: e.target.value })}
          required
        />
        {/* <input
          type="file"
          className="report-input-file-upload"
          id="pic"
          name="pic"
          accept="image/*;capture=camera"
          multiple
          onChange={e => this.setState({ images: e.target.value })}
        /> */}
        {/* <input
          type="file"
          className="report-input-file-upload"
          id="video"
          name="video"
          accept="video/*;capture=camcoder"
          multiple
          onChange={e => this.setState({ videos: e.target.value })}
        /> */}
        <button
          className="report-form__button"
          id="btn-send-report"
          type="submit"
        >
          SEND
        </button>
      </form>
    );
  }
}

Report.defaultProps = {
  isLoggedIn: false,
};

Report.propTypes = {
  createNewReport: propTypes.func.isRequired,
  isLoggedIn: propTypes.bool,
  history: propTypes.oneOfType([propTypes.object, propTypes.func]).isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  fetching: state.fetchStatus.fetching,
});

const FormReport = connect(mapStateToProps, { createNewReport })(Report);
export default FormReport;
