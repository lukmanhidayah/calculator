import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
const WIDTH = Dimensions.get('window').width;
const OperatorItem = ({ onAction, value }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onAction(value);
      }}>
      <View style={[styles.operatorContent]}>
        <Text style={[styles.textNumber]}>{value}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default OperatorItem;

const styles = StyleSheet.create({
  operatorContent: {
    backgroundColor: '#0e0e0e',
    width: WIDTH / 8,
    aspectRatio: 1,
    borderRadius: WIDTH / 8,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  textNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
