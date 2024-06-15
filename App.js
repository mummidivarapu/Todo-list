import React, { useState } from 'react';
import Todolist from './Todolist';
import './index.css';

function App() {
  const[task,setTask]=useState("");
  const[todos,setTodos]=useState([]);

   const changeHandler=e=>{
    setTask(e.target.value)
   }

   const submitHandler =e=>{
    e.preventDefault();
    const newTodos =[...todos,task];
    setTodos(newTodos);
    setTask("");
   }

   const deleteHnadler=(indexValue)=>{
    const newTodos = todos.filter((todo,index) =>index !== indexValue);
    setTodos(newTodos);
   }
  return (
      <div>
        <center>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Todo List</h5>
              <form onSubmit={submitHandler}>
                <input size={30} type="text"  name="task" value={task} onChange={changeHandler}/> &nbsp;
                <input type="submit" value="Add" name="Add" />
              </form><br /><br />
              <Todolist todolist={todos} deleteHnadler={deleteHnadler}/>
            </div>
          </div>
        </center>
      </div>
  );
}

export default App;
