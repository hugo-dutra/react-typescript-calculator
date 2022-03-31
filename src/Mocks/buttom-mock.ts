import { ButtomClasses, ButtonModel, ButtonType } from "../models/ButtonModel"

export const buttonsMock: ButtonModel[] = [
  new ButtonModel('AC', ButtonType.operation, [ButtomClasses.SimpleButton, ButtomClasses.GrayOperationCalcButton]),
  new ButtonModel('+/-', ButtonType.operation, [ButtomClasses.SimpleButton, ButtomClasses.GrayOperationCalcButton]),
  new ButtonModel('%', ButtonType.operation, [ButtomClasses.SimpleButton, ButtomClasses.GrayOperationCalcButton]),
  new ButtonModel('÷', ButtonType.operation, [ButtomClasses.SimpleButton, ButtomClasses.YellowOperationCalcButton]),
  new ButtonModel('7', ButtonType.numeric, [ButtomClasses.SimpleButton, ButtomClasses.NumericCalcButton]),
  new ButtonModel('8', ButtonType.numeric, [ButtomClasses.SimpleButton, ButtomClasses.NumericCalcButton]),
  new ButtonModel('9', ButtonType.numeric, [ButtomClasses.SimpleButton, ButtomClasses.NumericCalcButton]),
  new ButtonModel('x', ButtonType.operation, [ButtomClasses.SimpleButton, ButtomClasses.YellowOperationCalcButton]),
  new ButtonModel('4', ButtonType.numeric, [ButtomClasses.SimpleButton, ButtomClasses.NumericCalcButton]),
  new ButtonModel('5', ButtonType.numeric, [ButtomClasses.SimpleButton, ButtomClasses.NumericCalcButton]),
  new ButtonModel('6', ButtonType.numeric, [ButtomClasses.SimpleButton, ButtomClasses.NumericCalcButton]),
  new ButtonModel('-', ButtonType.operation, [ButtomClasses.SimpleButton, ButtomClasses.YellowOperationCalcButton]),
  new ButtonModel('1', ButtonType.numeric, [ButtomClasses.SimpleButton, ButtomClasses.NumericCalcButton]),
  new ButtonModel('2', ButtonType.numeric, [ButtomClasses.SimpleButton, ButtomClasses.NumericCalcButton]),
  new ButtonModel('3', ButtonType.numeric, [ButtomClasses.SimpleButton, ButtomClasses.NumericCalcButton]),
  new ButtonModel('+', ButtonType.operation, [ButtomClasses.SimpleButton, ButtomClasses.YellowOperationCalcButton]),
  new ButtonModel('0', ButtonType.numeric, [ButtomClasses.SimpleButton, ButtomClasses.DoubleSizeButton13]),
  new ButtonModel('.', ButtonType.operation, [ButtomClasses.SimpleButton, ButtomClasses.NumericCalcButton]),
  new ButtonModel('=', ButtonType.operation, [ButtomClasses.SimpleButton, ButtomClasses.YellowOperationCalcButton])
]