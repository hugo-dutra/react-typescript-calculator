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
      alert('MULTIPLY agora...');
    }
    return { ...this.crrState, lastOperation: OPERATIONS.MULTIPLY }
  }
  division(): CalculatorType {
    if (this.crrState.lastOperation === OPERATIONS.DIVIDE) {
      alert('DIVIDE agora...');
    }
    return { ...this.crrState, lastOperation: OPERATIONS.DIVIDE }
  }
  percentage(): CalculatorType {
    alert('PERCENT agora...');
    return { ...this.crrState, lastOperation: OPERATIONS.PERCENT }
  }
  invertSignal(): CalculatorType {
    alert('PLUS_MINUS agora...');
    return { ...this.crrState, lastOperation: OPERATIONS.PLUS_MINUS }
  }
  clearValues(): CalculatorType {
    alert('AC agora...');
    return { ...DEFAULT_CALC_VALUE.state, lastOperation: OPERATIONS.AC };
  }
  equals(): CalculatorType {
    switch (this.crrState.lastOperation) {
      case OPERATIONS.PLUS: return { ...this.sum(), currentNumber: Number(this.crrState.bufferedNumber) + Number(this.crrState.currentNumber), lastOperation: null, bufferedNumber: null };
      case OPERATIONS.MINUS: return { ...this.subtraction(), currentNumber: Number(this.crrState.bufferedNumber) - Number(this.crrState.currentNumber), lastOperation: null, bufferedNumber: null };
      case OPERATIONS.MULTIPLY: return this.multiplication();
      case OPERATIONS.DIVIDE: return this.division();
      case OPERATIONS.PERCENT: return this.percentage();
      case OPERATIONS.PLUS_MINUS: return this.invertSignal();
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
    }
    return currentState;
  }
}
