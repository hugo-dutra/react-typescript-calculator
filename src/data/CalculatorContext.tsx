import React from "react";
import { Operations } from "../enums/operations.enum";

export type CalcContext = {
    currentNumber:number,
    bufferedNumber:number,
    currentOperation:Operations
    historyOperations:number[] | Operations[];
}

export const CalculatorContext = React.createContext<CalcContext | null>(null);

