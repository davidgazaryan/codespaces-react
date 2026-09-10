import React from 'react';
import {useState} from 'react';

const TodoItem = ({todo, onCompleted, onDelete, onEdit}) => {
    const [s,setS] = useState();
    return (
            <div className='todoItem'>
                <input type='text' id='todo' name='todo' readOnly={true}

                />
            </div>
    )
}
export default TodoItem;