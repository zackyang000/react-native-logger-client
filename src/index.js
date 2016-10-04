import React, { Component } from 'react';
import { View } from 'react-native';
import Mini from './Mini';
import Modal from './Modal';

const LOGGER = '__react_native_logger_client__';
global[LOGGER] = [];

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  componentDidMount() {
    this.open();
  }

  render() {
    return (
      <View>
        <Mini open={this.open.bind(this)} />
        <Modal
          close={this.close.bind(this)}
          clear={this.clear.bind(this)}
          show={this.state.show}
          logs={global[LOGGER]}
        />
      </View>
    );
  }

  open() {
    this.setState({ show: true });
  }

  close() {
    this.setState({ show: false });
  }

  clear() {
    global[LOGGER] = [];
  }
}

export function log(options) {
  global[LOGGER].push(options);
}
