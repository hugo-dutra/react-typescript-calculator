export interface CalculatorService {
  sum: (currentNumber: number, bufferedNumber: number) => number;
  subtraction: (currentNumber: number, bufferedNumber: number) => number;
  multiplication: (currentNumber: number, bufferedNumber: number) => number;
  division: (currentNumber: number, bufferedNumber: number) => number;
  percentage: (currentNumber: number, bufferedNumber: number) => number;
  invertSignal: (currentNumber: number) => number;
  equality: (currentNumber: number, bufferedNumber: number) => number;

}
