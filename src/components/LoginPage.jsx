// import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import RegisterForm from './AuthForm';
import { signUpUser } from '../actions/auth';

export class SignUpPage extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(userData) {
    const { signUpUser: registerUser, history } = this.props;
    registerUser(userData);
    history.push('/signup');
  }

  render() {
    return (
      <div>
        <RegisterForm
          onSubmit={this.onSubmit}
          formType="login" // possible values are "registration" or "login"
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signUpUser: userData => dispatch(signUpUser(userData))
});

export default connect(
  undefined,
  mapDispatchToProps
)(SignUpPage);
