import React from 'react'
import './StyleAPP.css'


function StyleAPP() {
  return (
    <div className='Wrapper'>
        <h1> <b> <u> <i> Background Color Changer </i></u> </b></h1>
        <input type='color' 
            onChange={
              (e) => {
             document.body.style.background = e.target.value
              }
             }
        />
    </div>
  )
}

export default StyleAPP