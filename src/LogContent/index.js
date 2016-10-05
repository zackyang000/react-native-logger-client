import React, { Component, PropTypes } from 'react';
import { View, ScrollView, TouchableOpacity, Text, Modal } from 'react-native';
import styles from './styles';
import LogContentObject from '../LogContentObject';
import LogContentArray from '../LogContentArray';
import LogContentString from '../LogContentString';

export default class Container extends Component {
  static propTypes = {
    message: PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  renderMessage(message, name, id) {
    return (
      <View>
        {this.renderMessageContent(message, name, id)}
        {this.renderMessageChildren(message, id)}
      </View>
    );
  }

  renderMessageContent(message, name, id) {
    if (message instanceof Array) {
      return <LogContentArray isShow={this.state[id]} toggle={this.toggle.bind(this, id)} name={name} />;
    }
    else if (typeof message === 'object') {
      return <LogContentObject isShow={this.state[id]} toggle={this.toggle.bind(this, id)} name={name} />;
    }
    return <LogContentString name={name} value={message} />;
  }

  renderMessageChildren(message, id) {
    if (typeof message === 'object' && this.state[id]) {
      return (
        <View style={styles.object}>
          {Object.keys(message).map((child) =>
            this.renderMessage(message[child], child, id + child)
          )}
        </View>
      );
    }
  }

  render() {
    return this.renderMessage(this.props.message);
  }

  toggle(id) {
    this.setState({ [id]: !this.state[id] });
  }
}



