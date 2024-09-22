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
    setTodos([...todos,{task :inputvalue, completed:false}])
    setInputvalue('')
}
    }
}

const startEdit=(index) => {
    setInputvalue(todos[index].task)
    setEditIndex(index)
}
const cancelEdit=()=>{
    setInputvalue('')
    setEditIndex(-1)
}
const removeTodo=(index)=>{
    const updateTodos=todos.filter((_, i)=> i !==index)
    setTodos(updateTodos)
}
const toggleCompleted=(index)=>{
    const updateTodos=[...todos]
    updateTodos[index].completed=!updateTodos[index].completed
}
    return (
        <div className="todo-container"><h2>To-Do List </h2>
        <div className="input-section">
            <input type="text" value={inputvalue} onChange={(e)=>setInputvalue(e.target.value)}
            placeholder="Enter a new task"
             className="input-field" />
             {editIndex !==-1 ?(

             
            <>
            <button onClick={addTodo} className="update -btn"> <BiCheckDouble/></button>
            <button onClick={cancelEdit} className="cancel -btn"><BiRefresh></BiRefresh></button>
           
            </>
             ) :(

             
            <button onClick={addTodo} className="add-btn">Add</button>
             )}
        </div>
        <ul className="todo-list">
            {todos.map((todo, index)=>(
                <li key={index} className={todo.completed ? "completed" :""}>
                    {todo.task}
                    <div className="btn-group">
                        <button onClick={startEdit} className="btn-edit"><BiEdit/></button>
                        <button onCanPlay={removeTodo} className="btn-remove"><BiTrash></BiTrash></button>
                        <button className="btn-done" onClick={()=> toggleCompleted}>
                            {todo.completed ? <BiReset></BiReset> :<BiCheckCircle></BiCheckCircle>}
                        </button>
                    </div>
                </li>
            ))}
        </ul>
        </div>
    )
}
export default Todolist