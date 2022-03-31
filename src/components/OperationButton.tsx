import React, { useContext } from 'react'
import CalcContext, { DEFAULT_CALC_VALUE } from '../store/CalculatorProvider'
import { ButtonModel } from '../models/ButtonModel'
import { ButtonTypes } from '../enums/ButtonTypes'
import { ButtonLabels } from '../enums/ButtonLabels'

const OperationButton: React.FC<{ buttonModel: ButtonModel }> = props => {
  const { state, setState } = useContext(CalcContext)
  const handleSetButtonValue = () => {
    switch (props.buttonModel.label) {
      case ButtonLabels.AC: setState(DEFAULT_CALC_VALUE.state)
        break;
      case ButtonLabels.PLUS_MINUS: setState({
        concatNumber: state.concatNumber.includes('-') ?
          state.concatNumber.replace('-', '') :
          '-' + state.concatNumber,
        currentNumber: -1 * state.currentNumber,
        bufferedNumber: state.bufferedNumber
      })
        break;
      default:
        break;
    }
  }
  return (
    <button
      className={`${props.buttonModel.styleClasses.toString().replace(',', ' ')}`} onClick={handleSetButtonValue}>
      {props.buttonModel.label}
    </button>
  )
}

export default OperationButton