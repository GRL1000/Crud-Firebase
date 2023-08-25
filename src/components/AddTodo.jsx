import { useState } from 'react';
import {db} from '../data/firebase';
import { collection, addDoc } from 'firebase/firestore';

function AddTodo() {
    const [title, setTitle] = useState([]);

    const Insert = async (e) => {
        e.preventDefault();
        if(title !== "") {
            await addDoc(collection(db, "todos"), {
                title,
                completed: false,
            });
            setTitle("");
        }
    };

    return(
        <form onSubmit={Insert}>
            <div className='input_container'>
                <input className='txtTodo' type='text' placeholder='Ingresar tarea'
                value={title} onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div className='btn_container'>
                <button>Insertar</button>
            </div>
        </form>
    );
}

export default AddTodo;
