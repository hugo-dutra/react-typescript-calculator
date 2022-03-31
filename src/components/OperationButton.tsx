import React, { useContext } from 'react'
import CalcContext from '../store/CalculatorProvider'
import { ButtonModel } from '../models/ButtonModel'

import { BasicCalculatirImpl } from '../implementations/BasicCalculatorImpl'

const OperationButton: React.FC<{ buttonModel: ButtonModel }> = props => {
  const { state, setState } = useContext(CalcContext)
  let basicCalculatorImpl = new BasicCalculatirImpl(state);

  const handleSetButtonValue = () => {
    setState({ ...basicCalculatorImpl.performCalculation(props.buttonModel.label, state) })
  }
  return (
    <button
      className={`${props.buttonModel.styleClasses.toString().replace(',', ' ')}`} onClick={handleSetButtonValue}>
      {props.buttonModel.label}
    </button>
  )
}

export default OperationButton