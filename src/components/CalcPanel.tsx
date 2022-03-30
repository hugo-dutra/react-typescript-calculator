import React from 'react'
import CalcButton from './CalcButton'

const CalcPanel: React.FC = props => {
  return (
    <div>
      <CalcButton />
      <CalcButton />
      <CalcButton />
      <CalcButton />
    </div>
  )
}

export default CalcPanel