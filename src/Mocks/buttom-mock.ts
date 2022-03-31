import { ButtomCssClasses } from "../enums/ButtonCssClasses";
import { ButtonLabels } from "../enums/ButtonLabels";
import { ButtonTypes } from "../enums/ButtonTypes";
import { ButtonModel } from "../models/ButtonModel";


export const buttonsMock: ButtonModel[] = [
  new ButtonModel(ButtonLabels.AC, ButtonTypes.OPERATION, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.GRAYOPERATIONCALCBUTTON]),
  new ButtonModel(ButtonLabels.PLUS_MINUS, ButtonTypes.OPERATION, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.GRAYOPERATIONCALCBUTTON]),
  new ButtonModel(ButtonLabels.PERCENT, ButtonTypes.OPERATION, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.GRAYOPERATIONCALCBUTTON]),
  new ButtonModel(ButtonLabels.DIVIDE, ButtonTypes.OPERATION, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.YELLOWOPERATIONCALCBUTTON]),
  new ButtonModel(ButtonLabels.SEVEN, ButtonTypes.NUMERIC, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.NUMERICCALCBUTTON]),
  new ButtonModel(ButtonLabels.EIGHT, ButtonTypes.NUMERIC, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.NUMERICCALCBUTTON]),
  new ButtonModel(ButtonLabels.NINE, ButtonTypes.NUMERIC, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.NUMERICCALCBUTTON]),
  new ButtonModel(ButtonLabels.MULTIPLY, ButtonTypes.OPERATION, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.YELLOWOPERATIONCALCBUTTON]),
  new ButtonModel(ButtonLabels.FOUR, ButtonTypes.NUMERIC, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.NUMERICCALCBUTTON]),
  new ButtonModel(ButtonLabels.FIVE, ButtonTypes.NUMERIC, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.NUMERICCALCBUTTON]),
  new ButtonModel(ButtonLabels.SIX, ButtonTypes.NUMERIC, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.NUMERICCALCBUTTON]),
  new ButtonModel(ButtonLabels.MINUS, ButtonTypes.OPERATION, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.YELLOWOPERATIONCALCBUTTON]),
  new ButtonModel(ButtonLabels.ONE, ButtonTypes.NUMERIC, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.NUMERICCALCBUTTON]),
  new ButtonModel(ButtonLabels.TWO, ButtonTypes.NUMERIC, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.NUMERICCALCBUTTON]),
  new ButtonModel(ButtonLabels.TREE, ButtonTypes.NUMERIC, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.NUMERICCALCBUTTON]),
  new ButtonModel(ButtonLabels.PLUS, ButtonTypes.OPERATION, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.YELLOWOPERATIONCALCBUTTON]),
  new ButtonModel(ButtonLabels.ZERO, ButtonTypes.NUMERIC, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.DOUBLESIZEBUTTON13]),
  new ButtonModel(ButtonLabels.POINT, ButtonTypes.NUMERIC, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.NUMERICCALCBUTTON]),
  new ButtonModel(ButtonLabels.EQUAL, ButtonTypes.OPERATION, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.YELLOWOPERATIONCALCBUTTON])
]