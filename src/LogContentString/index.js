import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';
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


    // TODO: use lodash.
    let content;
    if (value === undefined) {
      content = <Text style={styles.valueUndefined}>undefined</Text>;
    } else if (value === null) {
      content = <Text style={styles.valueUndefined}>null</Text>;
    } else if (value === true || value === false) {
      content = <Text style={styles.valueBool}>{value.toString()}</Text>;
    } else if (Number.isInteger(value)) {
      content = <Text style={styles.valueNumber}>{value}</Text>;
    } else {
      content = (
        <View style={styles.row}>
          <Text>"</Text>
          <Text style={styles.valueString}>{value.toString()}</Text>
          <Text>"</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        {name !== undefined &&
          <Text>{name}:</Text>
        }
        {content}
      </View>
    );
  }
}
