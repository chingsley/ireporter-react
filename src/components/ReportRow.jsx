/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ViewModal from './Modal';
import { changeReportStatus } from '../actions/report';

export class ReportRow extends Component {
  constructor(props) {
    super(props);
    const { report, client } = props;

    this.state = {
      redirect: false,
      url: null,
      id: report ? report.id : '',
      address: report ? report.address : '',
      location: report ? report.location : '',
      comment: report ? report.comment : '',
      images: report ? report.Images : [],
      videos: report ? report.Videos : [],
      status: report ? report.status : 'draft',
      type: report ? report.type : 'unspecified',
      createdon: report ? JSON.stringify(report.createdOn).slice(1, 11) : 'unspecified',
      createdby: report ? report.createdBy : 'anonymous',
      modalDisplay: false,
      client,
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.goToEditPage = this.goToEditPage.bind(this);
  }

  changeStatus() {
    const { changeReportStatus: handleStatusChange } = this.props;
    handleStatusChange({ ...this.state });
  }

  goToEditPage() {
    const { history } = this.props;
    const { id, status } = this.state;
    return (status === 'draft') ? history.push(`/report/${id}`) : history.push('/reports');
  }

  toggleModal() {
    this.setState(prevState => ({ modalDisplay: !prevState.modalDisplay }));
  }

  render() {
    const {
      id, location, comment, createdon, type, modalDisplay, status, client, images,
    } = this.state;
    const statusClass = status === 'under investigation' ? 'under-investigation' : status;
    // console.log('\n\nimages.length', id, images, ':', images.length);
    return (
      <>
        <ViewModal
          displayModal={modalDisplay}
          closeModal={this.toggleModal}
          comment={comment}
          image={images.length > 0 ? images[0] : 'https://via.placeholder.com/700x400'}
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
          {client === 'admin' && (
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
          )}
          {client === 'user' && (
            <>
              <td className={`cell status client-view-${status}`}>{status}</td>
              <td
                className="cell td-edit-report"
                onClick={this.goToEditPage}
                onKeyPress={this.goToEditPage}
                role="presentation"
              >
                {(client === 'user' && status === 'draft') ? 'Edit' : ''}
              </td>
              {/* <td className="cell td-Delete-report">{(client === 'user' && status === 'draft') ? 'X' : ''}</td> */}
            </>
          )}
        </tr>
      </>
    );
  }
}

ReportRow.propTypes = {
  history: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  report: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  changeReportStatus: PropTypes.func.isRequired,
  client: PropTypes.string,
};

ReportRow.defaultProps = {
  client: 'user',
};

const mapStateToProps = state => ({
  fetching: state.fetchStatus.fetching,
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps, { changeReportStatus })(ReportRow);
