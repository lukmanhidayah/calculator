import React from 'react';
import { StyleSheet, View } from 'react-native';
import NumbItem from '../calculator/NumbItem';
import OperatorItem from '../calculator/OperatorItem';

const numb = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, '.', '='];
const operator = ['⌫', '+', '-', '/', '*'];

const Content = () => {
  return (
    <View style={styles.content}>
      <View style={styles.numbContainer}>
        {numb.map((res) => {
          return <NumbItem key={res} value={res} />;
        })}
      </View>
      <View style={styles.operatorContainer}>
        {operator.map((res) => {
          return <OperatorItem key={res} value={res} />;
        })}
      </View>
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    padding: 20,
    flexDirection: 'row',
  },
  numbContainer: {
    flex: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '100%',
    borderRightWidth: 0.5,
    borderRightColor: 'rgba(255,255,255,.2)',
  },
  operatorContainer: {
    flex: 1,
    alignItems: 'flex-start',
    marginLeft: 5,
  },
});
