import React, { Component } from 'react'

 class EventStateBind extends Component {
    state={

     product:"Oppo A31",
      price:18000

    }
constructor(){
    super()
    this.updateprice = this.updateprice.bind(this)
}
  render() {
    return (
      <>

      <h2>product:{this.state.product}</h2>
      <p>price: {this.state.price}</p>

      <input id='price' type='number'/>

      <button onClick={this.updateprice} > Update</button>
       
      </>
    )
  }
updateprice(){
    let p = document.getElementById('price').value;
   
    this.setState({
        price: p
    }, () => {
        console.log(this.state);
    })
    
}
}

export default EventStateBind