import React, { useState } from "react";

function Todo({todo, handleDelete, toggleComplete, handleEdit}) {

    const [newTitle, setNewTitle] = useState(todo.title);

    const handelChange=(e)=> {
        if(todo.completed===true) {
            setNewTitle(todo.title)
        }
        else {
            todo.title="";
            setNewTitle(e.target.value)
        }
    }

    return(
        <div className="todo">
            <input className="list" style={{textDecoration:todo.completed && "line-through"}} 
            value={todo.title===""?newTitle:todo.title} 
            onChange={handelChange}/>

            <div>
                <button className="button-complete" onClick={()=>toggleComplete(todo)}>Marcar</button>
                <button onClick={()=>handleEdit(todo, newTitle)} className="button-edit">Editar</button>
                <button onClick={()=>handleDelete(todo.id)} className="button-delete">Eliminar</button>
            </div>
        </div>
    );
}

export default Todo;
