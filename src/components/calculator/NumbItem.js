import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
const WIDTH = Dimensions.get('window').width;
const NumbItem = ({ onPress, value }) => {
  return (
    <TouchableOpacity>
      <View style={[styles.numbContent]}>
        <Text style={[styles.textNumber]}>{value}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NumbItem;

const styles = StyleSheet.create({
  numbContent: {
    backgroundColor: '#CCC',
    width: WIDTH / 6,
    aspectRatio: 1,
    borderRadius: WIDTH / 8,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  textNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
