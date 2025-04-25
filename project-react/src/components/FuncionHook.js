import React, { useState } from 'react'

 function FuctionHook() {



    let [product, updateName] = useState("JS Thanuja")
    let [chara, updatechara] = useState(10)

    useState({
        pname:"charun",
        
    })
  return ( 
    <>
    <h1>Enter Your Name:{product}</h1> 
    <p>My Name is:{chara}</p>
    <input id='pname' />
    <button onClick={ () => 
        { 
let mprice = document.getElementById('pname').value;
// product = pname;
   updatechara(mprice)
}
    }>update</button>
    </>
  )
} 
export default FuctionHook
