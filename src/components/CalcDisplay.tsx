import React, { useContext, useEffect } from 'react'
import CalcContext from '../store/CalculatorProvider'
import './Components.css'

const CalcDisplay: React.FC = props => {
  const { state } = useContext(CalcContext)
  useEffect(() => {
    console.clear();
    console.log(state);
  }, [state])

  return (
    <input className='CalcDisplay' type='text' placeholder='0' value={state.concatNumber} />
  )
}

export default CalcDisplay