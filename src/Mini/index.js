import React, { Component, PropTypes } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export default class Container extends Component {
  static propTypes = {
    open: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.props.open.bind(this)} style={styles.miniView}>
          <Text style={styles.miniText}>Logger</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

