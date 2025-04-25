import React from 'react'

 function FuctionClick() {
    function clickHandler() {
     console.log('button clicked')   
    }
  return (
    <div>
        <button onClick={clickHandler}> Click </button>

    </div>
  )
} 
{/*
 class FuctionClick extends React.Component {

product = "oppo A31"
price = 19000

   render() {
     return (
      <>
         <h2>Product</h2>
         <p>Price</p>
      </>
     
     )
   }
 }
 
*/}

 export default FuctionClick

