import { ButtomCssClasses, ButtonModel, ButtonType } from "../models/ButtonModel"

export const buttonsMock: ButtonModel[] = [
  new ButtonModel('AC', ButtonType.OPERATION, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.GRAYOPERATIONCALCBUTTON]),
  new ButtonModel('+/-', ButtonType.OPERATION, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.GRAYOPERATIONCALCBUTTON]),
  new ButtonModel('%', ButtonType.OPERATION, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.GRAYOPERATIONCALCBUTTON]),
  new ButtonModel('÷', ButtonType.OPERATION, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.YELLOWOPERATIONCALCBUTTON]),
  new ButtonModel('7', ButtonType.NUMERIC, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.NUMERICCALCBUTTON]),
  new ButtonModel('8', ButtonType.NUMERIC, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.NUMERICCALCBUTTON]),
  new ButtonModel('9', ButtonType.NUMERIC, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.NUMERICCALCBUTTON]),
  new ButtonModel('x', ButtonType.OPERATION, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.YELLOWOPERATIONCALCBUTTON]),
  new ButtonModel('4', ButtonType.NUMERIC, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.NUMERICCALCBUTTON]),
  new ButtonModel('5', ButtonType.NUMERIC, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.NUMERICCALCBUTTON]),
  new ButtonModel('6', ButtonType.NUMERIC, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.NUMERICCALCBUTTON]),
  new ButtonModel('-', ButtonType.OPERATION, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.YELLOWOPERATIONCALCBUTTON]),
  new ButtonModel('1', ButtonType.NUMERIC, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.NUMERICCALCBUTTON]),
  new ButtonModel('2', ButtonType.NUMERIC, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.NUMERICCALCBUTTON]),
  new ButtonModel('3', ButtonType.NUMERIC, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.NUMERICCALCBUTTON]),
  new ButtonModel('+', ButtonType.OPERATION, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.YELLOWOPERATIONCALCBUTTON]),
  new ButtonModel('0', ButtonType.NUMERIC, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.DOUBLESIZEBUTTON13]),
  new ButtonModel('.', ButtonType.OPERATION, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.NUMERICCALCBUTTON]),
  new ButtonModel('=', ButtonType.OPERATION, [ButtomCssClasses.SIMPLEBUTTON, ButtomCssClasses.YELLOWOPERATIONCALCBUTTON])
]