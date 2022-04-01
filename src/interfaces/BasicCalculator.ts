import { BUTTON_LABELS } from "../enums/ButtonLabels";
import { OPERATIONS } from "../enums/Operations";
import { CalculatorType } from "../store/CalculatorProvider";

export interface BasicCalculator {
  sum(): CalculatorType;
  subtraction(): CalculatorType;
  multiplication(): CalculatorType;
  division(): CalculatorType;
  percentage(): CalculatorType;
  invertSignal(): CalculatorType;
  clearValues(): CalculatorType;
  performCalculation(buttonLabel: BUTTON_LABELS, currentState: CalculatorType): CalculatorType;
}