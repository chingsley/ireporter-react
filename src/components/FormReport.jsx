/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';

export default class FormReport extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: '',
      coordinates: '',
      comment: '',
      images: '',
      videos: '',
      status: 'draft',
      type: 'red-flag'
    };
  }

  render() {
    return (
      <form action="#" className="report-form" id="report-form">
        <input
          type="radio"
          className="form-radio-input"
          id="small"
          name="type"
          value="red-flags"
        />
        <input
          type="radio"
          className="form-radio-input"
          id="large"
          name="type"
          value="interventions"
        />
        <input
          type="text"
          className="report-form-input"
          id="address"
          placeholder="Enter your address"
        />
        <input
          type="text"
          className="report-form-input"
          id="coords"
          placeholder="coordinates (readonly)"
          required
          readOnly
        />
        <input
          type="file"
          className="report-input-file-upload"
          id="pic"
          name="pic"
          accept="image/*;capture=camera"
          multiple
        />
        <input
          type="file"
          className="report-input-file-upload"
          id="video"
          name="video"
          accept="video/*;capture=camcoder"
          multiple
        />
        <textarea
          name="comment"
          id="comment"
          rows="6"
          placeholder="enter your comments"
        />
        <button className="btn" id="btn-send-report">
          send
        </button>
      </form>
    );
  }
}
