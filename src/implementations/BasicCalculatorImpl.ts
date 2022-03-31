import { DEFAULT_CALC_VALUE } from './../store/CalculatorProvider';
import { ButtonLabels } from "../enums/ButtonLabels";
import { BasicCalculator } from "../interfaces/BasicCalculator";
import { CalculatorType } from "../store/CalculatorProvider";

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
      displayText: newBufferedValue.toString()
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
      displayText: newBufferedValue.toString()
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
      displayText: newBufferedValue.toString()
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
      displayText: newBufferedValue.toString()
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
      displayText: newBufferedValue.toString()
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
      displayText: newBufferedValue.toString()
    }
  }
  equal(): CalculatorType {
    return this.sum();
  }
  clearValues(): CalculatorType {
    return DEFAULT_CALC_VALUE.state
  }
  performCalculation(buttonLabel: ButtonLabels, currentState: CalculatorType): CalculatorType {
    this.crrState = currentState
    switch (buttonLabel) {
      case ButtonLabels.PLUS: return this.sum()
      case ButtonLabels.MINUS: return this.subtraction()
      case ButtonLabels.MULTIPLY: return this.multiplication()
      case ButtonLabels.DIVIDE: return this.division()
      case ButtonLabels.EQUAL: return this.equal()
      case ButtonLabels.PLUS_MINUS: return this.invertSignal()
      default:
        break;
    }
    throw new Error("Method not implemented.");
  }






}