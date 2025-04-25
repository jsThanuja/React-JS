import {useState} from "react"
import './count.css';


function CounterApp () {
    
    
let [counter,setcounter] = useState(0);
let stock = 10;
    return(
        <>
        <h1>Counter App In React </h1>
        <div  className="Wrapper">
            <button className="minus" disabled={counter === 0} onClick={() =>
                {
                    if(counter>0){
                        setcounter(counter-1)
                    }
                }
            }> - </button>
            <p className="counter">{counter} </p>
             <button className="plus" disabled={counter === stock} onClick={() =>
                {
                    if(counter<stock){
                        setcounter(counter+1)
                    }
                }
            } > + </button>
       </div> </> 
    )

}

export default CounterApp