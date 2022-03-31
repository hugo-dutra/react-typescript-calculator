import { DEFAULT_CALC_VALUE } from './../store/CalculatorProvider';
import { BUTTON_LABELS } from "../enums/ButtonLabels";
import { BasicCalculator } from "../interfaces/BasicCalculator";
import { CalculatorType } from "../store/CalculatorProvider";
import { OPERATIONS } from '../enums/Operations';

export class BasicCalculatirImpl implements BasicCalculator {
  private crrState: CalculatorType;
  constructor(currentState: CalculatorType) {
    this.crrState = currentState;
  }
  private lastOperation: any;

  sum(): CalculatorType {
    const newBufferedValue = this.crrState.currentNumber + this.crrState.bufferedNumber;
    const newCurrentValue = newBufferedValue;
    const newConcatvalue = '';
    return {
      bufferedNumber: newBufferedValue,
      currentNumber: newCurrentValue,
      concatNumber: newConcatvalue,
      clearNext: true,
      displayText: newBufferedValue.toString(),
      lastOperation: OPERATIONS.PLUS
    }
  }
  subtraction(): CalculatorType {
    const newBufferedValue = this.crrState.bufferedNumber - this.crrState.currentNumber;
    const newCurrentValue = newBufferedValue;
    const newConcatvalue = '';
    return {
      bufferedNumber: newBufferedValue,
      currentNumber: newCurrentValue,
      concatNumber: newConcatvalue,
      clearNext: true,
      displayText: newBufferedValue.toString(),
      lastOperation: OPERATIONS.MINUS
    }
  }
  multiplication(): CalculatorType {
    let newBufferedValue = 0;
    let newCurrentValue = 0;
    let newConcatvalue = '';
    if (this.crrState.bufferedNumber > 0) {
      newBufferedValue = this.crrState.currentNumber * this.crrState.bufferedNumber;
      newCurrentValue = newBufferedValue;
      newConcatvalue = '';
    } else {
      newBufferedValue = this.crrState.currentNumber;
      newCurrentValue = newBufferedValue;
      newConcatvalue = '';
    }
    return {
      bufferedNumber: newBufferedValue,
      currentNumber: newCurrentValue,
      concatNumber: newConcatvalue,
      clearNext: true,
      displayText: newBufferedValue.toString(),
      lastOperation: OPERATIONS.MULTIPLY
    }

  }
  division(): CalculatorType {
    let newBufferedValue = 0;
    let newCurrentValue = 0;
    let newConcatvalue = '';
    if (this.crrState.bufferedNumber > 0) {
      newBufferedValue = this.crrState.bufferedNumber / this.crrState.currentNumber;
      newCurrentValue = newBufferedValue;
      newConcatvalue = '';
    } else {
      newBufferedValue = this.crrState.currentNumber;
      newCurrentValue = newBufferedValue;
      newConcatvalue = '';
    }
    return {
      bufferedNumber: newBufferedValue,
      currentNumber: newCurrentValue,
      concatNumber: newConcatvalue,
      clearNext: true,
      displayText: newBufferedValue.toString(),
      lastOperation: OPERATIONS.DIVIDE
    }
  }

  percentage(): CalculatorType {
    let newBufferedValue = 0;
    let newCurrentValue = 0;
    let newConcatvalue = '';
    if (this.crrState.bufferedNumber > 0) {
      newBufferedValue = this.crrState.bufferedNumber * this.crrState.currentNumber / 100;
      newCurrentValue = newBufferedValue;
      newConcatvalue = '';
    } else {
      newBufferedValue = this.crrState.currentNumber;
      newCurrentValue = newBufferedValue;
      newConcatvalue = '';
    }
    return {
      bufferedNumber: newBufferedValue,
      currentNumber: newCurrentValue,
      concatNumber: newConcatvalue,
      clearNext: true,
      displayText: newBufferedValue.toString(),
      lastOperation: OPERATIONS.PERCENT
    }
  }
  invertSignal(): CalculatorType {
    const newBufferedValue = -1 * this.crrState.currentNumber
    const newCurrentValue = newBufferedValue;
    const newConcatvalue = '';
    return {
      bufferedNumber: newBufferedValue,
      currentNumber: newCurrentValue,
      concatNumber: newConcatvalue,
      clearNext: true,
      displayText: newBufferedValue.toString(),
      lastOperation: OPERATIONS.PLUS_MINUS
    }
  }
  equal(): CalculatorType {
    return this.sum();
  }
  clearValues(): CalculatorType {
    return DEFAULT_CALC_VALUE.state
  }
  performCalculation(buttonLabel: BUTTON_LABELS, currentState: CalculatorType): CalculatorType {
    this.crrState = currentState
    switch (buttonLabel) {
      case BUTTON_LABELS.PLUS: return this.sum()
      case BUTTON_LABELS.MINUS: return this.subtraction()
      case BUTTON_LABELS.MULTIPLY: return this.multiplication()
      case BUTTON_LABELS.DIVIDE: return this.division()
      case BUTTON_LABELS.EQUAL: return this.equal()
      case BUTTON_LABELS.PLUS_MINUS: return this.invertSignal()
      default:
        break;
    }
    throw new Error("Method not implemented.");
  }






}