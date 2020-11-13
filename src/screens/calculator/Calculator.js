import React from 'react';
import { StyleSheet, View } from 'react-native';
import Content from '../../components/commons/Content';
import Result from '../../components/commons/Result';

const Calculator = () => {
  return (
    <View style={styles.screen}>
      <Result />
      <Content />
    </View>
  );
};

export default Calculator;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
