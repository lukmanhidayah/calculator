import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const Result = () => {
  return (
    <View style={styles.content}>
      <Text style={styles.textResult}>0</Text>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  textResult: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
  },
});
