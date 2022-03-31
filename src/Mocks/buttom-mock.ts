import { ButtomCssClasses } from "../enums/ButtonCssClasses";
import { BUTTON_LABELS } from "../enums/ButtonLabels";
import { ButtonTypes } from "../enums/ButtonTypes";
import { ButtonModel } from "../models/ButtonModel";


export const buttonsMock: ButtonModel[] = [
  new ButtonModel(BUTTON_LABELS.AC, ButtonTypes.OPERATION, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.GRAYOPERATIONCALCBUTTON]),
  new ButtonModel(BUTTON_LABELS.PLUS_MINUS, ButtonTypes.OPERATION, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.GRAYOPERATIONCALCBUTTON]),
  new ButtonModel(BUTTON_LABELS.PERCENT, ButtonTypes.OPERATION, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.GRAYOPERATIONCALCBUTTON]),
  new ButtonModel(BUTTON_LABELS.DIVIDE, ButtonTypes.OPERATION, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.YELLOWOPERATIONCALCBUTTON]),
  new ButtonModel(BUTTON_LABELS.SEVEN, ButtonTypes.NUMERIC, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.NUMERICCALCBUTTON]),
  new ButtonModel(BUTTON_LABELS.EIGHT, ButtonTypes.NUMERIC, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.NUMERICCALCBUTTON]),
  new ButtonModel(BUTTON_LABELS.NINE, ButtonTypes.NUMERIC, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.NUMERICCALCBUTTON]),
  new ButtonModel(BUTTON_LABELS.MULTIPLY, ButtonTypes.OPERATION, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.YELLOWOPERATIONCALCBUTTON]),
  new ButtonModel(BUTTON_LABELS.FOUR, ButtonTypes.NUMERIC, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.NUMERICCALCBUTTON]),
  new ButtonModel(BUTTON_LABELS.FIVE, ButtonTypes.NUMERIC, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.NUMERICCALCBUTTON]),
  new ButtonModel(BUTTON_LABELS.SIX, ButtonTypes.NUMERIC, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.NUMERICCALCBUTTON]),
  new ButtonModel(BUTTON_LABELS.MINUS, ButtonTypes.OPERATION, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.YELLOWOPERATIONCALCBUTTON]),
  new ButtonModel(BUTTON_LABELS.ONE, ButtonTypes.NUMERIC, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.NUMERICCALCBUTTON]),
  new ButtonModel(BUTTON_LABELS.TWO, ButtonTypes.NUMERIC, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.NUMERICCALCBUTTON]),
  new ButtonModel(BUTTON_LABELS.TREE, ButtonTypes.NUMERIC, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.NUMERICCALCBUTTON]),
  new ButtonModel(BUTTON_LABELS.PLUS, ButtonTypes.OPERATION, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.YELLOWOPERATIONCALCBUTTON]),
  new ButtonModel(BUTTON_LABELS.ZERO, ButtonTypes.NUMERIC, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.DOUBLESIZEBUTTON13]),
  new ButtonModel(BUTTON_LABELS.POINT, ButtonTypes.NUMERIC, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.NUMERICCALCBUTTON]),
  new ButtonModel(BUTTON_LABELS.EQUAL, ButtonTypes.OPERATION, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.YELLOWOPERATIONCALCBUTTON])
]