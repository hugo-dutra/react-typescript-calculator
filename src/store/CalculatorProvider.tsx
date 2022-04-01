import React, { useState } from "react"
import { OPERATIONS } from "../enums/Operations";

//Tipo de Objeto a ser atualizado
export type CalculatorType = {
  currentNumber: number | null,
  bufferedNumber: number | null,
  concatNumber: string,
  clearNext: boolean;
  displayText: string | undefined;
  lastOperation: OPERATIONS
}

//Tipagem das props do contexto
export type PropsCalculatorContext = {
  state: CalculatorType,
  setState: React.Dispatch<React.SetStateAction<CalculatorType>>
}

//Valor inicial padrao
export const DEFAULT_CALC_VALUE: PropsCalculatorContext = {
  state: {
    currentNumber: null,
    bufferedNumber: null,
    concatNumber: '',
    clearNext: false,
    displayText: '',
    lastOperation: OPERATIONS.EQUAL
  },
  setState: () => { }
}

const CalcContext = React.createContext<PropsCalculatorContext>(DEFAULT_CALC_VALUE);

const CalcContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_CALC_VALUE.state)
  return (
    <CalcContext.Provider value={{ state, setState }}>{children}</CalcContext.Provider>
  );
};


export { CalcContextProvider }
export default CalcContext;