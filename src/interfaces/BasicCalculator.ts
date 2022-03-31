import { BUTTON_LABELS } from "../enums/ButtonLabels";
import { CalculatorType } from "../store/CalculatorProvider";

export interface BasicCalculator {
  sum(currentState: CalculatorType): CalculatorType;
  subtraction(currentState: CalculatorType): CalculatorType;
  multiplication(currentState: CalculatorType): CalculatorType;
  division(currentState: CalculatorType): CalculatorType;
  percentage(currentState: CalculatorType): CalculatorType;
  invertSignal(currentState: CalculatorType): CalculatorType;
  clearValues(currentState: CalculatorType): CalculatorType;
  equal(currentState: CalculatorType): CalculatorType;
  performCalculation(buttonLabel: BUTTON_LABELS, currentState: CalculatorType): CalculatorType;
}