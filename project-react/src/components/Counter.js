import React, { Component } from 'react'

class Counter extends Component {

constructor(props) {
    super(props)
    
    this.state = {
      count: 0  
    }
}
increment() {
   this.setState({
    count: this.state.count + 1
   }, 
   () => {
    console.log('callback value',this.state.count)
}
)
this.setState((prevSate) => ({
    count: prevSate.count + 1
}))
    console.log(this.state.count)
}
//incrementTwo() {
   // this.incrementTwo()
   // this.incrementTwo()
//}
  render() {
    return (
        <div>
      <div>Count - {this.state.count} </div>
      <button onClick={() => this.increment()}> Increment</button>
    </div>
    )
  }
}

export default Counter