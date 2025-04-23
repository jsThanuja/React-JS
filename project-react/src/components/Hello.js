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
   return React.createElement('div',null, React.createElement('h1',null,'without using jsx') )

 }
export default Hello