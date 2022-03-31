import React from 'react';
import './App.css';
import CalcBody from './screens/CalcBody';
import { CalcContextProvider } from './store/CalculatorProvider';

function App() {
  return (
    <div className="App">
      <CalcContextProvider>
        <CalcBody />
      </CalcContextProvider>
    </div>
  );
}

export default App;
