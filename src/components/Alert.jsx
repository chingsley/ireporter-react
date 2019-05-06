import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import EventEmitter from 'event-emitter';

const Container = styled.div`
  background-color: ${props => props.bgColor};
  color: white;
  padding: 16px;
  position: fixed;
  top: ${props => props.top}px;
  right: 100px;
  z-index: 999;
  transition: top 0.5s ease;

  > i {
    margin-left: 8px;
  }
`;

const emitter = new EventEmitter();

export const alertUser = (msg, type) => {
  emitter.emit('notification', msg, type);
};
class Alert extends Component {
  constructor(props) {
    super(props);

    this.state = {
      top: -100,
      msg: '',
      type: '',
    };

    this.timeout = null;

    emitter.on('notification', (msg, type) => {
      this.onShow(msg, type);
    });
  }

  onShow = (msg, type) => {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.setState({ top: -100 }, () => {
        this.timeout = setTimeout(() => {
          this.showAlert(msg, type);
        }, 500);
      });
    } else {
      this.showAlert(msg, type);
    }
  }

  showAlert = (msg, type) => {
    this.setState({ top: 200, msg, type }, () => {
      this.timeout = setTimeout(() => {
        this.setState({ top: -100 });
      }, 5000);
    });
  }

  render() {
    const { top, type, msg } = this.state;
    return (
      <Fragment>
        <Container top={top} bgColor={type === 'error' ? 'red' : 'green'}>
          {msg}
        </Container>
      </Fragment>
    );
  }
}

export default Alert;
