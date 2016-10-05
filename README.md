react-native-logger-client
==========

A Logger that runs on the device is the same as the chrome console.

  [![NPM Version](https://img.shields.io/npm/v/react-native-logger-client.svg?style=flat)](https://www.npmjs.org/package/react-native-logger-client)
  [![npm](https://img.shields.io/npm/dm/react-native-logger-client.svg?style=flat)](https://www.npmjs.org/package/react-native-logger-client)
  [![Build Status](https://travis-ci.org/TossShinHwa/react-native-logger-client.svg?branch=master&style=flat)](https://travis-ci.org/TossShinHwa/react-native-logger-client)
  [![License](http://img.shields.io/npm/l/react-native-logger-client.svg?style=flat)](https://raw.githubusercontent.com/TossShinHwa/react-native-logger-client/master/LICENSE)

## Usage

```js
render() {
  return (
    <View>
      <App />
      {/* Let it be at the top of the app */}
      <Logger />
    </View>
  );
}
```

## API
It will automatically integrate with the console, when you use such as `console.log`, it will be output to the device.

The following features are currently integrated.

* Console
  * [x] log
  * [x] info
  * [x] warn
  * [x] error

## Installation

```js
npm install --save react-native-logger-client
```

## TODO
* [ ] Mini window can be dragged
* [ ] Mini window should be change when log something
* [ ] Custom filter log by type
* [ ] Show timestamps
* [ ] Custom style output
