import React from 'react'

const Greet = (props) => {
    console.log(props)
   return (
    <div>
<h1> 
    Hello {props.name} Name is {props.heroName}
</h1> 
{props.children}
 </div>
)
}
export default Greet
