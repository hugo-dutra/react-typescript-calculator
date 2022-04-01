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

    return { ...this.crrState, lastOperation: OPERATIONS.PLUS }
  }
  subtraction(): CalculatorType {

    return { ...this.crrState, lastOperation: OPERATIONS.MINUS }
  }
  multiplication(): CalculatorType {

    return { ...this.crrState, lastOperation: OPERATIONS.MULTIPLY }
  }
  division(): CalculatorType {

    return { ...this.crrState, lastOperation: OPERATIONS.DIVIDE }
  }
  percentage(): CalculatorType {

    return { ...this.crrState, lastOperation: OPERATIONS.PERCENT }
  }
  invertSignal(): CalculatorType {

    return { ...this.crrState, lastOperation: OPERATIONS.PLUS_MINUS }
  }
  clearValues(): CalculatorType {
    return { ...DEFAULT_CALC_VALUE.state, lastOperation: OPERATIONS.AC };
  }
  performCalculation(
    buttonLabel: BUTTON_LABELS,
    currentState: CalculatorType
  ): CalculatorType {
    switch (buttonLabel) {
      case BUTTON_LABELS.PLUS: return this.sum();
      case BUTTON_LABELS.MINUS: return this.subtraction();
      case BUTTON_LABELS.MULTIPLY: return this.multiplication();
      case BUTTON_LABELS.DIVIDE: return this.division();
      case BUTTON_LABELS.PERCENT: return this.percentage();
      case BUTTON_LABELS.PLUS_MINUS: return this.invertSignal();
      case BUTTON_LABELS.EQUAL: return currentState;
    }
    return currentState;
  }
}
