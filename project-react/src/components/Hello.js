import React from 'react'

const Hello = ()=> {
// using jsx
  //return (
    //  <div>
      //    <h1>
            //  Using JSX
      //    </h1>
   //   </div>
   //  
   return React.createElement('div',

    {id:'hello' , className:'dummy class' },
     React.createElement('h1',null,'without using jsx') )

 }
export default Hello