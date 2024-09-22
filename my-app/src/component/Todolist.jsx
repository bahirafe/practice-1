import React, { useState } from "react";
import {BiCheckDouble, BiEdit, BiTrash, BiCheckCircle, BiReset, BiRefresh } from 'react-icons/bi';
import './todolist.css'
function Todolist(){
const [todos, setTodos]=useState([])
const [inputvalue,setInputvalue]=useState('')
const [editIndex,setEditIndex]=useState(-1)


const addTodo=()=>{
    if(inputvalue.trim()!==''){
if (editIndex !==-1){
const updateTodos=[...todos]
updateTodos[editIndex] ={task:inputvalue,completed:updateTodos[editIndex].completed}
setTodos(updateTodos)
setInputvalue('')
setEditIndex(-1)
}
else{
    setTodos([...todos,{task:inputvalue, completed:false}])
    setInputvalue('')
}
    }
}

const startEdit=(index)=>{
    setInputvalue(todos[index].task)
    setEditIndex(index)
}
const cancelEdit=()=>{
    setInputvalue('')
    setEditIndex(-1)
}
    return (
        <div className="todo-container"><h2>To-Do List </h2>
        <div className="input-section">
            <input type="text" value={inputvalue} onChange={(e)=>setInputvalue(e.target.value)}
            placeholder="Enter a new task"
             className="input-field" />
             {editIndex !==-1 ?(

             
            <>
            <button  className="update -btn"> <BiCheckDouble/></button>
            <button  className="cancel -btn"><BiRefresh></BiRefresh></button>
           
            </>
             ) :(

             
            <button className="add-btn">Add</button>
             )}
        </div>
        <ul className="todo-list">

        </ul>
        </div>
    )
}
export default Todolist