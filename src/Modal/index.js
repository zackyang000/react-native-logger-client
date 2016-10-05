import React, { Component, PropTypes } from 'react';
import { View, ScrollView, TouchableOpacity, Text, Modal } from 'react-native';
import styles from './styles';

export default class Container extends Component {
  static propTypes = {
    show: PropTypes.bool.isRequired,
    clear: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    const { show, clear, close, data } = this.props;

    return (
      <Modal
        transparent={false}
        visible={show}
        onRequestClose={() => {}}
        style={styles.container}
      >
        <View style={styles.container}>
          <View style={styles.buttonBar}>
            <TouchableOpacity style={styles.buttonView} onPress={clear}>
              <Text style={styles.buttonText}>Clear</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonView} onPress={close}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
          <ScrollView>{data}</ScrollView>
        </View>
      </Modal>
    );
  }
}

