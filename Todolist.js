import React from 'react'
import './index.css';

const Todolist = ({todolist,deleteHnadler})=>{
    return(
        <div>
          {todolist.map((todo,index) =>
          <div key={index}>
            <h5>{todo} &nbsp; <button onClick={()=>deleteHnadler(index)}>Delete</button></h5>
           </div> )}
        </div>
    )
}

export default Todolist