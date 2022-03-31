import { ButtomCssClasses } from "../enums/ButtonCssClasses";
import { BUTTON_LABELS } from "../enums/ButtonLabels";
import { ButtonTypes } from "../enums/ButtonTypes";

export class ButtonModel {
  label: BUTTON_LABELS;
  buttomType: ButtonTypes;
  styleClasses: ButtomCssClasses[]

  constructor(label: BUTTON_LABELS, buttomType: ButtonTypes, styleClasses: ButtomCssClasses[]) {
    this.label = label;
    this.buttomType = buttomType;
    this.styleClasses = styleClasses;
  }
}