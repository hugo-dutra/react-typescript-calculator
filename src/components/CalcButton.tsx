import React from 'react'
import { ButtonModel } from '../models/ButtonModel'
import './Components.css'


const CalcButton: React.FC<{ buttonModel: ButtonModel }> = props => {
  return (
    <button
      className={`${props.buttonModel.styleClasses.toString().replace(',', ' ')}`}  >
      {props.buttonModel.label}
    </button>
  )
}



export default CalcButton