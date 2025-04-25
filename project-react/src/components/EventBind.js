import React, { Component } from 'react'
import Message from './Message'
 class EventBind extends Component 
  {
 constructor(props) {
   super(props)
 
   this.state = {
     Message : 'hello'
   }
 }
clickHandler(){
    this.setState({
        Message:'goodbye!'
    })
    console.log(this)
}
  render() {
    return (
      <div>
        <div> {this.state.Message}</div>
        <button onClick={this.clickHandler.bind(this)}> Click</button>
      </div>
    )
  }
}
  

  
  export default EventBind