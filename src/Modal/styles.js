import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 12,
    padding: 10,
  },
  buttonBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttonView: {
    marginLeft: 5,
  },
  buttonText: {
    backgroundColor: '#85144b',
    textAlign: 'center',
    width: 60,
    padding: 3,
    color: '#fff',
  },
  item: {
    flexDirection: 'row',
  },
  dot: {
    borderRadius: 5,
    marginRight: 5,
  },
  msg: {
    flex: 1,
    flexWrap: 'wrap',
  },
});

