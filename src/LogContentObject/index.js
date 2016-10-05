import React, { Component, PropTypes } from 'react';
import { View, ScrollView, TouchableOpacity, Text, Modal } from 'react-native';
import styles from './styles';

export default class Container extends Component {
  static propTypes = {
    name: PropTypes.any,
    toggle: PropTypes.func.isRequired,
    isShow: PropTypes.bool,
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { toggle, name } = this.props;

    const icon = this.props.isShow ? '▼' : '▶';

    return (
      <TouchableOpacity onPress={toggle}>
        <Text>
          {icon} {name}{name ? ': ' : ''} Ojbect
        </Text>
      </TouchableOpacity>
    );
  }
}



