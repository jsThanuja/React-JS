import React, { Component } from 'react'

class ClassClick extends Component {
clickHandler (){
    console.log('clicked the button')
}

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}> Click ME</button>
      </div>
    )
  }
}

export default ClassClick