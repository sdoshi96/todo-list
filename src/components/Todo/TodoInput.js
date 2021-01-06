import React, {useState} from 'react';
import { addTodo } from '../../redux/actions';
import {v1 as uuid} from 'uuid';
import { useDispatch } from 'react-redux';

function TodoInput() {
    const [name, setName] = useState();
    let dispatch = useDispatch();
    return (
        <div>
            <h3>TodoInput</h3>
            <div className="row m-2">
                <input type="text" className=" col form-control" value={name} onChange={(e)=>setName(e.target.value)} />
                <button className="col btn btn-primary mx-2" onClick={()=>{ 
                dispatch(addTodo({
                    id: uuid(),
                    name: name
                }
                ));
                setName('');
            }}
            >Add</button>
            </div>
        </div>
    )
}

export default TodoInput;
