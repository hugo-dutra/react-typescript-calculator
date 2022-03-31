export enum ButtonType {
  numeric = 'numeric',
  operation = 'operation'
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