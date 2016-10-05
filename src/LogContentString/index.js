import React, { Component, PropTypes } from 'react';
import { View, ScrollView, TouchableOpacity, Text, Modal } from 'react-native';
import styles from './styles';

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
