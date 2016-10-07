import React, { Component, PropTypes } from 'react';
import Main from './Main';
import Log from './Log';

const LOGGER = '__react_native_logger_client__';

function init() {
  global[LOGGER] = [];
}

function addLog(messages, level) {
  global[LOGGER].push(<Log level={level} messages={messages} />);
}

function integrate(console) {
  const _console = { ...console };
  ['log', 'info', 'warn', 'error'].map((type) => {
    console[type] = (...messages) => {
      _console[type].apply(undefined, messages);
      addLog.call(undefined, messages, type);
    };
  });
}

export default class Container extends Component {
  static propTypes = {
    console: PropTypes.object,
  }

  constructor(props) {
    super(props);
    integrate(props.console || console);
    init();
  }

  render() {
    return (
      <Main data={global[LOGGER]} clear={this.clear.bind(this)} />
    );
  }

  clear() {
    init();
    this.forceUpdate();
  }
}
