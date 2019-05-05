import React, { Fragment, Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { authorise } from '../actions/auth';

export class FormAuth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      username: '',
      othernames: '',
      email: '',
      password: '',
      phoneNumber: '',
      adminSecret: '',
    };

    this.formType = props.formType;
    this.history = props.history;

    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit(e) {
    e.preventDefault();
    const {
      authorise: handleAuthorisation,
    } = this.props;
    await handleAuthorisation({ ...this.state }, this.formType);

    const { isLoggedIn, fetching } = this.props;
    if (!fetching && isLoggedIn) {
      this.history.push('/');
    }
  }

  render() {
    const {
      firstname,
      lastname,
      othernames,
      username,
      email,
      password,
      phoneNumber,
      adminSecret,
    } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.onSubmit} className="container__form">
          <input
            className="container__form-input"
            type="email"
            id="email"
            placeholder="email"
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
            required
          />
          <input
            className="container__form-input"
            type="text"
            id="password"
            placeholder="password"
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
            required
          />
          {this.formType === 'signup' && (
            <Fragment>
              <input
                className="container__form-input"
                type="text"
                id="firstname"
                value={firstname}
                onChange={e => this.setState({ firstname: e.target.value })}
                placeholder="first name"
                required
              />
              <input
                className="container__form-input"
                type="text"
                id="lastname"
                value={lastname}
                onChange={e => this.setState({ lastname: e.target.value })}
                placeholder="last name"
                required
              />
              <input
                className="container__form-input"
                type="text"
                id="othernames"
                value={othernames}
                onChange={e => this.setState({ othernames: e.target.value })
                }
                placeholder="other names"
              />
              <input
                className="container__form-input"
                type="text"
                id="username"
                value={username}
                onChange={e => this.setState({ username: e.target.value })}
                placeholder="username"
              />
              <input
                className="container__form-input"
                type="text"
                id="phonenumber"
                placeholder="phone number"
                value={phoneNumber}
                onChange={e => this.setState({ phoneNumber: e.target.value })
                }
                required
              />
              <input
                className="container__form-input"
                type="text"
                id="adminSecret"
                placeholder="admin secret key"
                value={adminSecret}
                onChange={e => this.setState({ adminSecret: e.target.value })
                }
              />
              {/* <input
                className="container__form-input"
                type="file"
                id="input-file-pic"
              /> */}
            </Fragment>
          )}
          <button className="container__form-btn" id="btn-reg" type="submit">
            {this.formType === 'signup' ? 'REGISTER' : 'LOGIN'}
          </button>
        </form>
      </div>
    );
  }
}

FormAuth.defaultProps = {
  formType: 'signup',
  isLoggedIn: false,
  fetching: false,
};

FormAuth.propTypes = {
  authorise: propTypes.func.isRequired,
  formType: propTypes.string,
  isLoggedIn: propTypes.bool,
  fetching: propTypes.bool,
  history: propTypes.oneOfType([propTypes.object, propTypes.func]).isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  fetching: state.fetchStatus.fetching,

});

const FormLoginAndSignup = connect(mapStateToProps, { authorise })(FormAuth);

export default FormLoginAndSignup;
