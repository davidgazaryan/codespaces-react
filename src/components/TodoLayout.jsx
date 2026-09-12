import { AddTodo } from "./AddTodo"
import TodoItem from "./TodoItem"
import React, { useEffect } from 'react';
import {useState} from 'react';

export const TodoLayout = () => {
    const [newTodo,setNewTodo] = useState('');
    const [todos,setTodos] = useState([]);
    const [complete,setComplete] = useState(false);

    console.log("new todo:",newTodo);

    const addTodo = () => {
        setTodos(prev => [...prev,newTodo])
        setNewTodo('');
    }

    const completeTodo = () => {
        setComplete(prev => !prev);
    }
    const deleteTodo = (index) => {
        setTodos(todos.filter((value,i) => value != todos[index]));
    }

    return (
        <div className="TodoLayout">
            <div style={{display:"flex", flexDirection:"", textAlign:"center",justifyContent:"center"}}>
                <AddTodo newTodo={setNewTodo} addTodo={addTodo} val={newTodo}/>
            </div>
            <div style={{display:"grid",paddingTop:"2rem", maxWidth:"5000px"}}>
                {todos.map((todo,index) => (
                        <TodoItem key={index} todos={todo} onCompleted={completeTodo} onDelete={() => deleteTodo(index)} completed={complete}/>
                ))}
                
            </div>
        </div>
    )
}