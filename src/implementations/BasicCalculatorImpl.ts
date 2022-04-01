import { DEFAULT_CALC_VALUE } from "./../store/CalculatorProvider";
import { BUTTON_LABELS } from "../enums/ButtonLabels";
import { BasicCalculator } from "../interfaces/BasicCalculator";
import { CalculatorType } from "../store/CalculatorProvider";
import { OPERATIONS } from "../enums/Operations";

export class BasicCalculatirImpl implements BasicCalculator {
  private crrState: CalculatorType;
  constructor(currentState: CalculatorType) {
    this.crrState = currentState;
  }
  sum(clearCurrentNumber: boolean): CalculatorType {
    

    return clearCurrentNumber
      ? {
          currentNumber: 0,
          bufferedNumber: 0,
          concatNumber: "",
          clearNext: true,
          displayText: this.crrState.currentNumber.toString(),
          lastOperation: OPERATIONS.EQUAL,
        }
      : {
          currentNumber: this.crrState.currentNumber,
          bufferedNumber: 0,
          concatNumber: "",
          clearNext: true,
          displayText: this.crrState.currentNumber.toString(),
          lastOperation: OPERATIONS.PLUS,
        };
  }
  subtraction(clearCurrentNumber: boolean): CalculatorType {
   

    return clearCurrentNumber
      ? {
          currentNumber: this.crrState.currentNumber,
          bufferedNumber: 0,
          concatNumber: "",
          clearNext: true,
          displayText: this.crrState.currentNumber.toString(),
          lastOperation: OPERATIONS.EQUAL,
        }
      : {
          currentNumber: 0,
          bufferedNumber: 0,
          concatNumber: "",
          clearNext: true,
          displayText: this.crrState.currentNumber.toString(),
          lastOperation: OPERATIONS.MINUS,
        };
  }
  multiplication(clearCurrentNumber: boolean): CalculatorType {
   
    return clearCurrentNumber
      ? {
          currentNumber: 0,
          bufferedNumber: 0,
          concatNumber: "",
          clearNext: true,
          displayText: this.crrState.currentNumber.toString(),
          lastOperation: OPERATIONS.EQUAL,
        }
      : {
          currentNumber: 0,
          bufferedNumber: 0,
          concatNumber: "",
          clearNext: true,
          displayText: this.crrState.currentNumber.toString(),
          lastOperation: OPERATIONS.MULTIPLY,
        };
  }
  division(clearCurrentNumber: boolean): CalculatorType {
   
    return clearCurrentNumber
      ? {
          currentNumber: 0,
          bufferedNumber: 0,
          concatNumber: "",
          clearNext: true,
          displayText: this.crrState.currentNumber.toString(),
          lastOperation: OPERATIONS.EQUAL,
        }
      : {
          currentNumber: 0,
          bufferedNumber: 0,
          concatNumber: "",
          clearNext: true,
          displayText: this.crrState.currentNumber.toString(),
          lastOperation: OPERATIONS.DIVIDE,
        };
  }
  percentage(clearCurrentNumber: boolean): CalculatorType {
    return clearCurrentNumber
      ? {
          currentNumber: 0,
          bufferedNumber: 0,
          concatNumber: "",
          clearNext: true,
          displayText: "",
          lastOperation: OPERATIONS.EQUAL,
        }
      : {
          currentNumber: 0,
          bufferedNumber: 0,
          concatNumber: "",
          clearNext: true,
          displayText: "",
          lastOperation: OPERATIONS.PERCENT,
        };
  }
  invertSignal(clearCurrentNumber: boolean): CalculatorType {
    return clearCurrentNumber
      ? {
          currentNumber: 0,
          bufferedNumber: 0,
          concatNumber: "",
          clearNext: true,
          displayText: "",
          lastOperation: OPERATIONS.EQUAL,
        }
      : {
          currentNumber: 0,
          bufferedNumber: 0,
          concatNumber: "",
          clearNext: true,
          displayText: "",
          lastOperation: OPERATIONS.PLUS_MINUS,
        };
  }
  clearValues(): CalculatorType {
    return DEFAULT_CALC_VALUE.state;
  }
  performCalculation(
    buttonLabel: BUTTON_LABELS,
    currentState: CalculatorType
  ): CalculatorType {
    this.crrState = currentState;
    switch (buttonLabel) {
      case BUTTON_LABELS.PLUS:
        return this.sum(false);
      case BUTTON_LABELS.MINUS:
        return this.subtraction(false);
      case BUTTON_LABELS.MULTIPLY:
        return this.multiplication(false);
      case BUTTON_LABELS.DIVIDE:
        return this.division(false);
      case BUTTON_LABELS.EQUAL:
        switch (this.crrState.lastOperation) {
          case OPERATIONS.PLUS:
            return this.sum(true);
          case OPERATIONS.MINUS:
            return this.subtraction(true);
          case OPERATIONS.MULTIPLY:
            return this.multiplication(true);
          case OPERATIONS.DIVIDE:
            return this.division(true);
        }
        return DEFAULT_CALC_VALUE.state;
      case BUTTON_LABELS.PLUS_MINUS:
        return this.invertSignal(false);
      default:
        return DEFAULT_CALC_VALUE.state;
    }
  }
}
