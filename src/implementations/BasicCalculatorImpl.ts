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
  sum(): CalculatorType {
    const newBufferedNumber =
      this.crrState.currentNumber === 0
        ? this.crrState.bufferedNumber
        : this.crrState.bufferedNumber + this.crrState.currentNumber;
    return {
      currentNumber: 0,
      bufferedNumber: newBufferedNumber,
      concatNumber: "",
      clearNext: true,
      displayText: newBufferedNumber.toString(),
      lastOperation: OPERATIONS.PLUS,
    };
  }
  subtraction(): CalculatorType {
    const newBufferedNumber =  
      this.crrState.bufferedNumber === 0
        ? this.crrState.bufferedNumber
        : this.crrState.bufferedNumber - this.crrState.currentNumber;
    return {
      currentNumber: 0,
      bufferedNumber: newBufferedNumber,
      concatNumber: "",
      clearNext: true,
      displayText: newBufferedNumber.toString(),
      lastOperation: OPERATIONS.MINUS,
    };
  }
  multiplication(): CalculatorType {
    return {
      currentNumber: 0,
      bufferedNumber: 0,
      concatNumber: "",
      clearNext: true,
      displayText: "",
      lastOperation: OPERATIONS.MULTIPLY,
    };
  }
  division(): CalculatorType {
    return {
      currentNumber: 0,
      bufferedNumber: 0,
      concatNumber: "",
      clearNext: true,
      displayText: "",
      lastOperation: OPERATIONS.DIVIDE,
    };
  }
  percentage(): CalculatorType {
    return {
      currentNumber: 0,
      bufferedNumber: 0,
      concatNumber: "",
      clearNext: true,
      displayText: "",
      lastOperation: OPERATIONS.PERCENT,
    };
  }
  invertSignal(): CalculatorType {
    return {
      currentNumber: 0,
      bufferedNumber: 0,
      concatNumber: "",
      clearNext: true,
      displayText: "",
      lastOperation: OPERATIONS.PLUS_MINUS,
    };
  }
  equal(): CalculatorType {
    return {
      currentNumber: 0,
      bufferedNumber: 0,
      concatNumber: "",
      clearNext: true,
      displayText: "",
      lastOperation: OPERATIONS.EQUAL,
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
        return this.sum();
      case BUTTON_LABELS.MINUS:
        return this.subtraction();
      case BUTTON_LABELS.MULTIPLY:
        return this.multiplication();
      case BUTTON_LABELS.DIVIDE:
        return this.division();
      case BUTTON_LABELS.EQUAL:
        switch (this.crrState.lastOperation) {
          case OPERATIONS.PLUS:
            return this.sum();
          case OPERATIONS.MINUS:
            return this.subtraction();
          case OPERATIONS.MULTIPLY:
            return this.multiplication();
          case OPERATIONS.DIVIDE:
            return this.division();
        }
        return DEFAULT_CALC_VALUE.state;
      case BUTTON_LABELS.PLUS_MINUS:
        return this.invertSignal();
      default:
        return DEFAULT_CALC_VALUE.state;
    }
  }
}
