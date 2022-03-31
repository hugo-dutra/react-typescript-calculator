import React from 'react'
import CalcDisplay from '../components/CalcDisplay'
import CalcPanel from '../components/CalcPanel'
import '../components/Components.css'

const CalcBody: React.FC = props => {
  return (
    <div className='CalcBody'>
      <CalcDisplay />
      <CalcPanel />
    </div>
  )
}

export default CalcBody