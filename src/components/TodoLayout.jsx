import { AddTodo } from "./AddTodo"
import TodoItem from "./TodoItem"


export const TodoLayout = () => {
    return (
        <div className="TodoLayout">
            <div style={{display:"flex"}}>
                <AddTodo/>
            </div>
            <div style={{display:"grid"}}>
                <TodoItem/>
            </div>
        </div>
    )
}