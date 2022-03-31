export enum ButtonType {
  numeric = 'numeric',
  operation = 'operation'
}

export enum ButtonLabels {
  AC = 'AC', PLUS_MINUS = '+/-', PERCENT = '%',
  DIVIDE = '÷', SEVEN = '7', EIGHT = '8',
  NINE = '9', MULTIPLY = 'X', FOUR = '4',
  FIVE = '5', SIX = '6', MINUS = '-',
  ONE = '1', TWO = '2', TREE = '3',
  PLUS = '+', ZERO = '0', POINT = '.',
  EQUAL = '='
}

export enum ButtomClasses {
  NumericCalcButton = 'NumericCalcButton',
  SimpleButton = 'SimpleButton',
  DoubleButton = 'DoubleButton',
  YellowOperationCalcButton = 'YellowOperationCalcButton',
  GrayOperationCalcButton = 'GrayOperationCalcButton',
  DoubleSizeButton13 = 'DoubleSizeButton13',
  DoubleSizeButton24 = 'DoubleSizeButton24',
  DoubleSizeButton35 = 'DoubleSizeButton35',
}

export class ButtonModel {
  label: string;
  buttomType: ButtonType;
  styleClasses: ButtomClasses[]

  constructor(label: string, buttomType: ButtonType, styleClasses: ButtomClasses[]) {
    this.label = label;
    this.buttomType = buttomType;
    this.styleClasses = styleClasses;
  }
}