import React from 'react'
import CalcButton from './CalcButton'
import { ButtonModel, ButtonType } from '../models/ButtonModel'
import { buttonsMock } from '../Mocks/buttom-mock'
import './Components.css'

const CalcPanel: React.FC = props => {
  const buttons: ButtonModel[] = buttonsMock;
  return (
    <div className='CalcPanel'>
      {buttons.map((btn: ButtonModel, idx: number) => <CalcButton key={idx} buttonModel={btn} />)}
    </div>
  )
}

export default CalcPanel