import React, { useContext } from 'react'
import { ButtonModel } from '../models/ButtonModel'
import CalcContext from '../store/CalculatorProvider'
import './Components.css'

const NumericButton: React.FC<{ buttonModel: ButtonModel }> = props => {
  const { state, setState } = useContext(CalcContext)
  const handleSetButtonValue = () => {
    if (state.clearNext) {
      setState({
        concatNumber: props.buttonModel.label,
        displayText: state.concatNumber + props.buttonModel.label,
        currentNumber: +(+state.concatNumber + props.buttonModel.label),
        bufferedNumber: state.bufferedNumber,
        clearNext: false
      })
    } else {
      setState({
        currentNumber: +(+state.concatNumber + props.buttonModel.label),
        displayText: state.concatNumber + props.buttonModel.label,
        concatNumber: state.concatNumber + props.buttonModel.label,
        bufferedNumber: state.bufferedNumber,
        clearNext: false
      })
    }
  }



  return (
    <button
      className={`${props.buttonModel.styleClasses.toString().replace(',', ' ')}`} onClick={handleSetButtonValue}>
      {props.buttonModel.label}
    </button>
  )
}



export default NumericButton