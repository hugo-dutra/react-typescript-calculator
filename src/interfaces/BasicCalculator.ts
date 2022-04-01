import { BUTTON_LABELS } from "../enums/ButtonLabels";
import { CalculatorType } from "../store/CalculatorProvider";

export interface BasicCalculator {
  sum(clearCurrentNumber:boolean): CalculatorType;
  subtraction(clearCurrentNumber:boolean): CalculatorType;
  multiplication(clearCurrentNumber:boolean): CalculatorType;
  division(clearCurrentNumber:boolean): CalculatorType;
  percentage(clearCurrentNumber:boolean): CalculatorType;
  invertSignal(clearCurrentNumber:boolean): CalculatorType;
  clearValues(clearCurrentNumber:boolean): CalculatorType;
  performCalculation(buttonLabel: BUTTON_LABELS, currentState: CalculatorType): CalculatorType;
}