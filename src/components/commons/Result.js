import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
const Result = ({ value = 0 }) => {
  return (
    <ScrollView style={styles.content}>
      <Text style={styles.textResult}>{value}</Text>
    </ScrollView>
  );
};

export default Result;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#121212',
    transform: [{ scaleY: -1 }],
  },
  textResult: {
    fontSize: 50,
    padding: 10,
    fontWeight: 'bold',
    color: 'white',
    transform: [{ scaleY: -1 }],
    textAlign: 'right',
  },
});
