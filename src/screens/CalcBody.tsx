import React from 'react'
import CalcDisplay from '../components/CalcDisplay'
import CalcPanel from '../components/CalcPanel'

const CalcBody: React.FC = props => {
  return (
    <div>
      <CalcDisplay />
      <CalcPanel />
    </div>
  )
}

export default CalcBody