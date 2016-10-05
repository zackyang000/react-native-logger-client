import React, { Component, PropTypes } from 'react';
import { View, ScrollView, TouchableOpacity, Text, Modal } from 'react-native';
import styles from './styles';

export default class Container extends Component {
  static propTypes = {
    level: PropTypes.string,
    messages: PropTypes.array.isRequired,
  }

  static defaultProps = {
    level: 'info',
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  renderLevel(level) {
    const color = {
      'log': '#AAA',
      'info': '#0074D9',
      'warn': '#FF851B',
      'error': '#FF4136',
    }[level];

    return <Text style={[styles.dot, { color }]}>•</Text>;
  }

  renderObject(message, key, id) {
    return (
      <View>
        {typeof message === 'object' &&
          <TouchableOpacity onPress={this.toggle.bind(this, id)}>
            <Text>
              ▶
              {key}
              {key ? ': ' : ''}
              Ojbect
            </Text>
          </TouchableOpacity>
        }
        {typeof message !== 'object' &&
          <Text>{message}</Text>
        }
        {typeof message === 'object' && this.state[id] &&
          <View style={styles.object}>
            {Object.keys(message).map((child) =>
              this.renderObject(message[child], child, id + child)
            )}
          </View>
        }
      </View>
    );
  }

  renderMessage(message) {
    return this.renderObject(message);
  }

  render() {
    let { level, messages } = this.props;

    // TODO: ignore the user's custom style for this version.
    const existCustomStyle = messages
    && messages[0]
    && typeof messages[0] === 'string'
    && messages[0].indexOf('%c') === 0;
    if (existCustomStyle) {
      messages = [
        messages[0].indexOf('%c ') === 0
        ? messages[0].substring(3)
        : messages[0].substring(2),
        ...messages.slice(2),
      ];
    }

    return (
      <View style={styles.container}>
        {this.renderLevel(level)}
        <View style={styles.messages}>
          {messages.map(this.renderMessage.bind(this))}
        </View>
      </View>
    );
  }

  toggle(id) {
    this.setState({ [id]: !this.state[id] });
  }
}
