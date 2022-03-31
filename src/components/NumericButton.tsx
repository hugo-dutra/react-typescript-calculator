import React, { useContext } from 'react'
import { ButtonModel } from '../models/ButtonModel'
import CalcContext, { CalculatorType } from '../store/CalculatorProvider'
import './Components.css'

const NumericButton: React.FC<{ buttonModel: ButtonModel }> = props => {
  const { state, setState } = useContext(CalcContext)
  const handleSetButtonValue = () => {
    setState({
      currentNumber: +(state.concatNumber + props.buttonModel.label),
      concatNumber: state.concatNumber + props.buttonModel.label,
      bufferedNumber: state.bufferedNumber
    })
  }



  return (
    <button
      className={`${props.buttonModel.styleClasses.toString().replace(',', ' ')}`} onClick={handleSetButtonValue}>
      {props.buttonModel.label}
    </button>
  )
}



export default NumericButton