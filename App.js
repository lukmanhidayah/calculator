import React from 'react';
import { StatusBar } from 'react-native';
import Calculator from './src/screens/calculator/Calculator';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#121212" barStyle="light-content" />
      <Calculator />
    </>
  );
};

export default App;
