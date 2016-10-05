import React, { Component, PropTypes } from 'react';
import { Text } from 'react-native';

export default class Container extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { name, value } = this.props;

    return <Text>{name}: {value.toString()}</Text>;
  }
}
