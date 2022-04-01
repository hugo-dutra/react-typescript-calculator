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
  sum(): CalculatorType {
    return DEFAULT_CALC_VALUE.state
  }
  subtraction(): CalculatorType {
    return DEFAULT_CALC_VALUE.state
  }
  multiplication(): CalculatorType {
    return DEFAULT_CALC_VALUE.state
  }
  division(): CalculatorType {
    return DEFAULT_CALC_VALUE.state
  }
  percentage(): CalculatorType {
    return DEFAULT_CALC_VALUE.state
  }
  invertSignal(): CalculatorType {
    return DEFAULT_CALC_VALUE.state
  }
  equal(): CalculatorType {
    return DEFAULT_CALC_VALUE.state
  }
  clearValues(): CalculatorType {
    return DEFAULT_CALC_VALUE.state
  }
  performCalculation(buttonLabel: BUTTON_LABELS, currentState: CalculatorType): CalculatorType {
    this.crrState = currentState
    console.clear();
    console.log(this.crrState);
    switch (buttonLabel) {
      case BUTTON_LABELS.PLUS: return this.sum()
      case BUTTON_LABELS.MINUS: return this.subtraction()
      case BUTTON_LABELS.MULTIPLY: return this.multiplication()
      case BUTTON_LABELS.DIVIDE: return this.division()
      case BUTTON_LABELS.EQUAL: return this.equal()
      case BUTTON_LABELS.PLUS_MINUS: return this.invertSignal()
      default: return DEFAULT_CALC_VALUE.state
    }
  }






}