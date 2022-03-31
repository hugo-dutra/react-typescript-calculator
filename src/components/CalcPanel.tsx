import React from 'react'
import NumericButton from './NumericButton'
import { ButtonModel } from '../models/ButtonModel'
import { buttonsMock } from '../Mocks/buttom-mock'
import OperationButton from './OperationButton'
import { ButtonTypes } from '../enums/ButtonTypes'
import './Components.css'

const CalcPanel: React.FC = props => {
  const buttons: ButtonModel[] = buttonsMock;
  return (
    <div className='CalcPanel'>
      {buttons.map((btn: ButtonModel, idx: number) =>
        btn.buttomType === ButtonTypes.NUMERIC ?
          <NumericButton key={idx} buttonModel={btn} /> :
          <OperationButton key={idx} buttonModel={btn} />)}
    </div>
  )
}

export default CalcPanel