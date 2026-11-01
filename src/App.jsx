import './App.css';
import { AddRecipe } from './components/AddRecipe';
import { AddTodo } from './components/AddTodo';
import TodoItem from './components/TodoItem';
import { TodoLayout } from './components/TodoLayout';

function App() {
  return (
    <div className="App">
      <TodoLayout/>
      <AddRecipe/>
    </div>
  );
}

export default App;
