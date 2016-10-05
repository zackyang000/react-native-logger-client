import React, { Component, PropTypes } from 'react';
import { View, ScrollView, TouchableOpacity, Text, Modal } from 'react-native';
import styles from './styles';

export default class Container extends Component {
  static propTypes = {
    show: PropTypes.bool.isRequired,
    clear: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
    logs: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  renderLevel(level) {
    const color = {
      'info': '#0074D9',
      'warn': '#FF851B',
      'error': '#FF4136',
    }[level] || '#AAAAAA';

    return <Text style={[styles.dot, { color }]}>•</Text>;
  }

  renderObject(obj, key, id) {
    return (
      <View>
        {typeof obj === 'object' &&
          <TouchableOpacity onPress={this.toggle.bind(this, id)}>
            <Text>
              ▶
              {key}
              {key ? ': ' : ''}
              Ojbect
            </Text>
          </TouchableOpacity>
        }
        {typeof obj !== 'object' &&
          <Text>{obj}</Text>
        }
        {typeof obj === 'object' && this.state[id] &&
          <View style={styles.object}>
            {Object.keys(obj).map((child) =>
              this.renderObject(obj[child], child, id + child)
            )}
          </View>
        }
    </View>
    );
  }

  renderMessage(message) {
    return this.renderObject(message);
  }

  renderItem(item) {
    // TODO: ignore the user's custom style for this version.
    const existCustomStyle = item.messages
    && item.messages[0]
    && typeof item.messages[0] === 'string'
    && item.messages[0].indexOf('%c') === 0;
    if (existCustomStyle) {
      item.messages = [
        item.messages[0].indexOf('%c ') === 0
        ? item.messages[0].substring(3)
        : item.messages[0].substring(2),
        ...item.messages.slice(2),
      ];
    }

    return (
      <View style={styles.item}>
        {this.renderLevel(item.level)}
        <View style={styles.messages}>
          {item.messages.map(this.renderMessage.bind(this))}
        </View>
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
            {logs.map(this.renderItem.bind(this))}
          </ScrollView>
        </View>
      </Modal>
    );
  }

  toggle(id) {
    this.setState({ [id]: !this.state.id });
  }
}

