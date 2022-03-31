import { ButtomCssClasses } from "../enums/ButtonCssClasses";
import { ButtonLabels } from "../enums/ButtonLabels";
import { ButtonTypes } from "../enums/ButtonTypes";

export class ButtonModel {
  label: ButtonLabels;
  buttomType: ButtonTypes;
  styleClasses: ButtomCssClasses[]

  constructor(label: ButtonLabels, buttomType: ButtonTypes, styleClasses: ButtomCssClasses[]) {
    this.label = label;
    this.buttomType = buttomType;
    this.styleClasses = styleClasses;
  }
}