import { ButtomClasses, ButtonLabels, ButtonModel, ButtonType } from "../models/ButtonModel"

export const buttonsMock: ButtonModel[] = [
  new ButtonModel(ButtonLabels.AC, ButtonType.operation, [ButtomClasses.SimpleButton, ButtomClasses.GrayOperationCalcButton]),
  new ButtonModel(ButtonLabels.PLUS_MINUS, ButtonType.operation, [ButtomClasses.SimpleButton, ButtomClasses.GrayOperationCalcButton]),
  new ButtonModel(ButtonLabels.PERCENT, ButtonType.operation, [ButtomClasses.SimpleButton, ButtomClasses.GrayOperationCalcButton]),
  new ButtonModel(ButtonLabels.DIVIDE, ButtonType.operation, [ButtomClasses.SimpleButton, ButtomClasses.YellowOperationCalcButton]),
  new ButtonModel(ButtonLabels.SEVEN, ButtonType.numeric, [ButtomClasses.SimpleButton, ButtomClasses.NumericCalcButton]),
  new ButtonModel(ButtonLabels.EIGHT, ButtonType.numeric, [ButtomClasses.SimpleButton, ButtomClasses.NumericCalcButton]),
  new ButtonModel(ButtonLabels.NINE, ButtonType.numeric, [ButtomClasses.SimpleButton, ButtomClasses.NumericCalcButton]),
  new ButtonModel(ButtonLabels.MULTIPLY, ButtonType.operation, [ButtomClasses.SimpleButton, ButtomClasses.YellowOperationCalcButton]),
  new ButtonModel(ButtonLabels.FOUR, ButtonType.numeric, [ButtomClasses.SimpleButton, ButtomClasses.NumericCalcButton]),
  new ButtonModel(ButtonLabels.FIVE, ButtonType.numeric, [ButtomClasses.SimpleButton, ButtomClasses.NumericCalcButton]),
  new ButtonModel(ButtonLabels.SIX, ButtonType.numeric, [ButtomClasses.SimpleButton, ButtomClasses.NumericCalcButton]),
  new ButtonModel(ButtonLabels.MINUS, ButtonType.operation, [ButtomClasses.SimpleButton, ButtomClasses.YellowOperationCalcButton]),
  new ButtonModel(ButtonLabels.ONE, ButtonType.numeric, [ButtomClasses.SimpleButton, ButtomClasses.NumericCalcButton]),
  new ButtonModel(ButtonLabels.TWO, ButtonType.numeric, [ButtomClasses.SimpleButton, ButtomClasses.NumericCalcButton]),
  new ButtonModel(ButtonLabels.TREE, ButtonType.numeric, [ButtomClasses.SimpleButton, ButtomClasses.NumericCalcButton]),
  new ButtonModel(ButtonLabels.PLUS, ButtonType.operation, [ButtomClasses.SimpleButton, ButtomClasses.YellowOperationCalcButton]),
  new ButtonModel(ButtonLabels.ZERO, ButtonType.numeric, [ButtomClasses.SimpleButton, ButtomClasses.DoubleSizeButton13]),
  new ButtonModel(ButtonLabels.POINT, ButtonType.operation, [ButtomClasses.SimpleButton, ButtomClasses.NumericCalcButton]),
  new ButtonModel(ButtonLabels.EQUAL, ButtonType.operation, [ButtomClasses.SimpleButton, ButtomClasses.YellowOperationCalcButton])
]