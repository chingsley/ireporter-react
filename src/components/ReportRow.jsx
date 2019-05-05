/* eslint-disable no-param-reassign */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ViewModal from './Modal';
import { changeReportStatus } from '../actions/report';

export class ReportRow extends Component {
  constructor(props) {
    super(props);
    const { report } = props;
    this.state = {
      id: report ? report.id : '',
      address: report ? report.address : '',
      location: report ? report.location : '',
      comment: report ? report.comment : '',
      images: report ? report.images : '',
      videos: report ? report.videos : '',
      status: report ? report.status : 'draft',
      type: report ? report.type : 'unspecified',
      createdon: report ? JSON.stringify(report.createdOn).slice(1, 11) : 'unspecified',
      createdby: report ? report.createdBy : 'anonymous',
      modalDisplay: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
  }

  changeStatus() {
    const { changeReportStatus: handleStatusChange } = this.props;
    handleStatusChange({ ...this.state });
  }

  toggleModal() {
    this.setState(prevState => ({ modalDisplay: !prevState.modalDisplay }));
  }

  render() {
    const {
      id, location, comment, createdon, type, modalDisplay, status,
    } = this.state;
    const statusClass = status === 'under investigation' ? 'under-investigation' : status;
    return (
      <>
        <ViewModal
          displayModal={modalDisplay}
          closeModal={this.toggleModal}
          comment={comment}
        />
        <tr className="row">
          <td className="cell id">{id}</td>
          <td className="cell type">{type}</td>
          <td
            className="cell comment-and-media"
            onClick={this.toggleModal}
            onKeyPress={this.toggleModal}
            role="presentation"
          >
            {`${comment.slice(0, 10)}...`}
          </td>
          <td className="cell location">{location}</td>
          <td className="cell createdon">{createdon}</td>
          <td className="cell status">
            <select
              className={`select ${statusClass}`}
              name="status"
              id="status"
              value={status}
              onChange={
                async (event) => {
                  await this.setState({ status: event.target.value });
                  this.changeStatus(event);
                }
              }
            >
              <option value="under investigation">under investigation</option>
              <option value="draft">draft</option>
              <option value="resolved">resolved</option>
              <option value="rejected">rejected</option>
            </select>
          </td>
        </tr>
      </>
    );
  }
}

ReportRow.propTypes = {
  report: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  changeReportStatus: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  fetching: state.fetchStatus.fetching,
  isLoggedIn: state.auth.isLoggedIn,

});

export default connect(mapStateToProps, { changeReportStatus })(ReportRow);
