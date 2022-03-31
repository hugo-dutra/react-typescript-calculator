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
    const newConcatvalue = newCurrentValue.toString();
    return {
      bufferedNumber: newBufferedValue,
      currentNumber: newCurrentValue,
      concatNumber: newConcatvalue,
      clearNext: true
    }
  }
  subtraction(): CalculatorType {
    return this.crrState
  }
  division(): CalculatorType {
    return this.crrState
  }
  multiplication(): CalculatorType {
    return this.crrState
  }
  percentage(): CalculatorType {
    return this.crrState
  }
  invertSignal(): CalculatorType {
    return this.crrState
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