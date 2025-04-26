import React, { useState } from "react"
import './Tudo.css'

function Tudo() {
    let [todoinput,updateinput] = useState("text")
   let [todolist,updatetodo] = useState(
   [
    {
        id:1,
        task: 'Learn React'
    },
    {
        id:2,
        task: 'Learn JavaScript'
    },
   
   ] 
)
let nextId =3
function addNewTodo() {
if(todoinput == "") {
    alert("Add some Task")
 } else{
  let newTodos = [
    ...todolist ,
    {
        id:nextId++,
        task: todoinput
    }
   ]
   updatetodo( newTodos);
   updateinput("")
 }
}
function  deleteTudo(id) {
 let updatedTodos =todolist.filter(
    (todo) => {
        return todo.id!=id
    }
)
updatetodo(updatedTodos)
}

    return(
<div className="container mt-5 w-50">
    <h3 className="text-center"> Todo App Using React</h3>
    <div className="input-group"> 
<input className="form-control" onChange={(e)=>{
    let task = e.target.value;
    updateinput(task)
}} type="text" value={todoinput}/>
<button
onClick={() => {
    addNewTodo()
}}
className="btn-btn-primary">Add</button>

    </div>
    <ul className="list-group mt-4">
      {
        todolist.map(
            (todo) => {
                return (
                    <li className="list-group-item">
            <p > {todo.task}</p>
            <button onClick={() =>
                {
                    deleteTudo(todo.id)
                }
            } className="btn">❌ </button>
        </li>
                )
            }
        )
      }
        
    </ul>
</div>

    )  
}

export default Tudo