import React, { useState, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import Content from '../../components/commons/Content';
import Result from '../../components/commons/Result';
import { regexNumberOnly } from '../../utils/regex';

const Calculator = () => {
  const [result, setResult] = useState('');

  const onClick = useCallback((value) => {
    setResult((prevState) => prevState + value);
  }, []);

  const operatorChecking = useCallback(
    (action) => {
      const lastChar = result.split('').pop();
      if (regexNumberOnly.test(lastChar)) {
        return true;
      }
      return false;
    },
    [result],
  );

  const onAction = useCallback(
    (action) => {
      switch (action) {
        case '⌫':
          setResult((prevState) => {
            const del = prevState.split('');
            del.pop();
            const returnText = del.join('');
            return returnText;
          });
          break;
        case '+':
          if (operatorChecking(action)) {
            setResult((prevState) => prevState + action);
          }
          break;
        case '/':
          if (operatorChecking(action)) {
            setResult((prevState) => prevState + action);
          }
          break;
        case '-':
          if (operatorChecking(action)) {
            setResult((prevState) => prevState + action);
          }
          break;
        case '*':
          if (operatorChecking(action)) {
            setResult((prevState) => prevState + action);
          }
          break;
        case '.':
          if (operatorChecking(action)) {
            setResult((prevState) => prevState + action);
          }
          break;
        case '=':
          if (operatorChecking(action)) {
          }
          break;
        default:
          return;
      }
    },
    [operatorChecking],
  );

  return (
    <View style={styles.screen}>
      <Result value={result} />
      <Content onClick={onClick} onAction={onAction} />
    </View>
  );
};

export default Calculator;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
