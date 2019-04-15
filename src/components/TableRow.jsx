/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TableRow extends Component {
  constructor(props) {
    super(props);
    const { report } = props;
    this.state = {
      address: report ? report.address : '',
      coordinates: report ? report.coordinates : '',
      comment: report ? report.comment : '',
      images: report ? report.images : '',
      videos: report ? report.videos : '',
      status: report ? report.status : 'draft',
      type: report ? report.status : 'please choose a type of record [red-flag or intervention]',
      createdon: report ? report.createdon : 'unknown date',
      createdby: report ? report.createdby : 'anonymous',
    };
  }

  render() {
    const {
      address, comment, createdon, createdby, type,
    } = this.state;
    return (
      <tr className="row">
        <td className="cell id">01</td>
        <td className="cell type">{type}</td>
        <td className="cell comment-and-media">
          {' '}
          <a href="#popup" className="comment-and-media-link">{comment}</a>
          {' '}
        </td>
        <td className="cell location">{address}</td>
        <td className="cell createdon">
          {createdon}
          {' '}
        </td>
        <td className="cell createdby">
          {createdby}
          {' '}
        </td>
        <td className="cell status">
          <select name="status" id="status">
            <option value="draft">draft</option>
            <option value="under investigation">U.I</option>
            <option value="resolved">resolved</option>
            <option value="rejected">rejected</option>
          </select>
        </td>
      </tr>
    );
  }
}

TableRow.propTypes = {
  report: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default TableRow;
