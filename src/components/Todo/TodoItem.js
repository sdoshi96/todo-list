import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../../redux/actions';


function TodoItem({todo}) {
    const [edit, setEdit] = useState(false);
    const [name, setName] = useState();
    let dispatch = useDispatch();

    return (
        <div>
            <div className="row mx-3 align-items-center">
                <div className="col">
                    {edit ? <input type="text" className="form-control" value={name} onChange={(e)=>{setName(e.target.value)}} /> : <h4>{todo.name}</h4>}
                </div>
                <button className="col btn btn-primary m-2" onClick={()=>{
                    dispatch(updateTodo({
                        ...todo,
                        name: name
                    }))
                    if(edit){
                        setName(todo.name);

                    } setEdit(!edit);
                }}>{edit? "Update" : "Edit"}</button>
                <button className="col btn btn-danger m-2" onClick={()=> dispatch(deleteTodo(todo.id))}>Delete</button> 
            </div>           
        </div>
    )
}

export default TodoItem;
