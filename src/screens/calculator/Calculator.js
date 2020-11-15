import React, { useState, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import Content from '../../components/commons/Content';
import Result from '../../components/commons/Result';
import { regexCheckSymbol, regexNumberOnly, regexDot } from '../../utils/regex';
import { evaluate } from 'mathjs';

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

  const insertInput = useCallback(
    (value) => {
      const checkValue = result.split(regexCheckSymbol);
      if (value !== '=') {
        if (checkValue.length > 1) {
          const tampResult = evaluate(result);
          setResult(tampResult.toString() + value);
        } else {
          setResult((prevState) => prevState + value);
        }
      } else {
        if (checkValue.length > 1) {
          const tampResult = evaluate(result);
          setResult(tampResult.toString());
        }
      }
    },
    [result],
  );

  const checkDot = useCallback((value, stringValue) => {
    if (stringValue.split(regexDot).length === 1) {
      setResult((prevState) => prevState + value);
    }
  }, []);

  const dotOperation = useCallback(
    (value) => {
      const checkValue = result.split(regexCheckSymbol);

      if (checkValue.length > 1) {
        const secondValue = checkValue[1];
        checkDot(value, secondValue);
      } else {
        checkDot(value, result);
      }
    },
    [result, checkDot],
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
            insertInput(action);
          }
          break;
        case '/':
          if (operatorChecking(action)) {
            insertInput(action);
          }
          break;
        case '-':
          if (operatorChecking(action)) {
            insertInput(action);
          }
          break;
        case '*':
          if (operatorChecking(action)) {
            insertInput(action);
          }
          break;
        case '.':
          dotOperation(action);
          break;
        case '=':
          if (operatorChecking(action)) {
            insertInput(action);
          }
          break;
        default:
          return;
      }
    },
    [operatorChecking, insertInput, dotOperation],
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
