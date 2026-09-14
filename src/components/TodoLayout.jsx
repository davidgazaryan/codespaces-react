import { AddTodo } from "./AddTodo"
import TodoItem from "./TodoItem"
import React, { useEffect } from 'react';
import {useState} from 'react';

export const TodoLayout = () => {
    const [data,setData] = useState([]);
    const [newTodo,setNewTodo] = useState('');
    const [todos,setTodos] = useState([]);
    const [complete,setComplete] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const disabled = newTodo.length === 0;
    console.log("data", data[0]);

    console.log("new todo:",newTodo);

    useEffect(() => {
        const fetchComments = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/commentss")
            if (!response.ok) {
                throw new Error("bad request");
            }
            const data = await response.json();
            setData(data);
        }
        catch(err) {
            console.error("this is the error:",err);
        }
        }
        fetchComments();
    },[])

    const addTodo = () => {
        setTodos(prev => [...prev,newTodo])
        setNewTodo('');
    }

    const completeTodo = () => {
        setComplete(prev => !prev);
    }
    const deleteTodo = (index) => {
        setTodos(todos.filter((value,_) => value != todos[index]));
    }

    return (
        <div className="TodoLayout">
            <div style={{display:"flex", justifyContent:"center"}}>
                <h1 style={{borderBottom:"2px solid",width:"40%",padding:"2rem", borderColor:"grey"}}>Todo Items</h1>
                
            </div>
            <div style={{display:"flex", flexDirection:"", textAlign:"center",justifyContent:"center"}}>
                <AddTodo disabled={disabled} newTodo={setNewTodo} addTodo={addTodo} val={newTodo} />
            </div>
            <div style={{display:"grid",paddingTop:"2rem", maxWidth:"5000px"}}>
                {todos.length> 0 && (
                    <label>
                        Search Todo:
                            <input onChange={(e) => setSearchQuery(e.target.value)} type='text'/>
                    </label>
                                )}
                {todos.filter(value => value.includes(searchQuery.toLowerCase()))
                .map((todo,index) => (
                        <TodoItem key={index} todos={todo} onCompleted={completeTodo} onDelete={() => deleteTodo(index)} completed={complete}/>
                ))}
                
            </div>
        </div>
    )
}