import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import Mini from './Mini';
import Modal from './Modal';

const LOGGER = '__react_native_logger_client__';

// init logger list.
global[LOGGER] = [];

function add(options, level) {
  global[LOGGER].push({
    ...options,
    level,
  });
}

const logger = {
  log: (options) => add(options),
  info: (options) => add(options, 'info'),
  warn: (options) => add(options, 'warn'),
  error: (options) => add(options, 'error'),
};

function integrate(console) {
  const _console = { ...console };
  ['log', 'info', 'warn', 'error'].map((func) => {
    console[func] = (...params) => {
      _console[func].apply(undefined, params);
      logger[func]({ messages: params });
    };
  });
}

export default class Container extends Component {
  static propTypes = {
    console: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    integrate(props.console);
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
