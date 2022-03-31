import { DEFAULT_CALC_VALUE } from './../store/CalculatorProvider';
import { ButtonLabels } from "../enums/ButtonLabels";
import { BasicCalculator } from "../interfaces/BasicCalculator";
import { CalculatorType } from "../store/CalculatorProvider";

export class BasicCalculatirImpl implements BasicCalculator {
  private crrState: CalculatorType;
  constructor(currentState: CalculatorType) {
    this.crrState = currentState;
  }

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
    const newBufferedValue = this.crrState.currentNumber - this.crrState.bufferedNumber;
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
  division(): CalculatorType {
    const newBufferedValue = this.crrState.currentNumber / this.crrState.bufferedNumber;
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
    const newBufferedValue = this.crrState.currentNumber * this.crrState.bufferedNumber;
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
  percentage(): CalculatorType {
    const newBufferedValue = this.crrState.bufferedNumber * this.crrState.currentNumber / 100;
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
  invertSignal(): CalculatorType {
    const newBufferedValue = -1 * this.crrState.bufferedNumber
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
      default:
        break;
    }
    throw new Error("Method not implemented.");
  }






}