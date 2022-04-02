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
    if (this.crrState.lastOperation === OPERATIONS.PLUS) {
      const newBufferedNumber = Number(this.crrState.bufferedNumber) + Number(this.crrState.currentNumber);
      return { ...this.crrState, lastOperation: OPERATIONS.PLUS, bufferedNumber: newBufferedNumber, concatNumber: '', displayText: newBufferedNumber.toString() }
    }
    return { ...this.crrState, lastOperation: OPERATIONS.PLUS, bufferedNumber: this.crrState.currentNumber, currentNumber: null, concatNumber: '', displayText: this.crrState.bufferedNumber?.toString() }
  }
  subtraction(): CalculatorType {
    if (this.crrState.lastOperation === OPERATIONS.MINUS) {
      const newBufferedNumber = Number(this.crrState.bufferedNumber) - Number(this.crrState.currentNumber);
      return { ...this.crrState, lastOperation: OPERATIONS.MINUS, bufferedNumber: newBufferedNumber, concatNumber: '', displayText: newBufferedNumber.toString() }
    }
    return { ...this.crrState, lastOperation: OPERATIONS.MINUS, bufferedNumber: this.crrState.currentNumber, currentNumber: this.crrState.bufferedNumber, concatNumber: '', displayText: this.crrState.bufferedNumber?.toString() }
  }
  multiplication(): CalculatorType {
    if (this.crrState.lastOperation === OPERATIONS.MULTIPLY) {
      const newBufferedNumber = Number(this.crrState.bufferedNumber) * Number(this.crrState.currentNumber);
      return { ...this.crrState, lastOperation: OPERATIONS.MULTIPLY, bufferedNumber: newBufferedNumber, concatNumber: '', displayText: newBufferedNumber.toString() }
    }
    return { ...this.crrState, lastOperation: OPERATIONS.MULTIPLY, bufferedNumber: this.crrState.currentNumber, currentNumber: this.crrState.bufferedNumber, concatNumber: '', displayText: this.crrState.bufferedNumber?.toString() }
  }
  division(): CalculatorType {
    if (this.crrState.lastOperation === OPERATIONS.DIVIDE) {
      const newBufferedNumber = Number(this.crrState.bufferedNumber) / Number(this.crrState.currentNumber);
      return { ...this.crrState, lastOperation: OPERATIONS.DIVIDE, bufferedNumber: newBufferedNumber, concatNumber: '', displayText: newBufferedNumber.toString() }
    }
    return { ...this.crrState, lastOperation: OPERATIONS.DIVIDE, bufferedNumber: this.crrState.currentNumber, currentNumber: this.crrState.bufferedNumber, concatNumber: '', displayText: this.crrState.bufferedNumber?.toString() }
  }
  percentage(): CalculatorType {
    if (this.crrState.lastOperation === OPERATIONS.PERCENT) {
      const newBufferedNumber = Number(this.crrState.bufferedNumber) * Number(this.crrState.currentNumber) / 100;
      return { ...this.crrState, lastOperation: OPERATIONS.PERCENT, bufferedNumber: newBufferedNumber, concatNumber: '', displayText: newBufferedNumber.toString() }
    }
    return { ...this.crrState, lastOperation: OPERATIONS.PERCENT, bufferedNumber: this.crrState.currentNumber, currentNumber: this.crrState.bufferedNumber, concatNumber: '', displayText: this.crrState.bufferedNumber?.toString() }
  }
  invertSignal(): CalculatorType {
    const newBufferedNumber = -1 * Number(this.crrState.currentNumber)
    return { ...this.crrState, lastOperation: OPERATIONS.PLUS_MINUS, bufferedNumber: newBufferedNumber, currentNumber: newBufferedNumber, concatNumber: '', displayText: newBufferedNumber.toString() }
  }
  clearValues(): CalculatorType {
    return { ...DEFAULT_CALC_VALUE.state, lastOperation: OPERATIONS.AC };
  }
  equals(): CalculatorType {
    switch (this.crrState.lastOperation) {
      case OPERATIONS.PLUS: return { ...this.sum(), currentNumber: Number(this.crrState.bufferedNumber) + Number(this.crrState.currentNumber), lastOperation: null, bufferedNumber: null };
      case OPERATIONS.MINUS: return { ...this.subtraction(), currentNumber: Number(this.crrState.bufferedNumber) - Number(this.crrState.currentNumber), lastOperation: null, bufferedNumber: null };
      case OPERATIONS.MULTIPLY: return { ...this.multiplication(), currentNumber: Number(this.crrState.bufferedNumber) * Number(this.crrState.currentNumber), lastOperation: null, bufferedNumber: null };
      case OPERATIONS.DIVIDE: return { ...this.division(), currentNumber: Number(this.crrState.bufferedNumber) / Number(this.crrState.currentNumber), lastOperation: null, bufferedNumber: null };
      case OPERATIONS.PERCENT: return { ...this.percentage(), currentNumber: Number(this.crrState.bufferedNumber) * Number(this.crrState.currentNumber) / 100, lastOperation: null, bufferedNumber: null };
      case OPERATIONS.PLUS_MINUS: return { ...this.invertSignal(), currentNumber: -1 * Number(this.crrState.bufferedNumber), lastOperation: null, bufferedNumber: null };
      case OPERATIONS.AC: return this.clearValues();
    }
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
      case BUTTON_LABELS.EQUAL: return this.equals();
      case BUTTON_LABELS.AC: return this.clearValues();
    }
    return currentState;
  }
}
