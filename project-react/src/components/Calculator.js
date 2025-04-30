import React from 'react'
import Keypad from './Keypad'
import'./Calulator.css'

function Calculator() {
  return (
    <div className='container'>
        <h2> Calculator App Using React</h2>
        <div>
            <input type='text' className='output'/>
        </div>
    </div>
  )
}
<Keypad></Keypad>
export default Calculator