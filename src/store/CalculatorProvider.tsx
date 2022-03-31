import React, { useState } from "react"

//Tipo de Objeto a ser atualizado
export type CalculatorType = {
  currentNumber: number,
  bufferedNumber: number,
  concatNumber: string
}

//Tipagem das props do contexto
export type PropsCalculatorContext = {
  state: CalculatorType,
  setState: React.Dispatch<React.SetStateAction<CalculatorType>>
}

//Valor inicial padrao
export const DEFAULT_CALC_VALUE: PropsCalculatorContext = {
  state: {
    currentNumber: 0,
    bufferedNumber: 0,
    concatNumber: '',
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