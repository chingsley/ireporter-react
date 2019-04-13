import React, { Fragment, Component } from 'react';

export default class SignUpForm extends Component {
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
      adminSecret: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onFirstnameChange = this.onFirstnameChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit({ ...this.state });
  }

  onFirstnameChange(e) {
    const firstname = e.target.value;
    this.setState({ firstname });
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
      adminSecret
    } = this.state;
    const { formType } = this.props;
    return (
      <form onSubmit={this.onSubmit} className="form">
        {formType === 'registration' && (
          <Fragment>
            <input
              type="text"
              id="firstname"
              value={firstname}
              onChange={this.onFirstnameChange}
              placeholder="first name"
              required
            />
            <input
              type="text"
              id="lastname"
              value={lastname}
              onChange={e => this.setState({ lastname: e.target.value })}
              placeholder="last name"
              required
            />
            <input
              type="text"
              id="othernames"
              value={othernames}
              onChange={e => this.setState({ othernames: e.target.value })}
              placeholder="other names"
            />
            <input
              type="text"
              id="username"
              value={username}
              onChange={e => this.setState({ username: e.target.value })}
              placeholder="username"
            />
            <input
              type="text"
              id="phonenumber"
              placeholder="phone number"
              value={phoneNumber}
              onChange={e => this.setState({ phoneNumber: e.target.value })}
              required
            />
            <input
              type="text"
              id="adminSecret"
              placeholder="admin secret key"
              value={adminSecret}
              onChange={e => this.setState({ adminSecret: e.target.value })}
            />
            <input type="file" id="input-file-pic" />
          </Fragment>
        )}
        <input
          type="text"
          id="email"
          placeholder="email"
          value={email}
          onChange={e => this.setState({ email: e.target.value })}
          required
        />
        <input
          type="text"
          id="password"
          placeholder="password"
          value={password}
          onChange={e => this.setState({ password: e.target.value })}
          required
        />
        <button className="btn-reg btn" id="btn-reg">
          { formType === 'registration' ? 'REGISTER' : 'LOGIN' }
        </button>
      </form>
    );
  }
}
