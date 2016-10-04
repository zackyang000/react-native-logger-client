import React, { Component, PropTypes } from 'react';
import { View, ScrollView, TouchableOpacity, Text, Modal } from 'react-native';
import moment from 'moment';
import styles from './styles';

export default class Container extends Component {
  static propTypes = {
    show: PropTypes.func.isRequired,
    clear: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
    logs: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props);
  }

  renderItem(item) {
    const level = item.level;
    const date = moment(item.date).format('mm:ss');
    const msg = typeof item.msg === 'object' ? JSON.stringify(item.msg) : item.msg;
    return (
      <View>
        <Text>{date} [{level}] {msg}</Text>
      </View>
    );
  }

  render() {
    const { show, clear, close, logs } = this.props;

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
          <ScrollView>
            {logs.map(this.renderItem)}
          </ScrollView>
        </View>
      </Modal>
    );
  }
}

