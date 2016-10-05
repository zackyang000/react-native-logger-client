import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import Mini from '../Mini';
import Modal from '../Modal';

export default class Container extends Component {
  static propTypes = {
    clear: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  componentDidMount() {
    // TODO: just for debugger
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
          data={this.props.data}
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
    this.props.clear();
  }
}

