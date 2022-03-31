export enum ButtonType {
  NUMERIC = 'numeric',
  OPERATION = 'operation'
}

export enum ButtomCssClasses {
  NUMERICCALCBUTTON  = 'NumericCalcButton',
  SIMPLEBUTTON  = 'SimpleButton',
  DOUBLEBUTTON  = 'DoubleButton',
  YELLOWOPERATIONCALCBUTTON  = 'YellowOperationCalcButton',
  GRAYOPERATIONCALCBUTTON  = 'GrayOperationCalcButton',
  DOUBLESIZEBUTTON13  = 'DoubleSizeButton13',
  DOUBLESIZEBUTTON24  = 'DoubleSizeButton24',
  DOUBLESIZEBUTTON35  = 'DoubleSizeButton35',
}

export class ButtonModel {
  label: string;
  buttomType: ButtonType;
  styleClasses: ButtomCssClasses[]

  constructor(label: string, buttomType: ButtonType, styleClasses: ButtomCssClasses[]) {
    this.label = label;
    this.buttomType = buttomType;
    this.styleClasses = styleClasses;
  }
}